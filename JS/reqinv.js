var count = 0;
const loadingDiv = document.getElementById("loading");

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    user.getIdToken().then(function (idToken) {
      auth = idToken;

      axios(`${url}/participant/login`, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      }).then((response) => {
        document.querySelector(".username").innerText = response.data.username;
      });

      axios(`${url}/requests/myRequests`, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      })
        .then((response) => {
          requests = response.data;
          
          document.querySelector(".reqinv").innerHTML = "";
          requests.received.forEach((element) => {
            
            document.querySelector(".reqinv").innerHTML +=
              "<div class='row reqinvrow'><div class='col-12'>    <div class='row'>        <div class='col-12'>            <nbw>" +
              element.participant.name +
              "</nbw> has requested you to become a part of <nbw>" +
              element.team.name +
              ".</nbw>        </div>    </div>    <div class='row justify-content-end' style='padding-top: 16px;'>        <input id=" +
              element.req +
              " class=' delete btn btn-success' name='accept' type='submit' value='ACCEPT' onclick='acceptreq(event.target.id)'            style='color: #fff; opacity: 1;'>        <input id=" +
              element.req +
              " name='reject' type='submit' value='REJECT' onclick='rejectreq(event.target.id)'            style='color: #E7EFEF; opacity: 1; border: none; width: 60px;'>    </div></div></div>";
          });
          requests.sent.forEach((element) => {
            
            document.querySelector(".reqinv").innerHTML +=
              "<div class='row reqinvrow'><div class='col-12'>    <div class='row'>        <div class='col-12'>            <nbw>You</nbw> have requested to become a part of <nbw>" +
              element.team.name +
              ".</nbw>        </div>    </div>    <div class='row justify-content-end' style='padding-top: 16px;'>        <input id=" +
              element.req +
              " name='reject' type='submit' value='DELETE' onclick='deletereq(event.target.id)'            style='color: #E7EFEF; opacity: 1; border: none; width: 60px;'>    </div></div></div>";
          });
          loadingDiv.style.visibility = "hidden";
        })
        .catch((error) => {
          console.error("Error:", error);
          loadingDiv.style.visibility = "hidden";
          if (error.response.status == 404) {
            document.querySelector(".reqinv").innerHTML =
              "<div class='reqinv container-fluid'><div class='row reqinvrow'><div class='col-12 text-center' style='font-size: 18px;'>    You don't have any notifications right now!</div></div></div>";
          }
        });
    });
  } else {
    // User is signed out
    if (count != 1) {
      alert("Please sign in!");
      window.location = "./participantlognsignup.html";
    }
  }
});

document.querySelector("#requests").addEventListener("click", () => {
  if (
    document
      .querySelector("#requests")
      .classList.contains("notification-type-inactive")
  ) {
    document
      .querySelector("#requests")
      .classList.remove("notification-type-inactive");
    document
      .querySelector("#requests")
      .classList.add("notification-type-active");
    document
      .querySelector("#invites")
      .classList.remove("notification-type-active");
    document
      .querySelector("#invites")
      .classList.add("notification-type-inactive");
  }
  document.querySelector(".reqinv").innerHTML = "";

  // getRequests()
});
document.querySelector("#invites").addEventListener("click", () => {
  if (
    document
      .querySelector("#invites")
      .classList.contains("notification-type-inactive")
  ) {
    document
      .querySelector("#invites")
      .classList.remove("notification-type-inactive");
    document
      .querySelector("#invites")
      .classList.add("notification-type-active");
    document
      .querySelector("#requests")
      .classList.remove("notification-type-active");
    document
      .querySelector("#requests")
      .classList.add("notification-type-inactive");
  }

  document.querySelector(".reqinv").innerHTML = "";
  // getInvites();
});

