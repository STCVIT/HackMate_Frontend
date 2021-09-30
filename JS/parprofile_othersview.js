$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});
const loadingDiv = document.getElementById("loading");
let user;
let user_id;
let person_id;
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    user.getIdToken().then(function (idToken) {
      auth = idToken;
      randomId = localStorage.getItem("participant");
      axios(`${url}/participant/get/${randomId}`, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      })
        .then((response) => {
          user = response.data;

          if (user.participant.photo == "hey") {
            document
              .querySelector(".photo")
              .setAttribute("src", "../Assets/Images/blank-profile.png");
          } else {
            document
              .querySelector(".photo")
              .setAttribute("src", user.participant.photo);
          }
          document.querySelector(".caption h2").innerHTML = toTitleCase(
            user.participant.name
          );
          document.querySelector("#name").innerHTML = toTitleCase(
            user.participant.name
          );
          document.querySelector("#username").innerHTML =
            user.participant.username;
          document.querySelector("#email").innerHTML = user.participant.email;
          document.querySelector("#college").innerHTML = toTitleCase(
            user.participant.college
          );
          document.querySelector("#git").innerHTML = user.participant.github;
          document.querySelector("#linkedln").innerHTML =
            user.participant.linkedIn;
          document.querySelector("#personal_website").innerHTML =
            user.participant.website;
          document.querySelector("#year").innerHTML =
            user.participant.graduation_year;
          document.querySelector("#bio").innerHTML = user.participant.bio;
          person_id = user.participant._id;
          let body = document.getElementById("card-body");
          let yourHTML = "<h5 class='card-title'>Skills</h5>";
          let len = user.skills.length;
          for (let i = 0; i < len; i++) {
            yourHTML +=
              "<p class='fill'><input class='form-check-input' type='checkbox' value='' id='flexCheckDefault' checked disabled='disabled'><label class='check-label' for='flexCheckDefault'>" +
              user.skills[i].skill;
            yourHTML += "</label></p>";
          }

          body.innerHTML = yourHTML;
          document.getElementById("loading").style.visibility = "hidden";
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
          if (error.response.status == 404) {
            swal(
              "Warning!!",
              "Profile doesn't exist.",
              "warning"
            );
          }
        });
    });
  } else {
    // User is signed out
  }
  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
});
function invite() {
  // id.innerHTML = "Ooops!";
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      axios
        .post(
          `${url}/invites/invite/${
            window.location.search.split("?")[1]
          }/${person_id}`,
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
            "Your invite has been submitted successfully!!",
            "success"
          );
        })
        .catch((e) => {
          if (e.response.status == 404) {
            swal("WARNING!!", "No Participant Found", "warning");
          } else if (e.response.status == 409) {
            swal("WARNING!!", "Invite has already been sent", "warning");
          } else if (e.response.status == 400) {
            swal(
              "WARNING!!",
              "The participant you are trying to invite is already in the given team!!",
              "warning"
            );
          }
        });
    });
}
