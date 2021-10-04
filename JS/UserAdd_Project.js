$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});
let github_regex = /https:\/\/github.com\//gm;
let githubwww_regex = /https:\/\/www.github.com\//gm;
const loadingDiv = document.getElementById("loading");
const project_form = document.getElementById("project_form");
function toTitleCase(str) {
  return str.replace(
      /\w\S*/g,
      function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
}
project_form.addEventListener("submit", (e) => {
  e.preventDefault();
});
let projname = localStorage.getItem("project_name");
document.getElementById("projname").innerHTML = toTitleCase(projname);
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
function submitform() {
  let flag = 0;
  let git = document.getElementById("git").value;
  let design = document.getElementById("design").value;
  let demo = document.getElementById("personal_website").value;
  let bio = document.getElementById("bio").value;
  if (bio == "") {
    document.getElementById("error_bio").style.visibility = "visible";
    flag = 1;
  }
  if (github_regex.test(git) == false && git.trim() != "" && githubwww_regex.test(git) == false)
  {
    flag = 1;
    swal("Warning!!", "Please enter a valid GitHub link.", "warning");
  }
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      user.getIdToken().then(function (idToken) {
        auth = idToken;
        if (flag == 0) {
          axios
            .post(
              `${url}/projects/create`,
              {
                name: projname,
                code: git,
                design: design,
                demonstration: demo,
                description: bio,
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
                "Project has been created successfully",
                "success"
              ).then(() => {
                window.location.href = "./Project_Profile.html?" + response.data._id;
              });
            })
            .catch((error) => {
              console.error("Error:", error);
              if(error.response.status == 400)
              {
                swal("Warning!!", "Some unknown error occured, please try again.", "warning");
              }
              if(error.response.status == 417)
              {
                swal("Warning!!", "Please enter all the required fields.", "warning");
              }
            });
        }
      });
    } else {
      // User is signed out
    }
  });
}