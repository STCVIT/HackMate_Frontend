$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});
var teams = {};
var page = 1;
var participant_id;
const loadingDiv = document.getElementById("loading");
function events(event) {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;

      page = event.target.innerHTML;

      window.location = "#start";
      axios(`${url}/DN_Team/myTeams?page=${page}`, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      })
        .then((response) => {
          teams = response.data;

          let body = document.querySelector(".cards");
          body.innerHTML = "";
          var yourHTML = "";
          for (var i = 0; i < teams.final.length; ) {
            yourHTML +=
              "<div class='row'><div class='col-lg-6 col-md-6 col-sm-12'style='padding-bottom:5% ;cursor : pointer' onclick='check()'><div class='card1' id='team'style='max-width: 497px; max-height: 371px;padding-bottom: 10%;'><div class='card-body'><h4 class='card-title'>" +
              teams["final"][i]["team"].name +
              "</h4>";
            if (teams["final"][i]["hackName"] == "") {
              yourHTML +=
                "<p><text style='display:none'>Hackathon:</text><hackathon id='hack_name' style='display:none'>" +
                teams["final"][i]["hackName"] +
                "</hackathon></p>";
            } else {
              yourHTML +=
                "<p><text>Hackathon:</text><hackathon id='hack_name'>" +
                teams["final"][i]["hackName"] +
                "</hackathon></p>";
            }
            yourHTML +=
              "<div class='card-details'><p><f>" +
              teams["final"][i]["team"].members.length +
              "</f><r> Team <br> Members</r></p><div class='vl'></div><ul class='team-members'>";
            for (var j = 0; j < teams["final"][i]["team"].members.length; j++) {
              yourHTML += "<li class='list-item'>";
              if (teams.final[i].pt_skill[j].participant.photo == "hey") {
                yourHTML +=
                  "<img id='pp' src='../Assets/Images/blank-profile.png'>";
              } else {
                yourHTML +=
                  "<img id='pp' src='" +
                  teams.final[i].pt_skill[j].participant.photo +
                  "'>";
              }
              yourHTML +=
                "<p>" +
                teams["final"][i]["pt_skill"][j]["participant"].name +
                "<br><t>" +
                teams["final"][i]["pt_skill"][j]["skills"][0]["skill"] +
                "</t></p></li>";
            }
            yourHTML +=
              "</ul></div><p id='admin_id'>" +
              teams["final"][i].team.admin_id +
              "</p><p id='team_id'>" +
              teams["final"][i]["team"]._id +
              "<p><p id='hack_id'>" +
              teams.final[i].team.hack_id +
              "</p></div></div></div>";

            i++;
            if (i < teams.final.length) {
              yourHTML +=
                "<div class='col-lg-6 col-md-6 col-sm-12'onclick='check()' style='cursor : pointer'><div class='card2' id='team' style='max-width: 497px; max-height: 371px; padding-bottom:20px;' ><div class='card-body'><h4 class='card-title'>" +
                teams["final"][i]["team"].name +
                "</h4>";
              if (teams["final"][i]["hackName"] == "") {
                yourHTML +=
                  "<p><text style='display:none'>Hackathon:</text><hackathon id='hack_name' style='display:none'>" +
                  teams["final"][i]["hackName"] +
                  "</hackathon></p>";
              } else {
                yourHTML +=
                  "<p><text>Hackathon:</text><hackathon id='hack_name'>" +
                  teams["final"][i]["hackName"] +
                  "</hackathon></p>";
              }
              yourHTML +=
                "<div class='card-details'><p><f>" +
                teams["final"][i]["team"].members.length +
                "</f><r> Team <br> Members</r></p><div class='vl'></div><ul class='team-members'>";
              for (
                var j = 0;
                j < teams["final"][i]["team"].members.length;
                j++
              ) {
                yourHTML += "<li class='list-item'>";
                if (teams.final[i].pt_skill[j].participant.photo == "hey") {
                  yourHTML +=
                    "<img id='pp' src='../Assets/Images/blank-profile.png'>";
                } else {
                  yourHTML +=
                    "<img id='pp' src='" +
                    teams.final[i].pt_skill[j].participant.photo +
                    "'>";
                }
                yourHTML +=
                  "<p>" +
                  teams["final"][i]["pt_skill"][j]["participant"].name +
                  "<br><t>" +
                  teams["final"][i]["pt_skill"][j]["skills"][0]["skill"] +
                  "</t></p></li>";
              }
              yourHTML +=
                "</ul></div><p id='admin_id'>" +
                teams["final"][i].team.admin_id +
                "</p><p id='team_id'>" +
                teams["final"][i]["team"]._id +
                "<p><p id='hack_id'>" +
                teams.final[i].team.hack_id +
                "</p></div></div></div>";
            }

            i++;

            body.innerHTML += yourHTML;
            yourHTML = "";
            document.getElementById("loading").style.visibility = "hidden";
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          if (error.response.status == 404) {
            document.querySelector(".wrapper").innerHTML =
              "<h1 style='margin-top: 82px;'>No Teams Found!</h1>";
          }
          if (error.response.status == 400) {
            swal(
              "Warning!!",
              "Some unknown error occured, please try again.",
              "warning"
            );
          }
        });
    });
}
var Pagination = {
  code: "",
  Extend: function (data) {
    Pagination.size = data.size;
    Pagination.page = data.page;
    Pagination.step = data.step;
  },
  Add: function (s, f) {
    for (var i = s; i < f; i++) {
      Pagination.code +=
        "<button class='pagenation' onclick='events(event)'>" + i + "</button>";
    }
  },
  Last: function () {
    Pagination.code +=
      "<i style='margin-left: 11px; color: #008249' >...</i><button class='pagenation' onclick='events(event)'>" +
      Pagination.size +
      "</button>";
  },
  First: function () {
    Pagination.code += "";
  },
  Click: function () {
    Pagination.page = +this.innerHTML;
    Pagination.Start();
  },
  Prev: function () {
    Pagination.page--;
    if (Pagination.page < 1) {
      Pagination.page = 1;
    }
    Pagination.Start();
  },
  Next: function () {
    Pagination.page++;
    if (Pagination.page > Pagination.size) {
      Pagination.page = Pagination.size;
    }
    Pagination.Start();
  },
  Bind: function () {
    var a = Pagination.e.querySelectorAll(".pagenation");
    for (var i = 0; i < a.length; i++) {
      if (+a[i].innerHTML === Pagination.page) a[i].className = "current";
      a[i].addEventListener("click", Pagination.Click, false);
    }
  },
  Finish: function () {
    Pagination.e.innerHTML = Pagination.code;
    Pagination.code = "";
    Pagination.Bind();
  },
  Start: function () {
    if (Pagination.size < Pagination.step * 2 + 4) {
      Pagination.Add(1, Pagination.size + 1);
    } else if (Pagination.page < Pagination.step * 2 + 1) {
      Pagination.Add(1, Pagination.step * 2 + 2);
      Pagination.Last();
    } else if (Pagination.page > Pagination.size - Pagination.step * 2 - 2) {
      Pagination.First();
      Pagination.Add(
        Pagination.size - Pagination.step * 2 - 1,
        Pagination.size + 1
      );
    } else {
      Pagination.First();
      Pagination.Add(
        Pagination.page - Pagination.step,
        Pagination.page + Pagination.step + 1
      );
      Pagination.Last();
    }
    Pagination.Finish();
  },
  Buttons: function (e) {
    var nav = e.getElementsByTagName("a");
    nav[0].addEventListener("click", Pagination.Prev, false);
    nav[1].addEventListener("click", Pagination.Next, false);
  },
  Create: function (e) {
    var html = [
      "<a href='#wrapper' onclick='prevPage()' style='color: #008249;text-decoration: none;'>&#9668;</a>", // previous button
      "<span></span>", // pagination container
      "<a href='#wrapper' onclick='nextPage()' style='margin-left: 11px; color: #008249;text-decoration: none;'>&#9658;</a>", // next button
    ];
    e.innerHTML = html.join("");
    Pagination.e = e.getElementsByTagName("span")[0];
    Pagination.Buttons(e);
  },
  Init: function (e, data) {
    Pagination.Extend(data);
    Pagination.Create(e);
    Pagination.Start();
  },
};

