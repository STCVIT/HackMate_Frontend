$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});
const loadingDiv = document.getElementById("loading");
loadingDiv.style.visibility = "visible"
var teams = {};
var page = 1;
var participant_id;

function displayTeams() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      user.getIdToken().then(function (idToken) {
        auth = idToken;
        var init = async function () {
          try {
            var res = await axios(
              `${url}/DN_Team/admin/${window.location.search.split("?")[1]}`,
              {
                headers: {
                  Authorization: "Bearer " + auth,
                },
              }
            );
            teams = await res.data;
            let body = document.querySelector(".cards");
            var yourHTML = "";
            var t = 0;
            for (var i = 0; i < teams.length; i++) {
              if (t == 0) {
                yourHTML +=
                  "<div class='row'><div class='col-lg-6 col-md-6 col-sm-12'style='padding-bottom:5%'><div class='card1' id='team'style='max-width: 497px; max-height: 371px;padding-bottom: 10%;'><div class='card-body'><h4 class='card-title'>" +
                  teams[i]["team"].name +
                  "</h4><img id='add' class='" +
                  teams[i]["team"]._id +
                  "' src='../Assets/Images/addbutton.svg'onclick='add(event)'><p><text></text></p><div class='card-details'><p><f>" +
                  teams[i]["team"].members.length +
                  "</f><r> Team <br> Members</r></p><div class='vl'></div><ul class='team-members'>";
                for (var j = 0; j < teams[i]["team"].members.length; j++) {
                  yourHTML += "<li class='list-item'>";
                  if (teams[i].pt_skill[j].participant.photo == "hey") {
                    yourHTML +=
                      "<img id='pp' src='../Assets/Images/blank-profile.png'>";
                  } else {
                    yourHTML +=
                      "<img id='pp' src='" +
                      teams[i].pt_skill[j].participant.photo +
                      "'>";
                  }
                  yourHTML +=
                    "<p>" +
                    teams[i]["pt_skill"][j]["participant"].name +
                    "<br><t>" +
                    teams[i]["pt_skill"][j]["skills"][0]["skill"] +
                    "</t></p></li>";
                }
                yourHTML +=
                  "</ul></div><p id='admin_id'>" +
                  teams[i].team.admin_id +
                  "</p><p id='team_id'>" +
                  teams[i]["team"]._id +
                  "<p><p id='hack_id'>" +
                  teams[i].team.hack_id +
                  "</p></div></div></div>";

                  t = 1;
              } else if (t == 1) {
                yourHTML +=
                  "<div class='col-lg-6 col-md-6 col-sm-12'style='padding-bottom:5%'><div class='card1' id='team'style='max-width: 497px; max-height: 371px;padding-bottom: 10%;'><div class='card-body'><h4 class='card-title'>" +
                  teams[i]["team"].name +
                  "</h4><img id='add' class='" +
                  teams[i]["team"]._id +
                  "' src='../Assets/Images/addbutton.svg'onclick='add(event)'><p><text></text></p><div class='card-details'><p><f>" +
                  teams[i]["team"].members.length +
                  "</f><r> Team <br> Members</r></p><div class='vl'></div><ul class='team-members'>";
                for (var j = 0; j < teams[i]["team"].members.length; j++) {
                  yourHTML += "<li class='list-item'>";
                  if (teams[i].pt_skill[j].participant.photo == "hey") {
                    yourHTML +=
                      "<img id='pp' src='../Assets/Images/blank-profile.png'>";
                  } else {
                    yourHTML +=
                      "<img id='pp' src='" +
                      teams[i].pt_skill[j].participant.photo +
                      "'>";
                  }
                  yourHTML +=
                    "<p>" +
                    teams[i]["pt_skill"][j]["participant"].name +
                    "<br><t>" +
                    teams[i]["pt_skill"][j]["skills"][0]["skill"] +
                    "</t></p></li>";
                }
                yourHTML +=
                  "</ul></div><p id='admin_id'>" +
                  teams[i].team.admin_id +
                  "</p><p id='team_id'>" +
                  teams[i]["team"]._id +
                  "<p><p id='hack_id'>" +
                  teams[i].team.hack_id +
                  "</p></div></div></div></div>";

                  t = 0
              }
            }

            body.innerHTML += yourHTML;
            yourHTML = "";
            loadingDiv.style.visibility = "hidden";
          } catch (error) {
            console.error(error);
            if (error.response.status == 400) {
              swal(
                "Warning!!",
                "Some unknown error occured, please try again.",
                "warning"
              );
            }
            if(error.response.status == 403)
            {
              swal("Warning!", "You are already going to this hack!", "warning").then(() => {
                window.location.href = "./hackdetails.html?" + window.location.search.split("?")[1]
              });
            }
            if(error.response.status == 404)
            {
              swal("Warning!", "You have no eligible teams to add to this hack!", "warning").then(() => {
                window.location.href = "./hackdetails.html?" + window.location.search.split("?")[1]
              });
            }
            if (error.response.status == 417) {
              swal(
                "Warning!!",
                "Please enter all the required fields.",
                "warning"
              );
            }
          }
        };
        init();
      });
    } else {
      // User is signed out
    }
  });
}
displayTeams();

var user;

function add(event) {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      var nk = 0;
      const cards = document.querySelectorAll("#team");
      cards.forEach((card) => card.addEventListener("click", look));
      function look() {
        nk += 1;
        if (nk == 1) {
          // var team_name = this.querySelector(".card-title").textContent;
          axios
            .patch(
              `${url}/Dn_Team/update/${event.target.classList[0]}`,
              {
                hack_id: window.location.search.split("?")[1],
              },
              {
                headers: {
                  Authorization: "Bearer " + auth,
                },
              }
            )
            .then((response) => {
              hack = response.data;
              localStorage.setItem("hack_id", response.data.hack_id);
              localStorage.setItem("team_id", response.data._id);
              localStorage.setItem("hackName", "Name exists");
              swal(
                "SUCCESS!!",
                "Your team has been successfully added in the Hack!!",
                "success"
              ).then(() => {
                window.location.href = "./teamProfLeaderView.html";
              });
            })
            .catch((error) => {
              if (error.response.status == 403) {
                swal(
                  "WARNING!!",
                  "You are already a part of this hack.",
                  "warning"
                );
              }
              if (error.response.status == 418) {
                swal(
                  "WARNING!!",
                  "A Team of the same name is already going to this hack. Please consider creating a new team with a new name, before adding yourself to this hack.",
                  "warning"
                );
              }
            });
        }
      }
    });
}
