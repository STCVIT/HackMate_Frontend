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
const college = sessionStorage.getItem("COLLEGE");
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
// var n = 0;
function arrayRemove(arr, value) {
  return arr.filter(function (geeks) {
    return geeks != value;
  });
}
let choice = [];
app.addEventListener("click", function () {
  if (app.classList == "button1") {
    app.classList.remove("button1");
    app.classList.add("button");
    choice.push("appdev");
  } else {
    app.classList.add("button1");
    app.classList.remove("button");
    choice = arrayRemove(choice, "appdev");
  }
});
frontend.addEventListener("click", function () {
  if (frontend.classList == "button1") {
    frontend.classList.remove("button1");
    frontend.classList.add("button");
    choice.push("frontend");
  } else {
    frontend.classList.remove("button");
    frontend.classList.add("button1");
    choice = arrayRemove(choice, "frontend");
  }
});
backend.addEventListener("click", function () {
  if (backend.classList == "button1") {
    backend.classList.remove("button1");
    backend.classList.add("button");
    choice.push("backend");
  } else {
    backend.classList.remove("button");
    backend.classList.add("button1");
    choice = arrayRemove(choice, "backend");
  }
});
ui.addEventListener("click", function () {
  if (ui.classList == "button1") {
    ui.classList.remove("button1");
    ui.classList.add("button");
    choice.push("ui/ux");
  } else {
    ui.classList.remove("button");
    ui.classList.add("button1");
    choice = arrayRemove(choice, "ui/ux");
  }
});
machine.addEventListener("click", function () {
  if (machine.classList == "button1") {
    machine.classList.remove("button1");
    machine.classList.add("button");
    choice.push("ml");
  } else {
    machine.classList.remove("button");
    machine.classList.add("button1");
    choice = arrayRemove(choice, "ml");
  }
});
management.addEventListener("click", function () {
  if (management.classList == "button1") {
    management.classList.remove("button1");
    management.classList.add("button");
    choice.push("management");
  } else {
    management.classList.remove("button");
    management.classList.add("button1");
    choice = arrayRemove(choice, "management");
  }
});
cyber.addEventListener("click", function () {
  if (cyber.classList == "button1") {
    cyber.classList.remove("button1");
    cyber.classList.add("button");
    choice.push("cybersecurity");
  } else {
    cyber.classList.remove("button");
    cyber.classList.add("button1");
    choice = arrayRemove(choice, "cybersecurity");
  }
});
block.addEventListener("click", function () {
  if (block.classList == "button1") {
    block.classList.remove("button1");
    block.classList.add("button");
    choice.push("blockchain");
  } else {
    block.classList.remove("button");
    block.classList.add("button1");
    choice = arrayRemove(choice, "blockchain");
  }
});

function make_profile() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      user.getIdToken().then(function (idToken) {
        auth = idToken;
        if (choice.length == 0) {
          swal("WARNING!!", "Please select at least one skill", {
            icon: "warning",
          });
        } else {
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
            .then((response) => {
              {
                if (response.status == 400) {
                  swal(
                    "Warning!!",
                    "Some unknown error occured, please try again.",
                    "warning"
                  )};
              }
              if (response.status == 417) {
                swal(
                  "Warning!!",
                  "Please enter all the required fields.",
                  "warning"
                );
              }
              response.text();
            })
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
                  if (error.response.status == 404) {
                    swal("Warning!!", "Please enter some skills.", "warning");
                  }
                  if (error.response.status == 403) {
                    swal("Warning!!", "Invalid.", "warning");
                  }

                  if (error.response.status == 400) {
                    swal(
                      "Warning!!",
                      "Some unknown error occured, please try again.",
                      "warning"
                    );
                  }
                });
            })
            .catch((error) => {
              console.error("Error:", error);
              if (error.response.status == 400) {
                swal(
                  "Warning!!",
                  "Some unknown error occured, please try again.",
                  "warning"
                );
              }
              if (error.response.status == 417) {
                swal(
                  "Warning!!",
                  "Please enter all the required fields.",
                  "warning"
                );
              }
            });
        }
      });
    } else {
      // User is signed out
    }
  });
}
