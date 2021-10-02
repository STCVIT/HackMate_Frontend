const app = document.querySelector(".text3");
const fweb = document.querySelector(".text6");
const bweb = document.querySelector(".text7");
const ml = document.querySelector(".text8");
const mgmt = document.querySelector(".text10");
const design = document.querySelector(".text9");
const block = document.querySelector(".text11");
const cyber = document.querySelector(".text12");
const all = document.querySelector(".text5");
const loadingDiv = document.getElementById("loading");
loadingDiv.style.visibility = "visible";

function displayTeams() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      user.getIdToken().then(function (idToken) {
        auth = idToken;
        var hack_id = window.location.search.split("?")[1];
        var page = 1;
        displayTeams();
        var init = async function () {
          try {
            var res = await axios(
              `${url}/participant/get/all/${hack_id}?page=1`,
              {
                headers: {
                  Authorization: "Bearer " + auth,
                },
              }
            );
            hack = await res.data;
            if (hack.length >= 13 && hack.length <= 24) {
              page = page + 1;
              displayTeams();
            } else if (hack.length >= 25 && hack.length <= 36) {
              page = page + 1;

              displayTeams();
              page = page + 1;
            } else if (hack.length >= 37 && hack.length <= 48) {
              page = page + 1;

              displayTeams();
              page = page + 1;

              displayTeams();
              page = page + 1;
            } else if (hack.length >= 49 && hack.length <= 60) {
              page = page + 1;

              displayTeams();
              page = page + 1;

              displayTeams();
              page = page + 1;
              displayTeams();
              page = page + 1;
            }
          } catch (err) {
            console.log(err);
          }
        };
        init();
        var height = document.body.clientHeight;
        if (height == document.body.clientHeight) {
          window.addEventListener("scroll", someFunction);
          function someFunction() {
            if (window.scrollY + window.innerHeight >= 1153) {
              // displayTeams();
              window.removeEventListener("scroll", someFunction);
            }
          }
        }

        document.querySelector(".persons").innerHTML = "";

        function displayTeams() {
          var init = async function () {
            try {
              var res = await axios(
                `${url}/participant/get/all/${hack_id}?page=${page}`,
                {
                  headers: {
                    Authorization: "Bearer " + auth,
                  },
                }
              );
              hacks = await res.data;
              loadingDiv.style.visibility = "hidden";

              for (let i = 0; i < hacks.final.length; i++) {
                if (hacks.final[i].skills.length == 1) {
                  document.querySelector(".persons").innerHTML +=
                    "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                    hacks.final[i].pt.photo +
                    "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7 abc'><h4 class='text13'><a onclick='check()'>" +
                    hacks.final[i].pt.name +
                    "</a></h4><h5 class='text14'>" +
                    hacks.final[i].skills[0].skill +
                    "</h5></div><div class='col-lg-3 col-md-3 col-1'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                    hacks.final[i].pt._id +
                    "</p></div></div>";
                }
                if (hacks.final[i].skills.length == 2) {
                  document.querySelector(".persons").innerHTML +=
                    "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                    hacks.final[i].pt.photo +
                    "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7 abc'><h4 class='text13'><a onclick='check()'>" +
                    hacks.final[i].pt.name +
                    "</a></h4><h5 class='text14'>" +
                    hacks.final[i].skills[0].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[1].skill +
                    "</h5></div><div class='col-lg-3 col-md-3 col-1'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                    hacks.final[i].pt._id +
                    "</p></div></div>";
                }
                if (hacks.final[i].skills.length == 3) {
                  document.querySelector(".persons").innerHTML +=
                    "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                    hacks.final[i].pt.photo +
                    "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7 abc'><h4 class='text13'><a onclick='check()'>" +
                    hacks.final[i].pt.name +
                    "</a></h4><h5 class='text14'>" +
                    hacks.final[i].skills[0].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[1].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[2].skill +
                    "</h5></div><div class='col-lg-3 col-md-3 col-1'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                    hacks.final[i].pt._id +
                    "</p></div></div>";
                }
                if (hacks.final[i].skills.length == 4) {
                  document.querySelector(".persons").innerHTML +=
                    "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                    hacks.final[i].pt.photo +
                    "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7 abc'><h4 class='text13'><a onclick='check()'>" +
                    hacks.final[i].pt.name +
                    "</a></h4><h5 class='text14'>" +
                    hacks.final[i].skills[0].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[1].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[2].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[3].skill +
                    "</h5></div><div class='col-lg-3 col-md-3 col-1'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                    hacks.final[i].pt._id +
                    "</p></div></div>";
                }
                if (hacks.final[i].skills.length == 5) {
                  document.querySelector(".persons").innerHTML +=
                    "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                    hacks.final[i].pt.photo +
                    "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7 abc'><h4 class='text13'><a onclick='check()'>" +
                    hacks.final[i].pt.name +
                    "</a></h4><h5 class='text14'>" +
                    hacks.final[i].skills[0].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[1].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[2].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[3].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[4].skill +
                    "</h5></div><div class='col-lg-3 col-md-3 col-1'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                    hacks.final[i].pt._id +
                    "</p></div></div>";
                }
                if (hacks.final[i].skills.length == 6) {
                  document.querySelector(".persons").innerHTML +=
                    "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                    hacks.final[i].pt.photo +
                    "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7 abc'><h4 class='text13'><a onclick='check()'>" +
                    hacks.final[i].pt.name +
                    "</a></h4><h5 class='text14'>" +
                    hacks.final[i].skills[0].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[1].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[2].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[3].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[4].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[5].skill +
                    "</h5></div><div class='col-lg-3 col-md-3 col-1'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                    hacks.final[i].pt._id +
                    "</p></div></div>";
                }
                if (hacks.final[i].skills.length == 7) {
                  document.querySelector(".persons").innerHTML +=
                    "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                    hacks.final[i].pt.photo +
                    "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7 abc'><h4 class='text13'><a onclick='check()'>" +
                    hacks.final[i].pt.name +
                    "</a></h4><h5 class='text14'>" +
                    hacks.final[i].skills[0].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[1].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[2].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[3].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[4].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[5].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[6].skill +
                    "</h5></div><div class='col-lg-3 col-md-3 col-1'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                    hacks.final[i].pt._id +
                    "</p></div></div>";
                }
                if (hacks.final[i].skills.length == 8) {
                  document.querySelector(".persons").innerHTML +=
                    "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                    hacks.final[i].pt.photo +
                    "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7 abc'><h4 class='text13'><a onclick='check()'>" +
                    hacks.final[i].pt.name +
                    "</a></h4><h5 class='text14'>" +
                    hacks.final[i].skills[0].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[1].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[2].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[3].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[4].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[5].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[6].skill +
                    "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                    hacks.final[i].skills[7].skill +
                    "</h5></div><div class='col-lg-3 col-md-3 col-1'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                    hacks.final[i].pt._id +
                    "</p></div></div>";
                }
              }
            } catch (err) {
              if(err.response.status == 400){
                swal("WARNING!!", "Some unknown error occured! Please try again.", "warning");
              }
              if (err.response.status == 404) {
                swal("WARNING!!", "You can't search this participant.", "warning");
                loadingDiv.style.visibility = "hidden";
              }
            }
          };
          init();
        }
      });
    } else {
    }
  });
}

