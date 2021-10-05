$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerwobtn.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});
const loadingDiv = document.getElementById("loading");
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.getElementById("username");
  let phone_num = document.getElementById("phone");
  let college = document.getElementById("college");
  let website = document.getElementById("website");
  let logo = "../Assets/Images/blank-profile.png";
  let res = checkInputs(username, phone_num, college, website);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      user.getIdToken().then(function (idToken) {
        auth = idToken;
        if (res == 4) {
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
              logo: logo,
            }),
          })
            .then((response) => response.text())
            .then((text) => {

              swal(
                "SUCCESS!!",
                "Your profile has been created successfully",
                "success"
              ).then(() => {
                window.location.assign("./orghack.html");
              });
            })
            .catch((error) => {
              console.log("Error:", error);
              if (error.response.status == 400) {
                swal("Warning!!", "Some unknown error occured, please try again.", "warning");
              }
              if (error.response.status == 417) {
                swal("Warning!!", "Please enter all the required fields.", "warning");
              }
            });
        }
      });
    } else {
      // User is signed out
    }
  });
});
function checkInputs(username, phone_num, college, website) {
  let flag = 0;
  //name should be only alphabets and of max length 30
  username.value = username.value.trim();
  college.value = college.value;
  website.value = website.value;
  let coll = college.value;
  let n = username.value.length;
  let reg1 = /^[a-zA-Z][a-zA-Z\s]*$/;
  let reg2 = /^[6-9]\d{9}$/;
  let regstr = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  if (n <= 30) {
    if (reg1.test(username.value) === true) {
      onSuccess(username);
      flag = flag + 1;
    } else {
      onError(username, "Enter a valid name");
    }
  } else {
    onError(username, "Enter a valid name");
  }
  //10 digit phone number
  if (phone_num.value.match(reg2)) {
    onSuccess(phone_num);
    flag = flag + 1;
  } else {
    onError(phone_num, "Enter a valid phone number");
  }
  //college name only alphabets
  let x = 0;
  for (let i = 0; i < coll.length; i++) {
    if (coll.charCodeAt(i) > 47 && coll.charCodeAt(i) < 58) {
      onError(college, "Enter valid college name");
      x = 1;
      break;
    }
  }
  if (x == 0) {
    onSuccess(college);
    flag = flag + 1;
  }
  if (regstr.test(website.value) === true || website.value == "") {
    onSuccess(website);
    flag = flag + 1;
  }
  else {
    onError(website, "Enter correct website link");
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