function displayTeams() {
  var init = function () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then(async function (idToken) {
          sessionStorage.setItem("auth", idToken);
          auth = idToken;
          try {
            var res = await axios(`${url}/DN_Team/myTeams?page=1`, {
              headers: {
                Authorization: "Bearer " + auth,
              },
            });
            teams = await res.data;
            var length = 0;
            length = await res.data.length;

            let body = document.querySelector(".cards");
            var yourHTML = "";
            for (var i = 0; i < teams.final.length; ) {
              yourHTML +=
                "<div class='row'><div class='col-lg-6 col-md-6 col-sm-12'style='padding-bottom:5% ;cursor : pointer' onclick='check()'><div class='card1' id='team'style='max-width: 497px; max-height: 371px;padding-bottom: 10%;'><div class='card-body'><h4 class='card-title'>" +
                teams["final"][i]["team"].name +
                "</h4>";
              if (teams["final"][i]["hackName"] == "") {
                yourHTML +=
                  "<p><text style='display:none'>Hackathon:</text><hackathon id='hack_name' style='display:none'>" +
                  teams["final"][i]["hackName"] +
                  "</hackathon></p>";
              } else {
                yourHTML +=
                  "<p><text>Hackathon:</text><hackathon id='hack_name'>" +
                  teams["final"][i]["hackName"] +
                  "</hackathon></p>";
              }
              yourHTML +=
                "<div class='card-details'><p><f>" +
                teams["final"][i]["team"].members.length +
                "</f><r> Team <br> Members</r></p><div class='vl'></div><ul class='team-members'>";
              for (
                var j = 0;
                j < teams["final"][i]["team"].members.length;
                j++
              ) {
                yourHTML += "<li class='list-item'>";
                if (teams.final[i].pt_skill[j].participant.photo == "hey") {
                  yourHTML +=
                    "<img id='pp' src='../Assets/Images/blank-profile.png'>";
                } else {
                  yourHTML +=
                    "<img id='pp' src='" +
                    teams.final[i].pt_skill[j].participant.photo +
                    "'>";
                }
                yourHTML +=
                  "<p>" +
                  teams["final"][i]["pt_skill"][j]["participant"].name +
                  "<br><t>" +
                  teams["final"][i]["pt_skill"][j]["skills"][0]["skill"] +
                  "</t></p></li>";
              }
              yourHTML +=
                "</ul></div><p id='admin_id'>" +
                teams["final"][i].team.admin_id +
                "</p><p id='team_id'>" +
                teams["final"][i]["team"]._id +
                "<p><p id='hack_id'>" +
                teams.final[i].team.hack_id +
                "</p></div></div></div>";

              i++;
              if (i < teams.final.length) {
                yourHTML +=
                  "<div class='col-lg-6 col-md-6 col-sm-12'onclick='check()' style='cursor : pointer'><div class='card2' id='team' style='max-width: 497px; max-height: 371px; padding-bottom:20px;' ><div class='card-body'><h4 class='card-title'>" +
                  teams["final"][i]["team"].name +
                  "</h4>";
                if (teams["final"][i]["hackName"] == "") {
                  yourHTML +=
                    "<p><text style='display:none'>Hackathon:</text><hackathon id='hack_name' style='display:none'>" +
                    teams["final"][i]["hackName"] +
                    "</hackathon></p>";
                } else {
                  yourHTML +=
                    "<p><text>Hackathon:</text><hackathon id='hack_name'>" +
                    teams["final"][i]["hackName"] +
                    "</hackathon></p>";
                }
                yourHTML +=
                  "<div class='card-details'><p><f>" +
                  teams["final"][i]["team"].members.length +
                  "</f><r> Team <br> Members</r></p><div class='vl'></div><ul class='team-members'>";
                for (
                  var j = 0;
                  j < teams["final"][i]["team"].members.length;
                  j++
                ) {
                  yourHTML += "<li class='list-item'>";
                  if (teams.final[i].pt_skill[j].participant.photo == "hey") {
                    yourHTML +=
                      "<img id='pp' src='../Assets/Images/blank-profile.png'>";
                  } else {
                    yourHTML +=
                      "<img id='pp' src='" +
                      teams.final[i].pt_skill[j].participant.photo +
                      "'>";
                  }
                  yourHTML +=
                    "<p>" +
                    teams["final"][i]["pt_skill"][j]["participant"].name +
                    "<br><t>" +
                    teams["final"][i]["pt_skill"][j]["skills"][0]["skill"] +
                    "</t></p></li>";
                }
                yourHTML +=
                  "</ul></div><p id='admin_id'>" +
                  teams["final"][i].team.admin_id +
                  "</p><p id='team_id'>" +
                  teams["final"][i]["team"]._id +
                  "<p><p id='hack_id'>" +
                  teams.final[i].team.hack_id +
                  "</p></div></div></div>";
              }

              i++;
              body.innerHTML += yourHTML;
              yourHTML = "";
              document.getElementById("loading").style.visibility = "hidden";
            }
            total_teams = Math.ceil(length / 8);
            Pagination.Init(document.getElementById("pagination"), {
              size: total_teams,
              page: 1,
              step: 1,
            });
          } catch (error) {
            console.log(error)
            if (error.response.status == 404) {
              document.querySelector(".wrapper").innerHTML =
                "<h1 style='margin-top: 82px;'>No Teams Found!</h1>";
            }
            if (error.response.status == 400) {
              swal(
                "Warning!!",
                "Some unknown error occured, please try again.",
                "warning"
              );
            }
          }
          document.getElementById("loading").style.visibility = "hidden";
        });
      } else {
        // User is signed out
      }
    });
  };
  init();
}
displayTeams();

