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
setTimeout(function () {
  loadingDiv.style.visibility = "hidden";
}, 3000);
var n = 0;
app.addEventListener("click", function () {
  if (n % 2 == 0) {
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive1").className = "button3";
    n = n + 1;
  } else {
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive1").className = "button2";
    n = n + 1;
  }
});

fweb.addEventListener("click", function () {
  if (n % 2 == 0) {
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive2").className = "button3";
    n = n + 1;
  } else {
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive2").className = "button2";
    n = n + 1;
  }
});
bweb.addEventListener("click", function () {
  if (n % 2 == 0) {
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive3").className = "button3";
    n = n + 1;
  } else {
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive3").className = "button2";
    n = n + 1;
  }
});
ml.addEventListener("click", function () {
  if (n % 2 == 0) {
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive4").className = "button3";
    n = n + 1;
  } else {
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive4").className = "button2";
    n = n + 1;
  }
});
design.addEventListener("click", function () {
  if (n % 2 == 0) {
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive5").className = "button3";
    n = n + 1;
  } else {
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive5").className = "button2";
    n = n + 1;
  }
});
mgmt.addEventListener("click", function () {
  if (n % 2 == 0) {
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive6").className = "button3";
    n = n + 1;
  } else {
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive6").className = "button2";
    n = n + 1;
  }
});
block.addEventListener("click", function () {
  if (n % 2 == 0) {
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive7").className = "button3";
    n = n + 1;
  } else {
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive7").className = "button2";
    n = n + 1;
  }
});
cyber.addEventListener("click", function () {
  if (n % 2 == 0) {
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive8").className = "button3";
    n = n + 1;
  } else {
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive8").className = "button2";
    n = n + 1;
  }
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
});
$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});

document.querySelector(".creates").innerHTML =
  "<input type='submit' class='button' value='Create' onclick='create()'>";

function create() {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      name = document.getElementById("team_name").value;
      if(name == ""){
        swal(
          "WARNING!!",
          "Team Name is not written!!",
          "warning"
        );
      }
      else{
      axios
        .post(
          `${url}/Dn_Team/createTeam/null`,
          {
            name: name,
          },
          {
            headers: {
              Authorization: "Bearer " + auth,
            },
          }
        )
        .then((response) => {
          hack = response.data;

          // document.querySelector(".creates").innerHTML = "<input type='submit' class='button' value='Create' onclick='create()'>"
          if (typeof Storage !== "undefined") {
            localStorage.setItem("hack_name", name);
            window.location.assign("./createteamwohack.html?" + hack._id);
            // location.href = "";
          }
          // window.location.assign("./createteamwhack.html?" + window.location.search.split("?")[1]);
        })
        .catch((error) => {
          if (error.response.status == 400) {
            swal(
              "Warning!!",
              "Some unknown error occured, please try again.",
              "warning"
            );
          }
          else if (error.response.status == 417) {
            swal(
              "Warning!!",
              "Please have all the required teams.",
              "warning"
            );
          }   
        });
      }
    });
}