displayTeams();

var n = 0;
app.addEventListener("click", function () {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      document.getElementById("active1").className = "button2";
      document.getElementById("inactive1").className = "button3";
      document.getElementById("inactive2").className = "button2";
      document.getElementById("inactive3").className = "button2";
      document.getElementById("inactive4").className = "button2";
      document.getElementById("inactive5").className = "button2";
      document.getElementById("inactive6").className = "button2";
      document.getElementById("inactive7").className = "button2";
      document.getElementById("inactive8").className = "button2";
      n = n + 1;
      loadingDiv.style.visibility = "visible";
      var occurence = "appdev";
      var hack_id = window.location.search.split("?")[1];
      var page = 1;
      displayTeams();

      document.querySelector(".persons").innerHTML = "";

      function displayTeams() {
        var init = async function () {
          try {
            var res = await axios(
              `${url}/participant/get/skill/${hack_id}?page=${page}&skill=${occurence}`,
              {
                headers: {
                  Authorization: "Bearer " + auth,
                },
              }
            );
            hacks = await res.data;
            loadingDiv.style.visibility = "hidden";

            // var part123 = hacks.final[0].pt._id;
            // localStorage.setItem("participant", part123);
            for (let i = 0; i < hacks.final.length; i++) {
              document.querySelector(".persons").innerHTML +=
                "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                hacks.final[i].pt.photo +
                "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='check()'>" +
                hacks.final[i].pt.name +
                "</a></h4><h5 class='text14'>App Dev</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                hacks.final[i].pt._id +
                "</p></div></div>";
            }
          } catch (err) {
            if (err.response.status == 400) {
              swal("WARNING!!", "Some unknown error occured! Please try again.", "warning");
            }
            if (err.response.status == 404) {
              swal("WARNING!!", "You can't search this participant.", "warning");
              loadingDiv.style.visibility = "hidden";
            }
          }
        };
        init();
      }
    });
});
fweb.addEventListener("click", function () {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      document.getElementById("active1").className = "button2";
      document.getElementById("inactive1").className = "button2";
      document.getElementById("inactive2").className = "button3";
      document.getElementById("inactive3").className = "button2";
      document.getElementById("inactive4").className = "button2";
      document.getElementById("inactive5").className = "button2";
      document.getElementById("inactive6").className = "button2";
      document.getElementById("inactive7").className = "button2";
      document.getElementById("inactive8").className = "button2";
      n = n + 1;
      loadingDiv.style.visibility = "visible";
      var occurence = "frontend";
      var hack_id = window.location.search.split("?")[1];
      var page = 1;
      displayTeams();
      var init = async function () {
        try {
          var res = await axios(
            `${url}/participant/get/skill/${hack_id}?page=1&skill=${occurence}`,
            {
              headers: {
                Authorization: "Bearer " + auth,
              },
            }
          );
          hackss = await res.data;
          if (hackss.length >= 13 && hackss.length <= 24) {
            page = page + 1;

            var height = document.body.clientHeight;
            if (height == document.body.clientHeight) {
              window.addEventListener("scroll", someFunction);
              function someFunction() {
                if (window.scrollY + window.innerHeight >= 1153) {
                  displayTeams();
                  window.removeEventListener("scroll", someFunction);
                }
              }
            }
          } else if (hackss.length >= 25 && hackss.length <= 36) {
            page = page + 1;

            displayTeams();
            page = page + 1;
          } else if (hackss.length >= 37 && hackss.length <= 48) {
            page = page + 1;

            displayTeams();
            page = page + 1;

            displayTeams();
            page = page + 1;
          } else if (hackss.length >= 49 && hackss.length <= 60) {
            page = page + 1;

            displayTeams();
            page = page + 1;

            displayTeams();
            page = page + 1;

            displayTeams();
            page = page + 1;
          }
        } catch (err) {
          console.log(err.response.status);
        }
      };
      init();

      document.querySelector(".persons").innerHTML = "";

      function displayTeams() {
        var init = async function () {
          try {
            var res = await axios(
              `${url}/participant/get/skill/${hack_id}?page=${page}&skill=${occurence}`,
              {
                headers: {
                  Authorization: "Bearer " + auth,
                },
              }
            );
            hacks = await res.data;
            loadingDiv.style.visibility = "hidden";

            // var part123 = hacks.final[0].pt._id;
            // localStorage.setItem("participant", part123);
            for (let i = 0; i < hacks.final.length; i++) {
              document.querySelector(".persons").innerHTML +=
                "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                hacks.final[i].pt.photo +
                "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='check()'>" +
                hacks.final[i].pt.name +
                "</a></h4><h5 class='text14'>Frontend</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                hacks.final[i].pt._id +
                "</p></div></div>";
            }
          } catch (err) {
            if (err.response.status == 400) {
              swal("WARNING!!", "Some unknown error occured! Please try again.", "warning");
            }
            if (err.response.status == 404) {
              swal("WARNING!!", "You can't search this team.", "warning");
              loadingDiv.style.visibility = "hidden";
            }
          }
        };
        init();
      }
    });
});
function check() {
  var team_id = window.location.search.split("?")[1];
  const cards = document.querySelectorAll("#good");
  cards.forEach((card) => card.addEventListener("click", look));
  function look() {
    var participant_id = this.querySelector("#participant-id").textContent;
    window.location.assign("./MyProfile_otherView.html?" + team_id);
    var part123 = participant_id;
    localStorage.setItem("participant", part123);
    // var team_id = window.location.search.split("?")[1];
    // localStorage.setItem("team", team_id);
  }
}
bweb.addEventListener("click", function () {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      document.getElementById("active1").className = "button2";
      document.getElementById("inactive1").className = "button2";
      document.getElementById("inactive2").className = "button2";
      document.getElementById("inactive3").className = "button3";
      document.getElementById("inactive4").className = "button2";
      document.getElementById("inactive5").className = "button2";
      document.getElementById("inactive6").className = "button2";
      document.getElementById("inactive7").className = "button2";
      document.getElementById("inactive8").className = "button2";
      n = n + 1;
      loadingDiv.style.visibility = "visible";
      var occurence = "backend";
      var hack_id = window.location.search.split("?")[1];
      var page = 1;
      displayTeams();

      document.querySelector(".persons").innerHTML = "";

      function displayTeams() {
        var init = async function () {
          try {
            var res = await axios(
              `${url}/participant/get/skill/${hack_id}?page=${page}&skill=${occurence}`,
              {
                headers: {
                  Authorization: "Bearer " + auth,
                },
              }
            );
            hacks = await res.data;
            loadingDiv.style.visibility = "hidden";

            // var part123 = hacks.final[0].pt._id;
            // localStorage.setItem("participant", part123);
            for (let i = 0; i < hacks.final.length; i++) {
              document.querySelector(".persons").innerHTML +=
                "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                hacks.final[i].pt.photo +
                "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='check()'>" +
                hacks.final[i].pt.name +
                "</a></h4><h5 class='text14'>Backend</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                hacks.final[i].pt._id +
                "</p></div></div>";
            }
          } catch (err) {
            if (err.response.status == 400) {
              swal("WARNING!!", "Some unknown error occured! Please try again.", "warning");
            }
            if (err.response.status == 404) {
              swal("WARNING!!", "You can't search this team.", "warning");
              loadingDiv.style.visibility = "hidden";
            }
          }
        };
        init();
      }
    });
});
ml.addEventListener("click", function () {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      document.getElementById("active1").className = "button2";
      document.getElementById("inactive1").className = "button2";
      document.getElementById("inactive2").className = "button2";
      document.getElementById("inactive3").className = "button2";
      document.getElementById("inactive4").className = "button3";
      document.getElementById("inactive5").className = "button2";
      document.getElementById("inactive6").className = "button2";
      document.getElementById("inactive7").className = "button2";
      document.getElementById("inactive8").className = "button2";
      n = n + 1;
      loadingDiv.style.visibility = "visible";
      var occurence = "ml";
      var hack_id = window.location.search.split("?")[1];
      var page = 1;
      displayTeams();

      document.querySelector(".persons").innerHTML = "";

      function displayTeams() {
        var init = async function () {
          try {
            var res = await axios(
              `${url}/participant/get/skill/${hack_id}?page=${page}&skill=${occurence}`,
              {
                headers: {
                  Authorization: "Bearer " + auth,
                },
              }
            );
            hacks = await res.data;
            loadingDiv.style.visibility = "hidden";

            // var part123 = hacks.final[0].pt._id;
            // localStorage.setItem("participant", part123);
            for (let i = 0; i < hacks.final.length; i++) {
              document.querySelector(".persons").innerHTML +=
                "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                hacks.final[i].pt.photo +
                "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='check()'>" +
                hacks.final[i].pt.name +
                "</a></h4><h5 class='text14'>Machine Learning</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                hacks.final[i].pt._id +
                "</p></div></div>";
            }
          } catch (err) {
            if (err.response.status == 400) {
              swal("WARNING!!", "Some unknown error occured! Please try again.", "warning");
            }
            if (err.response.status == 404) {
              swal("WARNING!!", "You can't search this team.", "warning");
              loadingDiv.style.visibility = "hidden";
            }
          }
        };
        init();
      }
    });
});
design.addEventListener("click", function () {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      document.getElementById("active1").className = "button2";
      document.getElementById("inactive1").className = "button2";
      document.getElementById("inactive2").className = "button2";
      document.getElementById("inactive3").className = "button2";
      document.getElementById("inactive4").className = "button2";
      document.getElementById("inactive5").className = "button3";
      document.getElementById("inactive6").className = "button2";
      document.getElementById("inactive7").className = "button2";
      document.getElementById("inactive8").className = "button2";
      n = n + 1;
      loadingDiv.style.visibility = "visible";
      var occurence = "ui/ux";
      var hack_id = window.location.search.split("?")[1];
      var page = 1;
      displayTeams();

      document.querySelector(".persons").innerHTML = "";

      function displayTeams() {
        var init = async function () {
          try {
            var res = await axios(
              `${url}/participant/get/skill/${hack_id}?page=${page}&skill=${occurence}`,
              {
                headers: {
                  Authorization: "Bearer " + auth,
                },
              }
            );
            hacks = await res.data;
            loadingDiv.style.visibility = "hidden";

            // var part123 = hacks.final[0].pt._id;
            // localStorage.setItem("participant", part123);
            for (let i = 0; i < hacks.final.length; i++) {
              document.querySelector(".persons").innerHTML +=
                "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                hacks.final[i].pt.photo +
                "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='check()'>" +
                hacks.final[i].pt.name +
                "</a></h4><h5 class='text14'>UI/UX</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                hacks.final[i].pt._id +
                "</p></div></div>";
            }
          } catch (err) {
            if (err.response.status == 400) {
              swal("WARNING!!", "Some unknown error occured! Please try again.", "warning");
            }
            if (err.response.status == 404) {
              swal("WARNING!!", "You can't search this team.", "warning");
              loadingDiv.style.visibility = "hidden";
            }
          }
        };
        init();
      }
    });
});
mgmt.addEventListener("click", function () {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      document.getElementById("active1").className = "button2";
      document.getElementById("inactive1").className = "button2";
      document.getElementById("inactive2").className = "button2";
      document.getElementById("inactive3").className = "button2";
      document.getElementById("inactive4").className = "button2";
      document.getElementById("inactive5").className = "button2";
      document.getElementById("inactive6").className = "button3";
      document.getElementById("inactive7").className = "button2";
      document.getElementById("inactive8").className = "button2";
      n = n + 1;
      loadingDiv.style.visibility = "visible";
      var occurence = "management";
      var hack_id = window.location.search.split("?")[1];
      var page = 1;
      displayTeams();

      document.querySelector(".persons").innerHTML = "";

      function displayTeams() {
        var init = async function () {
          try {
            var res = await axios(
              `${url}/participant/get/skill/${hack_id}?page=${page}&skill=${occurence}`,
              {
                headers: {
                  Authorization: "Bearer " + auth,
                },
              }
            );
            hacks = await res.data;
            loadingDiv.style.visibility = "hidden";

            // var part123 = hacks.final[0].pt._id;
            // localStorage.setItem("participant", part123);
            for (let i = 0; i < hacks.final.length; i++) {
              document.querySelector(".persons").innerHTML +=
                "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                hacks.final[i].pt.photo +
                "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='check()'>" +
                hacks.final[i].pt.name +
                "</a></h4><h5 class='text14'>Management</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                hacks.final[i].pt._id +
                "</p></div></div>";
            }
          } catch (err) {
            if (err.response.status == 400) {
              swal("WARNING!!", "Some unknown error occured! Please try again.", "warning");
            }
            if (err.response.status == 404) {
              swal("WARNING!!", "You can't search this team.", "warning");
              loadingDiv.style.visibility = "hidden";
            }
          }
        };
        init();
      }
    });
});
block.addEventListener("click", function () {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      document.getElementById("active1").className = "button2";
      document.getElementById("inactive1").className = "button2";
      document.getElementById("inactive2").className = "button2";
      document.getElementById("inactive3").className = "button2";
      document.getElementById("inactive4").className = "button2";
      document.getElementById("inactive5").className = "button2";
      document.getElementById("inactive6").className = "button2";
      document.getElementById("inactive7").className = "button3";
      document.getElementById("inactive8").className = "button2";
      n = n + 1;
      loadingDiv.style.visibility = "visible";
      var occurence = "blockchain";
      var hack_id = window.location.search.split("?")[1];
      var page = 1;
      displayTeams();

      document.querySelector(".persons").innerHTML = "";

      function displayTeams() {
        var init = async function () {
          try {
            var res = await axios(
              `${url}/participant/get/skill/${hack_id}?page=${page}&skill=${occurence}`,
              {
                headers: {
                  Authorization: "Bearer " + auth,
                },
              }
            );
            hacks = await res.data;
            loadingDiv.style.visibility = "hidden";

            // var part123 = hacks.final[0].pt._id;
            // localStorage.setItem("participant", part123);
            for (let i = 0; i < hacks.final.length; i++) {
              document.querySelector(".persons").innerHTML +=
                "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                hacks.final[i].pt.photo +
                "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='check()'>" +
                hacks.final[i].pt.name +
                "</a></h4><h5 class='text14'>Blockchain</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                hacks.final[i].pt._id +
                "</p></div></div>";
            }
          } catch (err) {
            if (err.response.status == 400) {
              swal("WARNING!!", "Some unknown error occured! Please try again.", "warning");
            }
            if (err.response.status == 404) {
              swal("WARNING!!", "You can't search this team.", "warning");
              loadingDiv.style.visibility = "hidden";
            }
          }
        };
        init();
      }
    });
});
cyber.addEventListener("click", function () {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      document.getElementById("active1").className = "button2";
      document.getElementById("inactive1").className = "button2";
      document.getElementById("inactive2").className = "button2";
      document.getElementById("inactive3").className = "button2";
      document.getElementById("inactive4").className = "button2";
      document.getElementById("inactive5").className = "button2";
      document.getElementById("inactive6").className = "button2";
      document.getElementById("inactive7").className = "button2";
      document.getElementById("inactive8").className = "button3";
      n = n + 1;
      loadingDiv.style.visibility = "visible";
      var occurence = "cybersecurity";
      var hack_id = window.location.search.split("?")[1];
      var page = 1;
      displayTeams();

      document.querySelector(".persons").innerHTML = "";

      function displayTeams() {
        var init = async function () {
          try {
            var res = await axios(
              `${url}/participant/get/skill/${hack_id}?page=${page}&skill=${occurence}`,
              {
                headers: {
                  Authorization: "Bearer " + auth,
                },
              }
            );
            hacks = await res.data;
            loadingDiv.style.visibility = "hidden";

            // var part123 = hacks.final[0].pt._id;
            // localStorage.setItem("participant", part123);
            for (let i = 0; i < hacks.final.length; i++) {
              document.querySelector(".persons").innerHTML +=
                "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                hacks.final[i].pt.photo +
                "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='check()'>" +
                hacks.final[i].pt.name +
                "</a></h4><h5 class='text14'>Cyber Security</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                hacks.final[i].pt._id +
                "</p></div></div>";
            }
          } catch (err) {
            if (err.response.status == 400) {
              swal("WARNING!!", "Some unknown error occured! Please try again.", "warning");
            }
            if (err.response.status == 404) {
              swal("WARNING!!", "You can't search this team.", "warning");
              loadingDiv.style.visibility = "hidden";
            }
          }
        };
        init();
      }
    });
});
all.addEventListener("click", function () {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      document.getElementById("active1").className = "button3";
      document.getElementById("inactive1").className = "button2";
      document.getElementById("inactive2").className = "button2";
      document.getElementById("inactive3").className = "button2";
      document.getElementById("inactive4").className = "button2";
      document.getElementById("inactive5").className = "button2";
      document.getElementById("inactive6").className = "button2";
      document.getElementById("inactive7").className = "button2";
      document.getElementById("inactive8").className = "button2";
      loadingDiv.style.visibility = "visible";

      var page = 1;
      var hack_id = window.location.search.split("?")[1];
      displayTeams();
      var init = async function () {
        try {
          var res = await axios(
            `${url}/participant/get/all/${hack_id}?page=1`,
            {
              headers: {
                Authorization: "Bearer " + auth,
              },
            }
          );
          hack = await res.data;
          if (hack.length >= 13 && hack.length <= 24) {
            page = page + 1;
            displayTeams();
          } else if (hack.length >= 25 && hack.length <= 36) {
            page = page + 1;

            displayTeams();
            page = page + 1;
          } else if (hack.length >= 37 && hack.length <= 48) {
            page = page + 1;
            console.log(page);

            displayTeams();
            page = page + 1;
            console.log(page);

            displayTeams();
            page = page + 1;
            console.log(page);
          } else if (hack.length >= 49 && hack.length <= 60) {
            page = page + 1;

            displayTeams();
            page = page + 1;

            displayTeams();
            page = page + 1;
            displayTeams();
            page = page + 1;
          }
        } catch (err) {
          console.log(err);
        }
      };
      init();

      var height = document.body.clientHeight;
      if (height == document.body.clientHeight) {
        window.addEventListener("scroll", someFunction);
        function someFunction() {
          if (window.scrollY + window.innerHeight >= 1153) {
            // displayTeams();
            window.removeEventListener("scroll", someFunction);
          }
        }
      }

      document.querySelector(".persons").innerHTML = "";

      function displayTeams() {
        var init = async function () {
          try {
            var res = await axios(
              `${url}/participant/get/all/${hack_id}?page=${page}`,
              {
                headers: {
                  Authorization: "Bearer " + auth,
                },
              }
            );
            hacks = await res.data;
            loadingDiv.style.visibility = "hidden";

            for (let i = 0; i < hacks.final.length; i++) {
              if (hacks.final[i].skills.length == 1) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='good><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                  hacks.final[i].pt.photo +
                  "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7 abc'><h4 class='text13'><a onclick='check()'>" +
                  hacks.final[i].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  hacks.final[i].skills[0].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-1'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                  hacks.final[i].pt._id +
                  "</p></div></div>";
              }
              if (hacks.final[i].skills.length == 2) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                  hacks.final[i].pt.photo +
                  "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7 abc'><h4 class='text13'><a onclick='check()'>" +
                  hacks.final[i].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  hacks.final[i].skills[0].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[1].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-1'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                  hacks.final[i].pt._id +
                  "</p></div></div>";
              }
              if (hacks.final[i].skills.length == 3) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                  hacks.final[i].pt.photo +
                  "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7 abc'><h4 class='text13'><a onclick='check()'>" +
                  hacks.final[i].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  hacks.final[i].skills[0].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[1].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[2].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-1'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                  hacks.final[i].pt._id +
                  "</p></div></div>";
              }
              if (hacks.final[i].skills.length == 4) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                  hacks.final[i].pt.photo +
                  "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7 abc'><h4 class='text13'><a onclick='check()'>" +
                  hacks.final[i].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  hacks.final[i].skills[0].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[1].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[2].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[3].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-1'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                  hacks.final[i].pt._id +
                  "</p></div></div>";
              }
              if (hacks.final[i].skills.length == 5) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                  hacks.final[i].pt.photo +
                  "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7 abc'><h4 class='text13'><a onclick='check()'>" +
                  hacks.final[i].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  hacks.final[i].skills[0].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[1].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[2].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[3].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[4].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-1'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                  hacks.final[i].pt._id +
                  "</p></div></div>";
              }
              if (hacks.final[i].skills.length == 6) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                  hacks.final[i].pt.photo +
                  "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7 abc'><h4 class='text13'><a onclick='check()'>" +
                  hacks.final[i].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  hacks.final[i].skills[0].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[1].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[2].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[3].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[4].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[5].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-1'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                  hacks.final[i].pt._id +
                  "</p></div></div>";
              }
              if (hacks.final[i].skills.length == 7) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                  hacks.final[i].pt.photo +
                  "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7 abc'><h4 class='text13'><a onclick='check()'>" +
                  hacks.final[i].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  hacks.final[i].skills[0].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[1].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[2].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[3].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[4].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[5].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[6].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-1'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                  hacks.final[i].pt._id +
                  "</p></div></div>";
              }
              if (hacks.final[i].skills.length == 8) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                  hacks.final[i].pt.photo +
                  "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7 abc'><h4 class='text13'><a onclick='check()'>" +
                  hacks.final[i].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  hacks.final[i].skills[0].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[1].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[2].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[3].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[4].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[5].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[6].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  hacks.final[i].skills[7].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-1'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                  hacks.final[i].pt._id +
                  "</p></div></div>";
              }
            }
          } catch (err) {
            if(err.response.status == 400){
              swal("WARNING!!", "Some unknown error occured! Please try again.", "warning");
            }
            if (err.response.status == 404) {
              swal("WARNING!!", "You can't search this participant.", "warning");
              loadingDiv.style.visibility = "hidden";
            }
          }
        };
        init();
      }
    });
});
$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});