function nextPage() {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      if (page < total_teams) {
        page = Pagination.page + 1;
      }
      axios(`${url}/DN_Team/myTeams?page=${page}`, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      })
        .then((response) => {
          window.location = "#start";
          teams = response.data;

          let body = document.querySelector(".cards");
          body.innerHTML = "";
          var yourHTML = "";
          for (var i = 0; i < teams.final.length; ) {
            yourHTML +=
              "<div class='row'><div class='col-lg-6 col-md-6 col-sm-12'style='padding-bottom:5% ;cursor : pointer' onclick='check()'><div class='card1' id='team'style='max-width: 497px; max-height: 371px;padding-bottom: 10%;'><div class='card-body'><h4 class='card-title'>" +
              teams["final"][i]["team"].name +
              "</h4>";
            if (teams["final"][i]["hackName"] == "") {
              yourHTML +=
                "<p><text style='display:none'>Hackathon:</text><hackathon id='hack_name' style='display:none'>" +
                teams["final"][i]["hackName"] +
                "</hackathon></p>";
            } else {
              yourHTML +=
                "<p><text>Hackathon:</text><hackathon id='hack_name'>" +
                teams["final"][i]["hackName"] +
                "</hackathon></p>";
            }
            yourHTML +=
              "<div class='card-details'><p><f>" +
              teams["final"][i]["team"].members.length +
              "</f><r> Team <br> Members</r></p><div class='vl'></div><ul class='team-members'>";
            for (var j = 0; j < teams["final"][i]["team"].members.length; j++) {
              yourHTML += "<li class='list-item'>";
              if (teams.final[i].pt_skill[j].participant.photo == "hey") {
                yourHTML +=
                  "<img id='pp' src='../Assets/Images/blank-profile.png'>";
              } else {
                yourHTML +=
                  "<img id='pp' src='" +
                  teams.final[i].pt_skill[j].participant.photo +
                  "'>";
              }
              yourHTML +=
                "<p>" +
                teams["final"][i]["pt_skill"][j]["participant"].name +
                "<br><t>" +
                teams["final"][i]["pt_skill"][j]["skills"][0]["skill"] +
                "</t></p></li>";
            }
            yourHTML +=
              "</ul></div><p id='admin_id'>" +
              teams["final"][i].team.admin_id +
              "</p><p id='team_id'>" +
              teams["final"][i]["team"]._id +
              "<p><p id='hack_id'>" +
              teams.final[i].team.hack_id +
              "</p></div></div></div>";

            i++;
            if (i < teams.final.length) {
              yourHTML +=
                "<div class='col-lg-6 col-md-6 col-sm-12'onclick='check()' style='cursor : pointer'><div class='card2' id='team' style='max-width: 497px; max-height: 371px; padding-bottom:20px;' ><div class='card-body'><h4 class='card-title'>" +
                teams["final"][i]["team"].name +
                "</h4>";
              if (teams["final"][i]["hackName"] == "") {
                yourHTML +=
                  "<p><text style='display:none'>Hackathon:</text><hackathon id='hack_name' style='display:none'>" +
                  teams["final"][i]["hackName"] +
                  "</hackathon></p>";
              } else {
                yourHTML +=
                  "<p><text>Hackathon:</text><hackathon id='hack_name'>" +
                  teams["final"][i]["hackName"] +
                  "</hackathon></p>";
              }
              yourHTML +=
                "<div class='card-details'><p><f>" +
                teams["final"][i]["team"].members.length +
                "</f><r> Team <br> Members</r></p><div class='vl'></div><ul class='team-members'>";
              for (
                var j = 0;
                j < teams["final"][i]["team"].members.length;
                j++
              ) {
                yourHTML += "<li class='list-item'>";
                if (teams.final[i].pt_skill[j].participant.photo == "hey") {
                  yourHTML +=
                    "<img id='pp' src='../Assets/Images/blank-profile.png'>";
                } else {
                  yourHTML +=
                    "<img id='pp' src='" +
                    teams.final[i].pt_skill[j].participant.photo +
                    "'>";
                }
                yourHTML +=
                  "<p>" +
                  teams["final"][i]["pt_skill"][j]["participant"].name +
                  "<br><t>" +
                  teams["final"][i]["pt_skill"][j]["skills"][0]["skill"] +
                  "</t></p></li>";
              }
              yourHTML +=
                "</ul></div><p id='admin_id'>" +
                teams["final"][i].team.admin_id +
                "</p><p id='team_id'>" +
                teams["final"][i]["team"]._id +
                "<p><p id='hack_id'>" +
                teams.final[i].team.hack_id +
                "</p></div></div></div>";
            }

            i++;

            body.innerHTML += yourHTML;
            yourHTML = "";
            document.getElementById("loading").style.visibility = "hidden";
          }
          i++;

          body.innerHTML += yourHTML;
          yourHTML = "";
        })
        .catch((error) => {
          console.error("Error:", error);
          if (error.response.status == 404) {
            document.querySelector(".wrapper").innerHTML =
              "<h1 style='margin-top: 82px;'>No Teams Found!</h1>";
          }
          if (error.response.status == 400) {
            swal(
              "Warning!!",
              "Some unknown error occured, please try again.",
              "warning"
            );
          }
        });
    });
}

