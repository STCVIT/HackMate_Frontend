const app = document.querySelector(".text3");
const fweb = document.querySelector(".text6");
const bweb = document.querySelector(".text7");
const ml = document.querySelector(".text8");
const mgmt = document.querySelector(".text10");
const design = document.querySelector(".text9");
const block = document.querySelector(".text11");
const cyber = document.querySelector(".text12");
const all = document.querySelector(".text5");

var n = 0;
app.addEventListener("click", function () {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      if (n % 2 == 0) {
        document.getElementById("active1").className = "button2";
        document.getElementById("inactive1").className = "button3";
        n = n + 1;
        var occurence = "appdev";
        var hack_id = window.location.search.split("?")[1];
        var page = 1;
        displayTeams();
        // var init = async function () {
        //   try {
        //     var res = await axios(`${url}/participant/get/skill/null?page=1&skill=${occurence}`, {
        //       headers: {
        //         Authorization: "Bearer " + auth,
        //       },
        //     });
        //     hackss = await res.data;
        //     if (hackss.length >= 13 && hackss.length <= 24) {
        //       page = page + 1;
        //
        //     }
        //     else if (hackss.length >= 25 && hackss.length <= 36) {
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //     }
        //     else if (hackss.length >= 37 && hackss.length <= 48) {
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //     }
        //     else if (hackss.length >= 49 && hackss.length <= 60) {
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //     }
        //   }
        //   catch (err) {
        //     console.log(err.response.status);
        //   }
        // }
        // init();
        // var height = document.body.clientHeight;
        // console.log(height);
        // if (height == document.body.clientHeight) {
        //   window.addEventListener('scroll', someFunction);
        //   function someFunction() {
        //     if (window.scrollY + window.innerHeight >= 1180) {
        //       console.log(window.scrollY + window.innerHeight);
        //       displayTeams();
        //       window.removeEventListener('scroll', someFunction);
        //     }
        //   }
        // }
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

              // var part123 = hacks.final[0].pt._id;
              // localStorage.setItem("participant", part123);
              for (let i = 0; i < hacks.final.length; i++) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='../Assets/Images/dp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='check()'>" +
                  hacks.final[i].pt.name +
                  "</a></h4><h5 class='text14'>App Dev</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                  hacks.final[i].pt._id +
                  "</p></div></div>";
              }
            } catch (err) {
              console.log(err.response.status);
              if (err.response.status == 400) {
                swal("WARNING!!", "No Hack Found!", "warning");
              }
              if (err.response.status == 404) {
                swal("WARNING!!", "You can't search this team.", "warning");
              }
            }
          };
          init();
        }
      } else {
        document.getElementById("active1").className = "button2";
        document.getElementById("inactive1").className = "button2";
        n = n + 1;
      }
    });
});
fweb.addEventListener("click", function () {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      if (n % 2 == 0) {
        document.getElementById("active1").className = "button2";
        document.getElementById("inactive2").className = "button3";
        n = n + 1;
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
        // var height = document.body.clientHeight;
        // console.log(height);
        // if (height == document.body.clientHeight) {
        //   window.addEventListener('scroll', someFunction);
        //   function someFunction() {
        //     if (window.scrollY + window.innerHeight >= 1153) {
        //       console.log(window.scrollY + window.innerHeight);
        //       displayTeams();
        //       window.removeEventListener('scroll', someFunction);
        //     }
        //   }
        // }
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

              // var part123 = hacks.final[0].pt._id;
              // localStorage.setItem("participant", part123);
              for (let i = 0; i < hacks.final.length; i++) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='../Assets/Images/dp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='check()'>" +
                  hacks.final[i].pt.name +
                  "</a></h4><h5 class='text14'>Frontend</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                  hacks.final[i].pt._id +
                  "</p></div></div>";
              }
            } catch (err) {
              console.log(err.response.status);
              if (err.response.status == 400) {
                swal("WARNING!!", "No Hack Found!", "warning");
              }
              if (err.response.status == 404) {
                swal("WARNING!!", "You can't search this team.", "warning");
              }
            }
          };
          init();
        }
      } else {
        document.getElementById("active1").className = "button2";
        document.getElementById("inactive2").className = "button2";
        n = n + 1;
      }
    });
});
function check() {
  const cards = document.querySelectorAll("#good");
  cards.forEach((card) => card.addEventListener("click", look));
  console.log(cards);
  function look() {
    console.log(" i was clicked");
    console.log(this);
    var participant_id = this.querySelector("#participant-id").textContent;
    console.log(participant_id);
    window.location.assign("./MyProfile_otherView.html");
    var part123 = participant_id;
    localStorage.setItem("participant", part123);
    var team_id = window.location.search.split("?")[1];
    localStorage.setItem("team", team_id);
  }
}
bweb.addEventListener("click", function () {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      if (n % 2 == 0) {
        document.getElementById("active1").className = "button2";
        document.getElementById("inactive3").className = "button3";
        n = n + 1;
        var occurence = "backend";
        var hack_id = window.location.search.split("?")[1];
        var page = 1;
        displayTeams();
        // var init = async function () {
        //   try {
        //     var res = await axios(`${url}/participant/get/skill/null?page=1&skill=${occurence}`, {
        //       headers: {
        //         Authorization: "Bearer " + auth,
        //       },
        //     });
        //     hackss = await res.data;
        //     if (hackss.length >= 13 && hackss.length <= 24) {
        //       page = page + 1;
        //
        //     }
        //     else if (hackss.length >= 25 && hackss.length <= 36) {
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //     }
        //     else if (hackss.length >= 37 && hackss.length <= 48) {
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //     }
        //     else if (hackss.length >= 49 && hackss.length <= 60) {
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //     }
        //   }
        //   catch (err) {
        //     console.log(err.response.status);
        //   }
        // }
        // init();
        // var height = document.body.clientHeight;
        // console.log(height);
        // if (height == document.body.clientHeight) {
        //   window.addEventListener('scroll', someFunction);
        //   function someFunction() {
        //     if (window.scrollY + window.innerHeight >= 1180) {
        //       console.log(window.scrollY + window.innerHeight);
        //       displayTeams();
        //       window.removeEventListener('scroll', someFunction);
        //     }
        //   }
        // }
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

              // var part123 = hacks.final[0].pt._id;
              // localStorage.setItem("participant", part123);
              for (let i = 0; i < hacks.final.length; i++) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='../Assets/Images/dp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='check()'>" +
                  hacks.final[i].pt.name +
                  "</a></h4><h5 class='text14'>Backend</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                  hacks.final[i].pt._id +
                  "</p></div></div>";
              }
            } catch (err) {
              console.log(err.response.status);
              if (err.response.status == 400) {
                swal("WARNING!!", "No Hack Found!", "warning");
              }
              if (err.response.status == 404) {
                swal("WARNING!!", "You can't search this team.", "warning");
              }
            }
          };
          init();
        }
      } else {
        document.getElementById("active1").className = "button2";
        document.getElementById("inactive3").className = "button2";
        n = n + 1;
      }
    });
});
ml.addEventListener("click", function () {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      if (n % 2 == 0) {
        document.getElementById("active1").className = "button2";
        document.getElementById("inactive4").className = "button3";
        n = n + 1;
        var occurence = "ml";
        var hack_id = window.location.search.split("?")[1];
        var page = 1;
        displayTeams();
        // var init = async function () {
        //   try {
        //     var res = await axios(`${url}/participant/get/skill/null?page=1&skill=${occurence}`, {
        //       headers: {
        //         Authorization: "Bearer " + auth,
        //       },
        //     });
        //     hackss = await res.data;
        //     if (hackss.length >= 13 && hackss.length <= 24) {
        //       page = page + 1;
        //
        //     }
        //     else if (hackss.length >= 25 && hackss.length <= 36) {
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //     }
        //     else if (hackss.length >= 37 && hackss.length <= 48) {
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //     }
        //     else if (hackss.length >= 49 && hackss.length <= 60) {
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //     }
        //   }
        //   catch (err) {
        //     console.log(err.response.status);
        //   }
        // }
        // init();
        // var height = document.body.clientHeight;
        // console.log(height);
        // if (height == document.body.clientHeight) {
        //   window.addEventListener('scroll', someFunction);
        //   function someFunction() {
        //     if (window.scrollY + window.innerHeight >= 1180) {
        //       console.log(window.scrollY + window.innerHeight);
        //       displayTeams();
        //       window.removeEventListener('scroll', someFunction);
        //     }
        //   }
        // }
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

              // var part123 = hacks.final[0].pt._id;
              // localStorage.setItem("participant", part123);
              for (let i = 0; i < hacks.final.length; i++) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='../Assets/Images/dp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='check()'>" +
                  hacks.final[i].pt.name +
                  "</a></h4><h5 class='text14'>Machine Learning</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                  hacks.final[i].pt._id +
                  "</p></div></div>";
              }
            } catch (err) {
              console.log(err.response.status);
              if (err.response.status == 400) {
                swal("WARNING!!", "No Hack Found!", "warning");
              }
              if (err.response.status == 404) {
                swal("WARNING!!", "You can't search this team.", "warning");
              }
            }
          };
          init();
        }
      } else {
        document.getElementById("active1").className = "button2";
        document.getElementById("inactive4").className = "button2";
        n = n + 1;
      }
    });
});
design.addEventListener("click", function () {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      if (n % 2 == 0) {
        document.getElementById("active1").className = "button2";
        document.getElementById("inactive5").className = "button3";
        n = n + 1;
        var occurence = "ui/ux";
        var hack_id = window.location.search.split("?")[1];
        var page = 1;
        displayTeams();
        // var init = async function () {
        //   try {
        //     var res = await axios(`${url}/participant/get/skill/null?page=1&skill=${occurence}`, {
        //       headers: {
        //         Authorization: "Bearer " + auth,
        //       },
        //     });
        //     hackss = await res.data;
        //     if (hackss.length >= 13 && hackss.length <= 24) {
        //       page = page + 1;
        //
        //     }
        //     else if (hackss.length >= 25 && hackss.length <= 36) {
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //     }
        //     else if (hackss.length >= 37 && hackss.length <= 48) {
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //     }
        //     else if (hackss.length >= 49 && hackss.length <= 60) {
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //     }
        //   }
        //   catch (err) {
        //     console.log(err.response.status);
        //   }
        // }
        // init();
        // var height = document.body.clientHeight;
        // console.log(height);
        // if (height == document.body.clientHeight) {
        //   window.addEventListener('scroll', someFunction);
        //   function someFunction() {
        //     if (window.scrollY + window.innerHeight >= 1180) {
        //       console.log(window.scrollY + window.innerHeight);
        //       displayTeams();
        //       window.removeEventListener('scroll', someFunction);
        //     }
        //   }
        // }
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

              // var part123 = hacks.final[0].pt._id;
              // localStorage.setItem("participant", part123);
              for (let i = 0; i < hacks.final.length; i++) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='../Assets/Images/dp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='check()'>" +
                  hacks.final[i].pt.name +
                  "</a></h4><h5 class='text14'>UI/UX</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                  hacks.final[i].pt._id +
                  "</p></div></div>";
              }
            } catch (err) {
              console.log(err.response.status);
              if (err.response.status == 400) {
                swal("WARNING!!", "No Hack Found!", "warning");
              }
              if (err.response.status == 404) {
                swal("WARNING!!", "You can't search this team.", "warning");
              }
            }
          };
          init();
        }
      } else {
        document.getElementById("active1").className = "button2";
        document.getElementById("inactive5").className = "button2";
        n = n + 1;
      }
    });
});
mgmt.addEventListener("click", function () {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      if (n % 2 == 0) {
        document.getElementById("active1").className = "button2";
        document.getElementById("inactive6").className = "button3";
        n = n + 1;
        var occurence = "management";
        var hack_id = window.location.search.split("?")[1];
        var page = 1;
        displayTeams();
        // var init = async function () {
        //   try {
        //     var res = await axios(`${url}/participant/get/skill/null?page=1&skill=${occurence}`, {
        //       headers: {
        //         Authorization: "Bearer " + auth,
        //       },
        //     });
        //     hackss = await res.data;
        //     if (hackss.length >= 13 && hackss.length <= 24) {
        //       page = page + 1;
        //
        //     }
        //     else if (hackss.length >= 25 && hackss.length <= 36) {
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //     }
        //     else if (hackss.length >= 37 && hackss.length <= 48) {
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //     }
        //     else if (hackss.length >= 49 && hackss.length <= 60) {
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //     }
        //   }
        //   catch (err) {
        //     console.log(err.response.status);
        //   }
        // }
        // init();
        // var height = document.body.clientHeight;
        // console.log(height);
        // if (height == document.body.clientHeight) {
        //   window.addEventListener('scroll', someFunction);
        //   function someFunction() {
        //     if (window.scrollY + window.innerHeight >= 1180) {
        //       console.log(window.scrollY + window.innerHeight);
        //       displayTeams();
        //       window.removeEventListener('scroll', someFunction);
        //     }
        //   }
        // }
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

              // var part123 = hacks.final[0].pt._id;
              // localStorage.setItem("participant", part123);
              for (let i = 0; i < hacks.final.length; i++) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='../Assets/Images/dp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='check()'>" +
                  hacks.final[i].pt.name +
                  "</a></h4><h5 class='text14'>Management</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                  hacks.final[i].pt._id +
                  "</p></div></div>";
              }
            } catch (err) {
              console.log(err.response.status);
              if (err.response.status == 400) {
                swal("WARNING!!", "No Hack Found!", "warning");
              }
              if (err.response.status == 404) {
                swal("WARNING!!", "You can't search this team.", "warning");
              }
            }
          };
          init();
        }
      } else {
        document.getElementById("active1").className = "button2";
        document.getElementById("inactive6").className = "button2";
        n = n + 1;
      }
    });
});
block.addEventListener("click", function () {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      if (n % 2 == 0) {
        document.getElementById("active1").className = "button2";
        document.getElementById("inactive7").className = "button3";
        n = n + 1;
        var occurence = "blockchain";
        var hack_id = window.location.search.split("?")[1];
        var page = 1;
        displayTeams();
        // var init = async function () {
        //   try {
        //     var res = await axios(`${url}/participant/get/skill/null?page=1&skill=${occurence}`, {
        //       headers: {
        //         Authorization: "Bearer " + auth,
        //       },
        //     });
        //     hackss = await res.data;
        //     if (hackss.length >= 13 && hackss.length <= 24) {
        //       page = page + 1;
        //
        //     }
        //     else if (hackss.length >= 25 && hackss.length <= 36) {
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //     }
        //     else if (hackss.length >= 37 && hackss.length <= 48) {
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //     }
        //     else if (hackss.length >= 49 && hackss.length <= 60) {
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //     }
        //   }
        //   catch (err) {
        //     console.log(err.response.status);
        //   }
        // }
        // init();
        // var height = document.body.clientHeight;
        // console.log(height);
        // if (height == document.body.clientHeight) {
        //   window.addEventListener('scroll', someFunction);
        //   function someFunction() {
        //     if (window.scrollY + window.innerHeight >= 1180) {
        //       console.log(window.scrollY + window.innerHeight);
        //       displayTeams();
        //       window.removeEventListener('scroll', someFunction);
        //     }
        //   }
        // }
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

              // var part123 = hacks.final[0].pt._id;
              // localStorage.setItem("participant", part123);
              for (let i = 0; i < hacks.final.length; i++) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='../Assets/Images/dp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='check()'>" +
                  hacks.final[i].pt.name +
                  "</a></h4><h5 class='text14'>Blockchain</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                  hacks.final[i].pt._id +
                  "</p></div></div>";
              }
            } catch (err) {
              console.log(err.response.status);
              if (err.response.status == 400) {
                swal("WARNING!!", "No Hack Found!", "warning");
              }
              if (err.response.status == 404) {
                swal("WARNING!!", "You can't search this team.", "warning");
              }
            }
          };
          init();
        }
      } else {
        document.getElementById("active1").className = "button2";
        document.getElementById("inactive7").className = "button2";
        n = n + 1;
      }
    });
});
cyber.addEventListener("click", function () {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      if (n % 2 == 0) {
        document.getElementById("active1").className = "button2";
        document.getElementById("inactive8").className = "button3";
        n = n + 1;
        var occurence = "cybersecurity";
        var hack_id = window.location.search.split("?")[1];
        var page = 1;
        displayTeams();
        // var init = async function () {
        //   try {
        //     var res = await axios(`${url}/participant/get/skill/null?page=1&skill=${occurence}`, {
        //       headers: {
        //         Authorization: "Bearer " + auth,
        //       },
        //     });
        //     hackss = await res.data;
        //     if (hackss.length >= 13 && hackss.length <= 24) {
        //       page = page + 1;
        //
        //     }
        //     else if (hackss.length >= 25 && hackss.length <= 36) {
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //     }
        //     else if (hackss.length >= 37 && hackss.length <= 48) {
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //     }
        //     else if (hackss.length >= 49 && hackss.length <= 60) {
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //       displayTeams();
        //       page = page + 1;
        //
        //     }
        //   }
        //   catch (err) {
        //     console.log(err.response.status);
        //   }
        // }
        // init();
        // var height = document.body.clientHeight;
        // console.log(height);
        // if (height == document.body.clientHeight) {
        //   window.addEventListener('scroll', someFunction);
        //   function someFunction() {
        //     if (window.scrollY + window.innerHeight >= 1180) {
        //       console.log(window.scrollY + window.innerHeight);
        //       displayTeams();
        //       window.removeEventListener('scroll', someFunction);
        //     }
        //   }
        // }
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

              // var part123 = hacks.final[0].pt._id;
              // localStorage.setItem("participant", part123);
              for (let i = 0; i < hacks.final.length; i++) {
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2' id='good'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='../Assets/Images/dp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a onclick='check()'>" +
                  hacks.final[i].pt.name +
                  "</a></h4><h5 class='text14'>Cyber Security</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='inviteme()'>INVITE</h5></div></div><p id='participant-id' style='display:none;'>" +
                  hacks.final[i].pt._id +
                  "</p></div></div>";
              }
            } catch (err) {
              console.log(err.response.status);
              if (err.response.status == 400) {
                swal("WARNING!!", "No Hack Found!", "warning");
              }
              if (err.response.status == 404) {
                swal("WARNING!!", "You can't search this team.", "warning");
              }
            }
          };
          init();
        }
      } else {
        document.getElementById("active1").className = "button2";
        document.getElementById("inactive8").className = "button2";
        n = n + 1;
      }
    });
});
all.addEventListener("click", function () {
  document.getElementById("active1").className = "button3";
  document.getElementById("inactive1").className = "button2";
  document.getElementById("inactive2").className = "button2";
  document.getElementById("inactive3").className = "button2";
  document.getElementById("inactive4").className = "button2";
  document.getElementById("inactive5").className = "button2";
  document.getElementById("inactive6").className = "button2";
  document.getElementById("inactive7").className = "button2";
  document.getElementById("inactive8").className = "button2";

  document.querySelector(".persons").innerHTML = "";
  //   displayTeams()
  // function displayTeams() {
  // var init = async function () {
  //   try{
  //   var res = await axios(`${url}/participant/get/all/null?page=1`, {
  //     headers: {
  //       Authorization: "Bearer " + auth,
  //     },
  //   });
  //   hacks = await res.data;
  //
  //   for(let i = 0; i<hacks.final.length; i++){
  //     document.querySelector(".persons").innerHTML +=
  //       "<div class='card2'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='../Assets/Images/dp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'>"+hacks.final[i].pt.name+"</h4><h5 class='text14'>"+ hacks.final[0].skills[0].skill+"</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='invite()'>INVITE</h5></div></div></div></div>";
  //   }
  // }
  // catch(err) {
  //   console.log(err.response.status);
  //   if(err.response.status == 404){
  //     swal("WARNING!!", "You can't search this team.", "warning");
  //   }
  // }
  // }
  // init();
  // }
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
          console.error("Error:", error);
        });
    });
}