const team_name = localStorage.getItem("hack_name");
document.getElementById("teams").innerHTML = team_name;

let a = document.querySelector("#flexCheckDefault6");
let f = document.querySelector("#flexCheckDefault1");
let b = document.querySelector("#flexCheckDefault2");
let u = document.querySelector("#flexCheckDefault3");
let mac = document.querySelector("#flexCheckDefault4");
let man = document.querySelector("#flexCheckDefault5");
let c = document.querySelector("#flexCheckDefault7");
let blo = document.querySelector("#flexCheckDefault8");

let choice = [];
var n = 0;
var z = 0;
var y = 0;
var x = 0;
var w = 0;
var v = 0;
var ua = 0;
var t = 0;
a.addEventListener("click", function () {
  if (z % 2 == 0) {
    choice.push("appdev");
    z += 1;
  } else {
    choice = choice.filter((item) => item !== "appdev");
    z += 1;
  }
});
f.addEventListener("click", function () {
  if (n % 2 == 0) {
    choice.push("frontend");
    n += 1;
  } else {
    choice = choice.filter((item) => item !== "frontend");
    n += 1;
  }
});
b.addEventListener("click", function () {
  if (y % 2 == 0) {
    choice.push("backend");
    y += 1;
  } else {
    choice = choice.filter((item) => item !== "backend");
    y += 1;
  }
});
u.addEventListener("click", function () {
  if (x % 2 == 0) {
    choice.push("ui/ux");
    x += 1;
  } else {
    choice = choice.filter((item) => item !== "ui/ux");
    x += 1;
  }
});
mac.addEventListener("click", function () {
  if (w % 2 == 0) {
    choice.push("ml");
    w += 1;
  } else {
    choice = choice.filter((item) => item !== "ml");
    w += 1;
  }
});
man.addEventListener("click", function () {
  if (v % 2 == 0) {
    choice.push("management");
    v += 1;
  } else {
    choice = choice.filter((item) => item !== "management");
    v += 1;
  }
});
blo.addEventListener("click", function () {
  if (ua % 2 == 0) {
    choice.push("blockchain");
    ua += 1;
  } else {
    choice = choice.filter((item) => item !== "blockchain");
    ua += 1;
  }
});
c.addEventListener("click", function () {
  if (t % 2 == 0) {
    choice.push("cybersecurity");
    t += 1;
  } else {
    choice = choice.filter((item) => item !== "cybersecurity");
    t += 1;
  }
});

