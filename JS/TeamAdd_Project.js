$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});
let teamproj;
let github_regex = /https:\/\/github.com\//gm;
let githubwww_regex = /https:\/\/www.github.com\//gm;
const loadingDiv = document.getElementById("loading");
const project_form = document.getElementById("project_form");
project_form.addEventListener("submit", (e) => {
  e.preventDefault();
});
var teamid = localStorage.getItem("team_id");
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    user.getIdToken().then(function (idToken) {
      auth = idToken;
      axios(`${url}/DN_Team/${teamid}`, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      })
        .then((response) => {
          team = response.data;
          if (team.team.hasOwnProperty("project_description")) {
            document.getElementById("projname").innerHTML = toTitleCase(
              team.team.project_name
            );
            teamproj = team.team.project_name;
            document.project_form.git.value = team.team.code;
            document.project_form.design.value = team.team.design;
            document.project_form.personal_website.value =
              team.team.demonstration;
            document.getElementById("bio").innerHTML =
              team.team.project_description;
          } else {
            teamproj = localStorage.getItem("teamproj");
            document.getElementById("projname").innerHTML =
              toTitleCase(teamproj) + ".";
          }
          document.getElementById("loading").style.visibility = "hidden";
        })
        .catch((error) => {
          if (error.response.status == 404) {
            swal(
              "Warning!!",
              "Team not found.",
              "warning"
            );
          }
          if (error.response.status == 400) {
            swal(
              "Warning!!",
              "Some unknown error occured, please try again.",
              "warning"
            );
          }
          console.error("Error: " + error);
        });
    });
  } else {
    // User is signed out
  }
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
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;

      if (flag == 0) {
        axios
          .patch(
            `${url}/DN_Team/update/${teamid}`,
            {
              project_name: teamproj,
              code: git,
              design: design,
              demonstration: demo,
              project_description: bio,
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
            ).then((okay) => {
              if (okay) {
                window.location.assign("./My_teams.html");
              }
            });
          })
          .catch((error) => {
            if (error.response.status == 403) {
              swal("Error!", "Team name already exists.", "warning");
            }
            if (error.response.status == 417) {
              swal(
                "Warning!!",
                "Please enter all the required fields.",
                "warning"
              );
            }
            if (error.response.status == 400) {
              swal(
                "Warning!!",
                "Some unknown error occured, please try again.",
                "warning"
              );
            }
            console.error("Error:", error);
          });
      }
    });
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