document
  .getElementById("participant_name")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((id) => {
        auth = id;
        var hack_id = window.location.search.split("?")[1];
        var name = document.getElementById("participant_name").value;
        if (event.keyCode === 13) {
          axios(
            `${url}/participant/get/userName/${hack_id}?name=${name}&page=1`,
            {
              headers: {
                Authorization: "Bearer " + auth,
              },
            }
          )
            .then((response) => {
              teams = response.data;

              var part123 = teams.final[0].pt._id;
              localStorage.setItem("participant", part123);
              if (teams.final[0].skills.length == 1) {
                document.querySelector(".persons").innerHTML = "";
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='../Assets/Images/dp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a href='./MyProfile_otherView.html'>" +
                  teams.final[0].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  teams.final[0].skills[0].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='invite()'>INVITE</h5></div></div></div></div>";
              }
              if (teams.final[0].skills.length == 2) {
                document.querySelector(".persons").innerHTML = "";
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='../Assets/Images/dp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a href='./MyProfile_otherView.html'>" +
                  teams.final[0].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  teams.final[0].skills[0].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[1].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='invite()'>INVITE</h5></div></div></div></div>";
              }
              if (teams.final[0].skills.length == 3) {
                document.querySelector(".persons").innerHTML = "";
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='../Assets/Images/dp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a href='./MyProfile_otherView.html'>" +
                  teams.final[0].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  teams.final[0].skills[0].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[1].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[2].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='invite()'>INVITE</h5></div></div></div></div>";
              }
              if (teams.final[0].skills.length == 4) {
                document.querySelector(".persons").innerHTML = "";
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='../Assets/Images/dp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a href='./MyProfile_otherView.html'>" +
                  teams.final[0].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  teams.final[0].skills[0].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[1].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[2].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[3].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='invite()'>INVITE</h5></div></div></div></div>";
              }
              if (teams.final[0].skills.length == 5) {
                document.querySelector(".persons").innerHTML = "";
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='../Assets/Images/dp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a href='./MyProfile_otherView.html'>" +
                  teams.final[0].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  teams.final[0].skills[0].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[1].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[2].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[3].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[4].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='invite()'>INVITE</h5></div></div></div></div>";
              }
              if (teams.final[0].skills.length == 6) {
                document.querySelector(".persons").innerHTML = "";
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='../Assets/Images/dp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a href='./MyProfile_otherView.html'>" +
                  teams.final[0].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  teams.final[0].skills[0].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[1].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[2].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[3].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[4].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[5].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='invite()'>INVITE</h5></div></div></div></div>";
              }
              if (teams.final[0].skills.length == 7) {
                document.querySelector(".persons").innerHTML = "";
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='../Assets/Images/dp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a href='./MyProfile_otherView.html'>" +
                  teams.final[0].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  teams.final[0].skills[0].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[1].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[2].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[3].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[4].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[5].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[6].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='invite()'>INVITE</h5></div></div></div></div>";
              }
              if (teams.final[0].skills.length == 8) {
                document.querySelector(".persons").innerHTML = "";
                document.querySelector(".persons").innerHTML +=
                  "<div class='card2'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='../Assets/Images/dp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'><a href='./MyProfile_otherView.html'>" +
                  teams.final[0].pt.name +
                  "</a></h4><h5 class='text14'>" +
                  teams.final[0].skills[0].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[1].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[2].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[3].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[4].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[5].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[6].skill +
                  "</h5>&nbsp;&nbsp;<h5 class='text14'>" +
                  teams.final[0].skills[7].skill +
                  "</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='invite()'>INVITE</h5></div></div></div></div>";
              }
            })
            .catch((e) => {
              console.log(e);
              console.log(e.response.status);
              if (e.response.status == 400) {
                swal("WARNING!!", "No Hack Found!", "warning");
              }
              if (e.response.status == 404) {
                swal("WARNING!!", "No Participant Found", "warning");
              }
            });
        }
      });
  });

function invite() {
  // id.innerHTML = "Ooops!";
  var participant_id = teams.final[0].pt._id;
  console.log(participant_id);
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
          console.log(e);
          if (e.response.status == 404) {
            swal("WARNING!!", "No Participant Found", "warning");
          } else if (e.response.status == 400) {
            swal("WARNING!!", "Invite has already been sent", "warning");
          }
        });
    });
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
              if (e.response.status == 400) {
                swal("WARNING!!", "Invite has already been sent", "warning");
              }
            });
        });
    }
  }
}