function submit() {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      axios
        .post(
          `${url}/DN_Team/addSkills/${window.location.search.split("?")[1]}`,
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
          swal(
            "SUCCESS!!",
            "The skills has been saved successfully.",
            "success"
          );
        })
        .catch((error) => {
          if (error.response.status == 404) {
            swal(
              "WARNING!!",
              "You need to atleast give minimum 1 skill.",
              "warning"
            );
          }
        });
    });
}

document.querySelector(".creates").innerHTML =
  "<input type='submit' class='button' value='Search' onclick='search()'>";

function search() {
  var page = 1;
  displayTeams();
  var init = async function () {
    var hack_id = window.location.search.split("?")[1];
    var name = document.getElementById("participant_name").value;
    try {
      var res = await axios(
        `${url}/participant/get/userName/${hack_id}?name=${name}&page=1`,
        {
          headers: {
            Authorization: "Bearer " + auth,
          },
        }
      );
      hack = await res.data;
      if (hack.length >= 13 && hack.length <= 24) {
        page = page + 1;
        displayTeams();
      } else if (hack.length >= 25 && hack.length <= 36) {
        page = page + 1;

        displayTeams();
        page = page + 1;
      } else if (hack.length >= 37 && hack.length <= 48) {
        page = page + 1;

        displayTeams();
        page = page + 1;

        displayTeams();
        page = page + 1;
      } else if (hack.length >= 49 && hack.length <= 60) {
        page = page + 1;

        displayTeams();
        page = page + 1;

        displayTeams();
        page = page + 1;
        displayTeams();
        page = page + 1;
      }
    } catch (err) {
    }
  };
  init();

  var height = document.body.clientHeight;
  if (height == document.body.clientHeight) {
    window.addEventListener("scroll", someFunction);
    function someFunction() {
      if (window.scrollY + window.innerHeight >= 1153) {
        // displayTeams();
        window.removeEventListener("scroll", someFunction);
      }
    }
  }
  document.querySelector(".persons").innerHTML = "";

  function displayTeams() {
    document.getElementById("participant_name");
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((id) => {
        auth = id;
        var hack_id = window.location.search.split("?")[1];
        var name = document.getElementById("participant_name").value;
        axios(
          `${url}/participant/get/userName/${hack_id}?name=${name}&page=${page}`,
          {
            headers: {
              Authorization: "Bearer " + auth,
            },
          }
        )
          .then((response) => {
            teams = response.data;

            // var team_id = window.location.search.split("?")[1];
            // var part123 = teams.final[0].pt._id;
            // localStorage.setItem("participant", part123);
            // document.querySelector(".persons").innerHTML = "";
            for (let i = 0; i < teams.final.length; i++) {
              if (teams.final[i].skills.length == 1) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='goods'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                  teams.final[i].pt.photo +
                  "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='checks()'>" +
                  teams.final[i].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  teams.final[i].skills[0].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='invite()'>INVITE</h5></div></div><p id='participant-ids' style='display:none;'>" +
                  teams.final[i].pt._id +
                  "</p></div></div>";
              }
              if (teams.final[i].skills.length == 2) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='goods'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                  teams.final[i].pt.photo +
                  "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='checks()'>" +
                  teams.final[i].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  teams.final[i].skills[0].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[1].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='invite()'>INVITE</h5></div></div><p id='participant-ids' style='display:none;'>" +
                  teams.final[i].pt._id +
                  "</p></div></div>";
              }
              if (teams.final[i].skills.length == 3) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='goods'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                  teams.final[i].pt.photo +
                  "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='checks()'>" +
                  teams.final[i].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  teams.final[i].skills[0].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[1].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[2].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='invite()'>INVITE</h5></div></div><p id='participant-ids' style='display:none;'>" +
                  teams.final[i].pt._id +
                  "</p></div></div>";
              }
              if (teams.final[i].skills.length == 4) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='goods'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                  teams.final[i].pt.photo +
                  "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='checks()'>" +
                  teams.final[i].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  teams.final[i].skills[0].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[1].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[2].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[3].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='invite()'>INVITE</h5></div></div><p id='participant-ids' style='display:none;'>" +
                  teams.final[i].pt._id +
                  "</p></div></div>";
              }
              if (teams.final[i].skills.length == 5) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='goods'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                  teams.final[i].pt.photo +
                  "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='checks()'>" +
                  teams.final[i].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  teams.final[i].skills[0].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[1].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[2].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[3].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[4].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='invite()'>INVITE</h5></div></div><p id='participant-ids' style='display:none;'>" +
                  teams.final[i].pt._id +
                  "</p></div></div>";
              }
              if (teams.final[i].skills.length == 6) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='goods'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                  teams.final[i].pt.photo +
                  "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='checks()'>" +
                  teams.final[i].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  teams.final[i].skills[0].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[1].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[2].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[3].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[4].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[5].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='invite()'>INVITE</h5></div></div><p id='participant-ids' style='display:none;'>" +
                  teams.final[i].pt._id +
                  "</p></div></div>";
              }
              if (teams.final[i].skills.length == 7) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='goods'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                  teams.final[i].pt.photo +
                  "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='checks()'>" +
                  teams.final[i].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  teams.final[i].skills[0].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[1].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[2].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[3].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[4].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[5].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[6].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='invite()'>INVITE</h5></div></div><p id='participant-ids' style='display:none;'>" +
                  teams.final[i].pt._id +
                  "</p></div></div>";
              }
              if (teams.final[i].skills.length == 8) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='goods'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='" +
                  teams.final[i].pt.photo +
                  "' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='checks()'>" +
                  teams.final[i].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  teams.final[i].skills[0].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[1].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[2].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[3].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[4].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[5].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[6].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[i].skills[7].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='invite()'>INVITE</h5></div></div><p id='participant-ids' style='display:none;'>" +
                  teams.final[i].pt._id +
                  "</p></div></div>";
              }
            }
          })
          .catch((e) => {
            if(e.response.status == 400){
              swal("WARNING!!", "Some unknown error occured! Please try again.", "warning");
            }
            else if (e.response.status == 404) {
              swal("WARNING!!", "You can't search this participant.", "warning");
              loadingDiv.style.visibility = "hidden";
            }
          });
      });
  }
}

