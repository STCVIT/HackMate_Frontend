$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerwobtn.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});
const loadingDiv = document.getElementById("loading");
let previous = 0;
function get_previousterms() {
  previous = 1;
  sessionStorage.setItem("PREVIOUS", previous);
  window.location.assign("./profile_2nd.html");
}
let photo = "../Assets/Images/blank-profile.png";
const Name = toTitleCase(sessionStorage.getItem("NAME"));
const username = sessionStorage.getItem("USERNAME");
const college = toTitleCase(sessionStorage.getItem("COLLEGE"));
const year = sessionStorage.getItem("YEAR");
const linkedin = sessionStorage.getItem("LINKEDIN");
const git = sessionStorage.getItem("GIT");
const website = sessionStorage.getItem("WEBSITE");
const bio = sessionStorage.getItem("BIO");

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

let app = document.querySelector("#app");
let frontend = document.querySelector("#frontend");
let backend = document.querySelector("#backend");
let ui = document.querySelector("#ui");
let machine = document.querySelector("#machine");
let management = document.querySelector("#management");
let cyber = document.querySelector("#cyber");
let block = document.querySelector("#block");
var n = 0;
function arrayRemove(arr, value) {
  return arr.filter(function (geeks) {
    return geeks != value;
  });
}
let choice = [];
app.addEventListener("click", function () {
  if (n % 2 == 0) {
    app.style.backgroundColor = "#1ea54c";
    choice.push("appdev");
    n = n + 1;
  } else {
    app.style.backgroundColor = "#1D2833";
    choice = arrayRemove(choice, "appdev");
    n = n + 1;
  }
});
frontend.addEventListener("click", function () {
  if (n % 2 == 0) {
    frontend.style.backgroundColor = "#1ea54c";
    choice.push("frontend");
    n = n + 1;
  } else {
    frontend.style.backgroundColor = "#1D2833";
    choice = arrayRemove(choice, "frontend");
    n = n + 1;
  }
});
backend.addEventListener("click", function () {
  if (n % 2 == 0) {
    backend.style.backgroundColor = "#1ea54c";
    choice.push("backend");
    n = n + 1;
  } else {
    backend.style.backgroundColor = "#1D2833";
    choice = arrayRemove(choice, "backend");
    n = n + 1;
  }
});
ui.addEventListener("click", function () {
  if (n % 2 == 0) {
    ui.style.backgroundColor = "#1ea54c";
    choice.push("ui/ux");
    n = n + 1;
  } else {
    ui.style.backgroundColor = "#1D2833";
    choice = arrayRemove(choice, "ui/ux");
    n = n + 1;
  }
});
machine.addEventListener("click", function () {
  if (n % 2 == 0) {
    machine.style.backgroundColor = "#1ea54c";
    choice.push("ml");
    n = n + 1;
  } else {
    machine.style.backgroundColor = "#1D2833";
    choice = arrayRemove(choice, "ml");
    n = n + 1;
  }
});
management.addEventListener("click", function () {
  if (n % 2 == 0) {
    management.style.backgroundColor = "#1ea54c";
    choice.push("management");
    n = n + 1;
  } else {
    management.style.backgroundColor = "#1D2833";
    choice = arrayRemove(choice, "management");
    n = n + 1;
  }
});
cyber.addEventListener("click", function () {
  if (n % 2 == 0) {
    cyber.style.backgroundColor = "#1ea54c";
    choice.push("cybersecurity");
    n = n + 1;
  } else {
    cyber.style.backgroundColor = "#1D2833";
    choice = arrayRemove(choice, "cybersecurity");
    n = n + 1;
  }
});
block.addEventListener("click", function () {
  if (n % 2 == 0) {
    block.style.backgroundColor = "#1ea54c";
    choice.push("blockchain");
    n = n + 1;
  } else {
    block.style.backgroundColor = "#1D2833";
    choice = arrayRemove(choice, "blockchain");
    n = n + 1;
  }
});

function make_profile() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      user.getIdToken().then(function (idToken) {
        auth = idToken;
        if(choice.length==0){
          swal("WARNING!!", "Please select at least one skill", {
            icon: "warning",
        })
      }
      else{
        fetch(`${url}/participant/createProfile`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: "Bearer " + auth,
          },
          body: JSON.stringify({
            name: Name,
            college: college,
            github: git,
            linkedIn: linkedin,
            website: website,
            photo: photo,
            bio: bio,
            graduation_year: year,
            username: username,
          }),
        })
          .then((response) => response.text())
          .then(() => {
            axios
            .post(
              `${url}/skills/mySkills`,
              {
                skills: choice,
              },
              {
                headers: {
                  Authorization: "Bearer " + auth,
                },
              }
            )
            .then((response) => {
              swal(
                "SUCCESS!!",
                "Your profile has been created successfully",
                "success"
              ).then((okay) => {
                if (okay) {
                  window.location.href = "./viewhackathon.html";
                }
              });
            })
            .catch((error) => {
              console.error("Error:", error);
            });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        }
      });
    } 
    else {
      // User is signed out
    }
  });
}