$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerwobtn.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
});
const loadingDiv = document.getElementById('loading');
const form = document.getElementById("form");
form.addEventListener('submit', (e) => {
    (e).preventDefault();
    let username = document.getElementById("username");
    let phone_num = document.getElementById("phone");
    let college = document.getElementById("college");
    let website = document.getElementById("website");
    let logo = "../Assets/Images/blank-profile.png";
    let res = checkInputs(username, phone_num, college);
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            user.getIdToken().then(function (idToken) {
                console.log(idToken)
                auth = idToken
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
            })
        } else {
            // User is signed out
            console.log("I'm signed out!")
        }
    });
});
function checkInputs(username, phone_num, college) {
    let flag = 0;
    //name should be only alphabets and of max length 30
    username.value = username.value.trim();
    college.value = college.value;
    let coll = college.value;
    let n = username.value.length;
    let reg1 = /^[a-zA-Z][a-zA-Z\s]*$/;
    let reg2 = /^[6-9]\d{9}$/;
    if (n <= 30) {
        if (reg1.test(username.value) === true) {
            onSuccess(username);
            console.log(username);
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
        console.log(phone_num)
        flag = flag + 1;
    }
    else {
        onError(phone_num, "Enter a valid phone number");
    }
    //college name only alphabets
    let x =0;
    for(let i=0;i<coll.length;i++){
        if(coll.charCodeAt(i)>47 && coll.charCodeAt(i)<58){
            onError(college,"Enter valid college name");
            x = 1;
            break;
        }
    }
    if(x == 0){
        onSuccess(college);
        console.log(coll);
        flag=flag+1;
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