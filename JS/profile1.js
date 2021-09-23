$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerwobtn.txt");
});
const loadingDiv = document.getElementById("loading");
let photo = "../Assets/Images/blank-profile.png";
let back = 0;
let change = 0;
let username;
if (sessionStorage.getItem("BACK") == 1) {
  document.form.name.value = sessionStorage.getItem("NAME");
  document.form.username.value = sessionStorage.getItem("USERNAME");
  document.form.college.value = sessionStorage.getItem("COLLEGE");
  document.form.year.value = sessionStorage.getItem("YEAR");
  back = 0;
  sessionStorage.setItem("BACK", back);
}
function firstpage_profile() {
  let Name = document.getElementById("name");
  let username = document.getElementById("username");
  let college = document.getElementById("college");
  let year = document.getElementById("year");
  const form = document.getElementById("form");
  let result = 0;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    result = checkInputs(Name, username, college, year);
    if (result == 4) {
      sessionStorage.setItem("NAME", Name.value);
      sessionStorage.setItem("USERNAME", username.value);
      sessionStorage.setItem("COLLEGE", college.value);
      sessionStorage.setItem("YEAR", year.value);
      username = sessionStorage.getItem("USERNAME");
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          user.getIdToken().then(function (idToken) {
            auth = idToken;
            function checkusername() {
              fetch(`${url}/participant/checkUserName/${username}`, {
                method: "POST",
                headers: {
                  Authorization: "Bearer " + auth,
                },
              })
                .then((res) => {
                  if (res.status === 403) {
                    swal(
                      "WARNING!!",
                      "Username has already been taken.",
                      "warning"
                    );
                  } else {
                    window.location.assign("./profile_2nd.html");
                  }
                })
                .catch((error) => {
                  console.log(error);
                  console.log(error.message);
                });
            }
            checkusername();
          });
        } else {
          // User is signed out
        }
      });
      // window.location.assign("./profile_2nd.html");
    }
  });
}
function checkInputs(Name, username, college, year) {
  let flag = 0;
  Name.value = Name.value.trim();
  username.value = username.value.trim();
  year.value = year.value.trim();
  college.value = college.value.trim();
  let col_name = college.value;
  let len = Name.value.length;
  let n = username.value.length;
  let reg1 = /^[a-zA-Z][a-zA-Z\s]*$/;
  let reg2 = /^(19|20)\d{2}$/;
  //name should be only alphabets and of max length 30
  if (len <= 30) {
    if (reg1.test(Name.value) === true) {
      onSuccess(Name);
      flag = flag + 1;
    } else {
      onError(Name, "Enter a valid name");
    }
  } else {
    onError(Name, "Enter a valid name");
  }
  if (n <= 20) {
    onSuccess(username);
    flag = flag + 1;
  } else {
    onError(username, "Username cannot be longer than 10 charecters");
  }
  //college name only alphabets
  let x = 0;
  for (let i = 0; i < col_name.length; i++) {
    if (col_name.charCodeAt(i) > 47 && col_name.charCodeAt(i) < 58) {
      onError(college, "Enter valid college name");
      x = 1;
      break;
    }
  }
  if (x == 0) {
    onSuccess(college);
    flag = flag + 1;
  }
  //year check
  if (year.value.match(reg2)) {
    onSuccess(year);
    flag = flag + 1;
  } else {
    onError(year, "Enter valid year");
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
