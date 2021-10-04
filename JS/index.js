$(document).ready(function () {
  $("#nav").load("./Assets/Header/header.txt");
});

var preloader = document.getElementById("loading");

function myFunc() {
  setTimeout(load, 1500);
}

function load() {
  preloader.style.display = "none";
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    user.getIdToken().then(function (idToken) {
      auth = idToken;
      fetch(`https://hackportalbackend.herokuapp.com/participant/login`, {
        method: "GET",
        headers: new Headers({
          Authorization: "Bearer " + idToken,
        }),
      }).then((response) => {
        if (response.status == 403) {
          loadingDiv.style.visibility = "hidden";
          window.location.assign = "./HTML/orghack.html";
        }else if (response.status == 200) {
          window.location.assign("./HTML/viewhackathon.html");
        }
      });
    });
  } else {
    // User is signed out
  }
});
