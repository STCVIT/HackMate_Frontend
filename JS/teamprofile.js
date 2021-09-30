$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});
const loadingDiv = document.getElementById("loading");
loadingDiv.style.visibility = "visible";
let team_name = document.getElementById("team_name");
let team_code = document.getElementById("team_code");
let hack_id = localStorage.getItem("hack_id");
let hack_name = localStorage.getItem("hackName");
let participant_id = localStorage.getItem("participant_id");
let random_id = localStorage.getItem("team_id");
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
            if (team.pt_skills[i].participant._id == participant_id) {
              yourHTML +=
                "<div class='card-row'><div class='d-flex justify-content-start'><div class='component'>";
              yourHTML +=
                "<img id='dp' src='" +
                team.pt_skills[i].participant.photo +
                "'>";
              yourHTML +=
                "<p>" +
                team.pt_skills[i].participant.name +
                "<m>(You)</m><br><t>" +
                team.pt_skills[i].skills[0].skill +
                "</t></p></div></div><l id='leave' class='leaves' onclick='leave()'>LEAVE</l></div>";
            } else if (
              team.pt_skills[i].participant._id === team.team.admin_id
            ) {
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
                "</t></p></div><l></l></div></div>";
            } else {
              yourHTML +=
                "<div class='card-row'><div class='d-flex justify-content-start'><div class='component'>";
              if (team.pt_skills[i].participant.photo == "hey") {
                yourHTML +=
                  "<img id='dp' src='../Assets/Images/blank-profile.png'>";
              } else {
                yourHTML +=
                  "<img id='dp' src='" +
                  team.pt_skills[i].participant.photo +
                  "'>";
              }
              yourHTML +=
                "<p>" +
                team.pt_skills[i].participant.name +
                "<m>(Member)</m><br><t>" +
                team.pt_skills[i].skills[0].skill +
                "</t></p></div><l></l></div></div>";
            }
            body.innerHTML = yourHTML;
          }
          document.getElementById("loading").style.visibility = "hidden";
        })
        .catch((error) => {
          if (error.response.status == 400) {
            swal(
              "Warning!!",
              "Some unknown error occured, please try again.",
              "warning"
            );
          }
          if (error.response.status == 404) {
            swal("Warning!!", "Team not found.", "warning");
          }
          console.error("Error: " + error);
        });
      function hackinfo() {
        if (hack_name == "") {
          document.getElementById("hackathon").style.visibility = "hidden";
          document.getElementById("hackdetails").style.visibility = "hidden";
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
              yourhtml =
                "<div class='box3'><img src='../Assets/Images/Name Banner.png' class='namebanner' alt=''><div class='innertxt'><nb1>" +
                hack.name +
                "<img src='../Assets/Images/Know More.png' alt=''></nb1><div class='dates'><div class='box4 start'><div class='nbg'><nbg>Begins:</nbg><div class='nbw'><nbw>" +
                hack_start +
                "</nbw></div></div></div><div class='box5 end'><div class='nbg'><nbg>Ends:</nbg><div class='nbw'><nbw>" +
                hack_end +
                "</nbw></div></div></div></div><div class='nbg'><nbg>Venue: </nbg><nbw>" +
                hack.venue +
                "</nbw></div><div class='nbg'><nbg>Team Size: </nbg><nbw>1-" +
                hack.max_team_size +
                "Participants</nbw></div><div class='nbg'><nbg>Prize Pool: </nbg<nbw></nbw>" +
                hack.prize_pool +
                "</div><div class='status'><img src='../Assets/Images/Online.png' alt=''></div><a class='btnkm btn btn-primary' href='./hackdetails.html?" +
                hack_id +
                "' role='button'>Know More</a></div></div>";
              body.innerHTML = yourhtml;
              document.getElementById("loading").style.visibility = "hidden";
            })
            .catch((error) => {
              if (error.response.status == 400) {
                swal(
                  "Warning!!",
                  "Some unknown error occured, please try again.",
                  "warning"
                );
              } 
              if (error.response.status == 404) {
                swal("Not Found!", "Hack doesn't exist", "warning").then(() => {
                  window.location.href = "./viewhackathon.html";
                });
              }
              console.error("Error: " + error);
            });
        }
      }
      hackinfo();
    });
  } else {
    // User is signed out
  }
});
// {{url}}/DN_Team/60f269d086cadf64148a5d4f
function leave() {
  swal({
    title: "Are you sure ??",
    text: "Do you really wanna leave this team?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((id) => {
        auth = id;
        if (willDelete) {
          swal("Poof! You left the team successfully!", {
            icon: "success",
          });
          axios
            .patch(
              `${url}/DN_Team/${random_id}`,
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
              if (error.response.status == 400) {
                swal(
                  "Warning!!",
                  "Some unknown error occured, please try again.",
                  "warning"
                );
              } 
              console.error("Error:", error);
            });
        } else {
          swal("Your team is safe!");
        }
      });
  });
}