function getRequests() {
  loadingDiv.style.visibility = "visible";
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      axios(`${url}/requests/myRequests`, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      })
        .then((response) => {
          requests = response.data;
          
          document.querySelector(".reqinv").innerHTML = "";
          requests.received.forEach((element) => {
            
            document.querySelector(".reqinv").innerHTML +=
              "<div class='row reqinvrow'><div class='col-12'>    <div class='row'>        <div class='col-12'>            <nbw>" +
              element.participant.name +
              "</nbw> has requested you to become a part of <nbw>" +
              element.team.name +
              ".</nbw>        </div>    </div>    <div class='row justify-content-end' style='padding-top: 16px;'>        <input id=" +
              element.req +
              " class=' delete btn btn-success' name='accept' type='submit' value='ACCEPT' onclick='acceptreq(event.target.id)'            style='color: #fff; opacity: 1;'>        <input id=" +
              element.req +
              " name='reject' type='submit' value='REJECT' onclick='rejectreq(event.target.id)'            style='color: #E7EFEF; opacity: 1; border: none; width: 60px;'>    </div></div></div>";
          });
          requests.sent.forEach((element) => {
            
            document.querySelector(".reqinv").innerHTML +=
              "<div class='row reqinvrow'><div class='col-12'>    <div class='row'>        <div class='col-12'>            <nbw>You</nbw> have requested to become a part of <nbw>" +
              element.team.name +
              ".</nbw>        </div>    </div>    <div class='row justify-content-end' style='padding-top: 16px;'>        <input id=" +
              element.req +
              " name='reject' type='submit' value='DELETE' onclick='deletereq(event.target.id)'            style='color: #E7EFEF; opacity: 1; border: none; width: 60px;'>    </div></div></div>";
          });
          loadingDiv.style.visibility = "hidden";
        })
        .catch((error) => {
          console.error("Error:", error);
          loadingDiv.style.visibility = "hidden";
          if (error.response.status == 404) {
            document.querySelector(".reqinv").innerHTML =
              "<div class='reqinv container-fluid'><div class='row reqinvrow'><div class='col-12 text-center' style='font-size: 18px;'>    You don't have any notifications right now!</div></div></div>";
          }
        });
    });
}
function getInvites() {
  loadingDiv.style.visibility = "visible";
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      axios(`${url}/invites/myInvites`, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      })
        .then((response) => {
          requests = response.data;
          
          document.querySelector(".reqinv").innerHTML = "";
          requests.received.forEach((element) => {
            
            document.querySelector(".reqinv").innerHTML +=
              "<div class='row reqinvrow'><div class='col-12'>    <div class='row'>        <div class='col-12'>            <nbw>" +
              element.leader.name +
              "</nbw> has requested you to become a part of <nbw>" +
              element.team.name +
              ".</nbw>        </div>    </div>    <div class='row justify-content-end' style='padding-top: 16px;'>        <input id=" +
              element.inv +
              " class=' delete btn btn-success' name='accept' type='submit' value='ACCEPT' onclick='acceptinv(event.target.id)'            style='color: #fff; opacity: 1;'>        <input id=" +
              element.inv +
              " name='reject' type='submit' value='REJECT' onclick='rejectinv(event.target.id)'            style='color: #E7EFEF; opacity: 1; border: none; width: 60px;'>    </div></div></div>";
          });
          requests.sent.forEach((element) => {
            
            document.querySelector(".reqinv").innerHTML +=
              "<div class='row reqinvrow'><div class='col-12'>    <div class='row'>        <div class='col-12'>            <nbw>You</nbw> have invited <nbw>" +
              element.participant.name +
              "</nbw> to join the team <nbw>" +
              element.team.name +
              ".</nbw>        </div>    </div>    <div class='row justify-content-end' style='padding-top: 16px;'>        <input id=" +
              element.inv +
              " name='reject' type='submit' value='DELETE' onclick='deleteinv(event.target.id)'            style='color: #E7EFEF; opacity: 1; border: none; width: 60px;'>    </div></div></div>";
          });
          loadingDiv.style.visibility = "hidden";
        })
        .catch((error) => {
          console.error("Error:", error);
          loadingDiv.style.visibility = "hidden";
          if (error.response.status == 404) {
            document.querySelector(".reqinv").innerHTML =
              "<div class='reqinv container-fluid'><div class='row reqinvrow'><div class='col-12 text-center' style='font-size: 18px;'>    You don't have any notifications right now!</div></div></div>";
          }
        });
    });
}

document.querySelector("#requests").addEventListener("click", () => {
  if (
    document
      .querySelector("#requests")
      .classList.contains("notification-type-inactive")
  ) {
    document
      .querySelector("#requests")
      .classList.remove("notification-type-inactive");
    document
      .querySelector("#requests")
      .classList.add("notification-type-active");
    document
      .querySelector("#invites")
      .classList.remove("notification-type-active");
    document
      .querySelector("#invites")
      .classList.add("notification-type-inactive");
  }
  document.querySelector(".reqinv").innerHTML = "";

  getRequests();
});
document.querySelector("#invites").addEventListener("click", () => {
  if (
    document
      .querySelector("#invites")
      .classList.contains("notification-type-inactive")
  ) {
    document
      .querySelector("#invites")
      .classList.remove("notification-type-inactive");
    document
      .querySelector("#invites")
      .classList.add("notification-type-active");
    document
      .querySelector("#requests")
      .classList.remove("notification-type-active");
    document
      .querySelector("#requests")
      .classList.add("notification-type-inactive");
  }

  document.querySelector(".reqinv").innerHTML = "";
  getInvites();
});

async function acceptreq(id) {
  await firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
    });
  var response = await axios.post(
    `${url}/requests/requestStatus/accepted/${id}`,
    {},
    {
      headers: {
        Authorization: "Bearer " + auth,
      },
    }
  );

  var accepted = await response.data;

  document.querySelector(".reqinv").innerHTML = "";

  getRequests();
}

async function rejectreq(id) {
  await firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
    });
  var response = await axios.post(
    `${url}/requests/requestStatus/rejected/${id}`,
    {},
    {
      headers: {
        Authorization: "Bearer " + auth,
      },
    }
  );

  var deleted = await response.data;
  document.querySelector(".reqinv").innerHTML = "";
  getRequests();
}
async function deletereq(id) {
  await firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
    });
  var response = await axios.delete(`${url}/requests/${id}`, {
    headers: {
      Authorization: "Bearer " + auth,
    },
  });

  var deleted = await response.data;
  document.querySelector(".reqinv").innerHTML = "";
  getRequests();
}
async function acceptinv(id) {
  await firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
    });
  var response = await axios.post(
    `${url}/invites/inviteStatus/accepted/${id}`,
    {},
    {
      headers: {
        Authorization: "Bearer " + auth,
      },
    }
  );

  var accepted = await response.data;
  document.querySelector(".reqinv").innerHTML = "";
  getInvites();
}
async function rejectinv(id) {
  await firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
    });
  var response = await axios.post(
    `${url}/invites/inviteStatus/rejected/${id}`,
    {},
    {
      headers: {
        Authorization: "Bearer " + auth,
      },
    }
  );

  var deleted = await response.data;
  document.querySelector(".reqinv").innerHTML = "";
  getInvites();
}
async function deleteinv(id) {
  await firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
    });
  var response = await axios.delete(`${url}/invites/${id}`, {
    headers: {
      Authorization: "Bearer " + auth,
    },
  });

  var deleted = await response.data;
  document.querySelector(".reqinv").innerHTML = "";
  getInvites();
}

function logout() {
  count = 1;
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}
