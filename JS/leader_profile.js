$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});
const loadingDiv = document.getElementById("loading");
let team_name = document.getElementById("team_name");
let team_code = document.getElementById("team_code");
let hack_id = localStorage.getItem("hack_id");
let hack_name = localStorage.getItem("hackName");
var random_id = localStorage.getItem("team_id");
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    user.getIdToken().then(function (idToken) {
      auth = idToken;
      axios(`${url}/DN_Team/${random_id}`, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      })
        .then((response) => {
          team = response.data;
          team_name.innerHTML = "Team " + team.team.name;
          team_code.innerHTML = team.team.team_code;

          let body = document.getElementById("member_card");
          yourHTML = "";
          for (let i = 0; i < team.team.members.length; i++) {
            if (team.pt_skills[i].participant._id == team.team.admin_id) {
              yourHTML +=
                "<div class='card-row'><div class='d-flex justify-content-start'><div class='component'>";
              yourHTML +=
                "<img id='dp' src='" +
                team.pt_skills[i].participant.photo +
                "'>";
              yourHTML +=
                "<p>" +
                team.pt_skills[i].participant.name +
                "<m>(Leader)</m><br><t>" +
                team.pt_skills[i].skills[0].skill +
                "</t></p></div></div><l id='leave'>YOU</l></div>";
            } else {
              yourHTML +=
                "<div class='card-row'><div class='d-flex justify-content-start'><div class='component'>";
              yourHTML +=
                "<img id='dp' src='" +
                team.pt_skills[i].participant.photo +
                "'>";
              yourHTML +=
                "<p>" +
                team.pt_skills[i].participant.name +
                "<m>(Member)</m><br><t>" +
                team.pt_skills[i].skills[0].skill +
                "</t></p></div></div><l id='member' onclick = 'removemem()' style='cursor : pointer'>REMOVE<identity id='member_id' style='display:none'>" +
                team.pt_skills[i].participant._id +
                "</identity></l></div>";
            }
            body.innerHTML = yourHTML;
            if (team.team.hasOwnProperty("project_name")) {
              document.getElementById("addproject").style.visibility = "hidden";
              document.getElementById("projname").innerHTML =
                team.team.project_name;
              document.getElementById("des").innerHTML =
                team.team.project_description;
            } else {
              document.getElementById("addproject").style.visibility =
                "visible";
              document.getElementById("showproject").style.visibility =
                "hidden";
            }
            document.getElementById("loading").style.visibility = "hidden";
          }
        })
        .catch((error) => {
          if (error.response.status == 400) {
            swal(
              "Warning!!",
              "Some unknown error occured, please try again.",
              "warning"
            );
          } else if (error.response.status == 404) {
            swal("Warning!!", "Team not found.", "warning");
          }
          console.error("Error: " + error);
        });
      function getskills() {
        let fd = document.getElementById("frontend");
        let bd = document.getElementById("backend");
        let ui = document.getElementById("ui");
        let ml = document.getElementById("ml");
        let mg = document.getElementById("management");
        let app = document.getElementById("app");
        let cyber = document.getElementById("cyber");
        let block = document.getElementById("block");
        var skills = [];
        var userskills = [];
        axios(`${url}/DN_Team/getSkills/${random_id}`, {
          headers: {
            Authorization: "Bearer " + auth,
          },
        })
          .then((response) => {
            skills = response.data;
            skills.forEach((element) => {
              userskills.push(element.skill);
            });
            if (userskills.includes("frontend")) {
              fd.checked = true;
            }
            if (userskills.includes("backend")) {
              bd.checked = true;
            }
            if (userskills.includes("management")) {
              mg.checked = true;
            }
            if (userskills.includes("ui/ux")) {
              ui.checked = true;
            }
            if (userskills.includes("ml")) {
              ml.checked = true;
            }
            if (userskills.includes("appdev")) {
              app.checked = true;
            }
            if (userskills.includes("cybersecurity")) {
              cyber.checked = true;
            }
            if (userskills.includes("blockchain")) {
              block.checked = true;
            }
          })
          .catch((error) => {
            if (error.response.status == 400) {
              swal(
                "Warning!!",
                "Some unknown error occured, please try again.",
                "warning"
              );
            } else if (error.response.status == 404) {
              swal("Warning!!", "No skills found.", "warning");
            } else if (error.response.status == 401) {
              swal("Warning!", "No skills found.", "warning");
            }
            console.error("Error: " + error);
          });
      }
      getskills();
      function hackinfo() {
        if (hack_name == "") {
          document.getElementById("hackathon").remove();
          document.getElementById("hackdetails").remove();
        } else {
          axios(`${url}/getHacks/${hack_id}`, {
            headers: {
              Authorization: "Bearer " + auth,
            },
          })
            .then((response) => {
              hack = response.data;

              text_hack = document.getElementById("hackathon").innerHTML =
                "<p><g>Hackathon:</g>" + hack.name + "</p>";
              body = document.getElementById("hackdetails");
              yourhtml = "";
              let hack_start = hack.start.substr(0, hack.start.indexOf("T"));
              let hack_end = hack.end.substr(0, hack.start.indexOf("T"));
              yourhtml +=
                "<div class='card' style='max-width:743px'><div class='card-body'><h2>Learn more about " +
                hack.name +
                "<img src='../Assets/Images/Group 261.svg'></h2><div class='card-details'><div class='col1'><t>Begins:</t><p>" +
                hack_start +
                "</p><p><t>Venue: </t>" +
                hack.venue +
                "</p><p><t>Prize Pool: </t>" +
                hack.prize_pool +
                "</p></div><div class='col2'><t>Ends:</t><p>" +
                hack_end +
                "</p><p><t>Team Size:</t> 1-" +
                hack.max_team_size +
                " participants</p><img src='../Assets/Images/Group 29.svg'></div></div></div></div>";
              body.innerHTML = yourhtml;
            })
            .catch((error) => {
              console.error("Error: " + error);
              if (error.response.status == 400) {
                swal(
                  "Warning!!",
                  "Some unknown error occured, please try again.",
                  "warning"
                );
              }
              else if (error.response.status == 404) {
                swal("Warning!!", "Hack not found.", "warning");
              }
            });
        }
      }
      hackinfo();
    });
  } else {
    // User is signed out
  }
});
function submit() {
  let choice = [];
  let fd = document.getElementById("frontend");
  let bd = document.getElementById("backend");
  let ui = document.getElementById("ui");
  let ml = document.getElementById("ml");
  let mg = document.getElementById("management");
  let app = document.getElementById("app");
  let cyber = document.getElementById("cyber");
  let block = document.getElementById("block");
  if (fd.checked == 1) {
    choice.push("frontend");
  } else {
    if (choice.includes("frontend")) {
      choice = arrayRemove(choice, "frontend");
    }
  }
  if (bd.checked == 1) {
    choice.push("backend");
  } else {
    if (choice.includes("backend")) {
      choice = arrayRemove(choice, "backend");
    }
  }
  if (ui.checked == 1) {
    choice.push("ui/ux");
  } else {
    if (choice.includes("ui/ux")) {
      choice = arrayRemove(choice, "ui/ux");
    }
  }
  if (ml.checked == 1) {
    choice.push("ml");
  } else {
    if (choice.includes("ml")) {
      choice = arrayRemove(choice, "ml");
    }
  }
  if (mg.checked == 1) {
    choice.push("management");
  } else {
    if (choice.includes("management")) {
      choice = arrayRemove(choice, "management");
    }
  }
  if (app.checked == 1) {
    choice.push("appdev");
  } else {
    if (choice.includes("appdev")) {
      choice = arrayRemove(choice, "appdev");
    }
  }
  if (cyber.checked == 1) {
    choice.push("cybersecurity");
  } else {
    if (choice.includes("cybersecurity")) {
      choice = arrayRemove(choice, "cybersecurity");
    }
  }
  if (block.checked == 1) {
    choice.push("blockchain");
  } else {
    if (choice.includes("blockchain")) {
      choice = arrayRemove(choice, "blockchain");
    }
  }
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      if (choice.length == 0) {
        swal("WARNING!!", "Please select at least one skill", {
          icon: "warning",
        });
      } else {
        axios
          .post(
            `${url}/DN_Team/addSkills/${random_id}`,
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
            talent = response.data;
            console.log(talent);
            swal(
              "SUCCESS!!",
              "The skills has been submitted successfully.",
              "success"
            );
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
          });
      }
    });
}
function deleteteam() {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      swal({
        title: "Are you sure ??",
        text: "You  will not be able to recover this team once deleted!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        axios
          .delete(`${url}/DN_Team/deleteTeam/${random_id}`, {
            headers: {
              Authorization: "Bearer " + auth,
            },
          })
          .then((response) => {
            res = response.data;

            swal("Deleted!", "Your team has been deleted.", "success");
            window.location.assign("./My_teams.html");
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
          });
        if (willDelete) {
          swal("Poof! Your team has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your team is safe!");
        }
      });
    });
}
let member_id;
let count = 0;
function removemem() {
  count += 1;
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      const members = document.querySelectorAll("#member");
      members.forEach((member) => member.addEventListener("click", look));
      function look() {
        member_id = this.querySelector("#member_id").textContent;
        count += 1;
      }
      if (count === 2) {
        swal({
          title: "Are you sure?",
          text: "Do you want to remove this member from your team?!",
          type: "warning",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            axios
              .patch(
                `${url}/DN_Team/removeMember/${random_id}/${member_id}`,
                {},
                {
                  headers: {
                    Authorization: "Bearer " + auth,
                  },
                }
              )
              .then((response) => {
                res = response.data;

                window.location.assign("./My_teams.html");
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
                else if (error.response.status == 404) {
                  swal("Warning!!", "Not found.", "warning");
                }
              });
            swal("Poof! The team member has been removed!", {
              icon: "success",
            });
          } else {
            swal("Your team is safe!!!");
          }
        });
      }
    });
}

function redirect() {
  window.location.assign("./AddParNew.html?" + random_id);
}
function addproject() {
  window.location.assign("./teamaddprojname.html?" + random_id);
}

function viewproject() {
  window.location.assign("./TeamAdd_Project.html?" + random_id);
}