function checks() {
  var team_id = window.location.search.split("?")[1];
  const cards = document.querySelectorAll("#goods");
  cards.forEach((card) => card.addEventListener("click", look));
  function look() {
    var participant_id = this.querySelector("#participant-ids").textContent;
    window.location.assign("./MyProfile_otherView.html?" + team_id);
    var part123 = participant_id;
    localStorage.setItem("participant", part123);
  }
}

function invite() {
  // id.innerHTML = "Ooops!";
  var nk = 0;
  const cards = document.querySelectorAll("#goods");
  cards.forEach((card) => card.addEventListener("click", look));
  function look() {
    nk = nk + 1;
    if (nk == 1) {
      var participant_id = this.querySelector("#participant-ids").textContent;
      firebase
        .auth()
        .currentUser.getIdToken()
        .then((id) => {
          auth = id;
          axios
            .post(
              `${url}/invites/invite/${
                window.location.search.split("?")[1]
              }/${participant_id}`,
              {
                code: invite,
              },
              {
                headers: {
                  Authorization: "Bearer " + auth,
                },
              }
            )
            .then((response) => {
              accepted = response.data;
              swal(
                "SUCCESS!!",
                "Your invite has been submitted successfully",
                "success"
              );
            })
            .catch((e) => {
              if (e.response.status == 404) {
                swal("WARNING!!", "No Participant Found", "warning");
              } else if (e.response.status == 409) {
                swal("WARNING!!", "Invite has already been sent", "warning");
              } else if (e.response.status == 400) {
                swal("WARNING!!", "Same Team!!", "warning");
              }
            });
        });
    }
  }
}

function inviteme() {
  // id.innerHTML = "Ooops!";
  var nk = 0;
  const cards = document.querySelectorAll("#good");
  cards.forEach((card) => card.addEventListener("click", look));
  function look() {
    nk = nk + 1;
    if (nk == 1) {
      var participant_id = this.querySelector("#participant-id").textContent;
      firebase
        .auth()
        .currentUser.getIdToken()
        .then((id) => {
          auth = id;
          axios
            .post(
              `${url}/invites/invite/${
                window.location.search.split("?")[1]
              }/${participant_id}`,
              {
                code: invite,
              },
              {
                headers: {
                  Authorization: "Bearer " + auth,
                },
              }
            )
            .then((response) => {
              accepted = response.data;
              swal(
                "SUCCESS!!",
                "Your invite has been submitted successfully",
                "success"
              );
            })
            .catch((e) => {
              if (e.response.status == 409) {
                swal("WARNING!!", "Invite has already been sent", "warning");
              } else if (e.response.status == 400) {
                swal("WARNING!!", "Same Team!!", "warning");
              }
            });
        });
    }
  }
}