function prevPage() {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      if (page > 1) {
        page = Pagination.page - 1;
      }

      axios(`${url}/DN_Team/myTeams?page=${page}`, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      })
        .then((response) => {
          window.location = "#start";
          teams = response.data;

          let body = document.querySelector(".cards");
          body.innerHTML = "";
          var yourHTML = "";
          for (var i = 0; i < teams.final.length; ) {
            yourHTML +=
              "<div class='row'><div class='col-lg-6 col-md-6 col-sm-12'style='padding-bottom:5% ;cursor : pointer' onclick='check()'><div class='card1' id='team'style='max-width: 497px; max-height: 371px;padding-bottom: 10%;'><div class='card-body'><h4 class='card-title'>" +
              teams["final"][i]["team"].name +
              "</h4>";
            if (teams["final"][i]["hackName"] == "") {
              yourHTML +=
                "<p><text style='display:none'>Hackathon:</text><hackathon id='hack_name' style='display:none'>" +
                teams["final"][i]["hackName"] +
                "</hackathon></p>";
            } else {
              yourHTML +=
                "<p><text>Hackathon:</text><hackathon id='hack_name'>" +
                teams["final"][i]["hackName"] +
                "</hackathon></p>";
            }
            yourHTML +=
              "<div class='card-details'><p><f>" +
              teams["final"][i]["team"].members.length +
              "</f><r> Team <br> Members</r></p><div class='vl'></div><ul class='team-members'>";
            for (var j = 0; j < teams["final"][i]["team"].members.length; j++) {
              yourHTML += "<li class='list-item'>";
              if (teams.final[i].pt_skill[j].participant.photo == "hey") {
                yourHTML +=
                  "<img id='pp' src='../Assets/Images/blank-profile.png'>";
              } else {
                yourHTML +=
                  "<img id='pp' src='" +
                  teams.final[i].pt_skill[j].participant.photo +
                  "'>";
              }
              yourHTML +=
                "<p>" +
                teams["final"][i]["pt_skill"][j]["participant"].name +
                "<br><t>" +
                teams["final"][i]["pt_skill"][j]["skills"][0]["skill"] +
                "</t></p></li>";
            }
            yourHTML +=
              "</ul></div><p id='admin_id'>" +
              teams["final"][i].team.admin_id +
              "</p><p id='team_id'>" +
              teams["final"][i]["team"]._id +
              "<p><p id='hack_id'>" +
              teams.final[i].team.hack_id +
              "</p></div></div></div>";

            i++;
            if (i < teams.final.length) {
              yourHTML +=
                "<div class='col-lg-6 col-md-6 col-sm-12'onclick='check()' style='cursor : pointer'><div class='card2' id='team' style='max-width: 497px; max-height: 371px; padding-bottom:20px;' ><div class='card-body'><h4 class='card-title'>" +
                teams["final"][i]["team"].name +
                "</h4>";
              if (teams["final"][i]["hackName"] == "") {
                yourHTML +=
                  "<p><text style='display:none'>Hackathon:</text><hackathon id='hack_name' style='display:none'>" +
                  teams["final"][i]["hackName"] +
                  "</hackathon></p>";
              } else {
                yourHTML +=
                  "<p><text>Hackathon:</text><hackathon id='hack_name'>" +
                  teams["final"][i]["hackName"] +
                  "</hackathon></p>";
              }
              yourHTML +=
                "<div class='card-details'><p><f>" +
                teams["final"][i]["team"].members.length +
                "</f><r> Team <br> Members</r></p><div class='vl'></div><ul class='team-members'>";
              for (
                var j = 0;
                j < teams["final"][i]["team"].members.length;
                j++
              ) {
                yourHTML += "<li class='list-item'>";
                if (teams.final[i].pt_skill[j].participant.photo == "hey") {
                  yourHTML +=
                    "<img id='pp' src='../Assets/Images/blank-profile.png'>";
                } else {
                  yourHTML +=
                    "<img id='pp' src='" +
                    teams.final[i].pt_skill[j].participant.photo +
                    "'>";
                }
                yourHTML +=
                  "<p>" +
                  teams["final"][i]["pt_skill"][j]["participant"].name +
                  "<br><t>" +
                  teams["final"][i]["pt_skill"][j]["skills"][0]["skill"] +
                  "</t></p></li>";
              }
              yourHTML +=
                "</ul></div><p id='admin_id'>" +
                teams["final"][i].team.admin_id +
                "</p><p id='team_id'>" +
                teams["final"][i]["team"]._id +
                "<p><p id='hack_id'>" +
                teams.final[i].team.hack_id +
                "</p></div></div></div>";
            }

            i++;

            body.innerHTML += yourHTML;
            yourHTML = "";
            document.getElementById("loading").style.visibility = "hidden";
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          if (error.response.status == 404) {
            document.querySelector(".wrapper").innerHTML =
              "<h1 style='margin-top: 82px;'>No Teams Found!</h1>";
          }
          if (error.response.status == 400) {
            swal(
              "Warning!!",
              "Some unknown error occured, please try again.",
              "warning"
            );
          }
        });
    });
}

var user;
var auth = sessionStorage.getItem("auth");
axios(`${url}/participant/login`, {
  headers: {
    Authorization: "Bearer " + auth,
  },
})
  .then((response) => {
    user = response.data;
    participant_id = user._id;
    localStorage.setItem("participant_id", participant_id);
  })
  .catch((error) => console.error("Error: " + error));

function check() {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      const cards = document.querySelectorAll("#team");
      cards.forEach((card) => card.addEventListener("click", look));
      function look() {
        console.log(this)
        var team_id = this.querySelector("#team_id").textContent;
        var admin_id = this.querySelector("#admin_id").textContent;
        var hack_id = this.querySelector("#hack_id").textContent;
        var hack_name = this.querySelector("#hack_name").textContent;
        localStorage.setItem("team_id", team_id);
        localStorage.setItem("hack_id", hack_id);
        localStorage.setItem("hackName", hack_name);
        if (admin_id == participant_id) {
          window.location.assign("./teamProfLeaderView.html");
        } else {
          window.location.assign("./teamprofile.html");
        }
      }
    });
}
