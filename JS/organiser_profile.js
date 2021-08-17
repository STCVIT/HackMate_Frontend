$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerwobtn.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
});

const form = document.getElementById("form");
form.addEventListener('submit', (e) => {
    (e).preventDefault();
    let username = document.getElementById("name");
    let phone_num = document.getElementById("phone");
    let college = document.getElementById("college");
    let website = document.getElementById("website");
    let logo = "HEY";
    let res = checkInputs(username, phone_num, college);
    if (res == 3) {

        fetch(`${url}/organiser/createProfile`, {

            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: "Bearer " + auth,
            },
            body: JSON.stringify({
                name: username.value,
                college: college.value,
                phone: phone_num.value,
                website: website.value,
                logo: logo
            }),
        })
            .then((response) => response.text())
            .then((text) => {
                console.log("Success:", text);
                window.location.assign("./orghack.html");
                swal("SUCCESS!!", "Your profile has been created successfully", "success");
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    }
});
function checkInputs(username, phone_num, college) {
    let flag = 0;
    //name should be only alphabets and of max length 30
    username.value = username.value.trim();
    college.value = college.value;
    let n = username.value.length;
    let reg1 = /^[a-zA-Z][a-zA-Z\s]*$/;
    let reg2 = /^[1-9]\d{9}$/;
    if (n <= 30) {
        if (username.value.match(reg1)) {
            onSuccess(username);
            flag = flag + 1;
        }
        else {
            onError(username, "Enter a valid name");
        }
    }
    else {
        onError(username, "Enter a valid name");
    }
    //10 digit phone number
    if (phone_num.value.match(reg2)) {
        onSuccess(phone_num);
        flag = flag + 1;
    }
    else {
        onError(phone_num, "Enter a valid phone number");
    }
    //college name only alphabets
    if (college.value.match(reg1)) {
        onSuccess(college);
        flag = flag + 1;
    }
    else {
        onError(college, "Enter valid college name");
    }
    return flag;
}
function onSuccess(input) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "hidden";
}
function onError(input, message) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.innerText = message;
}