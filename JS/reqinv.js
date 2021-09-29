var login_count = 0;
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
          if (error.response.status == 400) {
            swal(
              "Warning!!",
              "Some unknown error occured, please try again.",
              "warning"
            );
          }
        });
    });
  } else {
    // User is signed out
    if (login_count != 1) {
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
  try {
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
  } catch (error) {
    if (error.response.status == 409) {
      swal(
        "Warning!!",
        "That participant is already going to the same hack, this request cannot be accepted.",
        "warning"
      );
    }
    if (error.response.status == 400) {
      swal(
        "Warning!!",
        "Some unknown error occured, please try again.",
        "warning"
      );
    }
    if (error.response.status == 404) {
      swal("Warning!!", "Not found.", "warning");
    }
  }

  document.querySelector(".reqinv").innerHTML = "";

  getRequests();
}

async function rejectreq(id) {
  try {
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
  } catch (error) {
    if (error.response.status == 409) {
      swal(
        "Warning!!",
        "You are already going to the same hack. This invite cannot be accepted.",
        "warning"
      );
    }
    if (error.response.status == 400) {
      swal(
        "Warning!!",
        "Some unknown error occured, please try again.",
        "warning"
      );
    }
    if (error.response.status == 404) {
      swal("Warning!!", "Not found.", "warning");
    }
  }
  document.querySelector(".reqinv").innerHTML = "";
  getRequests();
}
async function deletereq(id) {
  try {
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
  } catch (error) {
    console.error(error);
    if (error.response.status == 401) {
      swal("WARNING!!", "Unauthorised", "warning");
    }
    if (error.response.status == 400) {
      swal(
        "Warning!!",
        "Some unknown error occured, please try again.",
        "warning"
      );
    }
  }
  document.querySelector(".reqinv").innerHTML = "";
  getRequests();
}
async function acceptinv(id) {
  try {
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
  } catch (error) {
    if (error.response.status == 409) {
      swal(
        "Warning!!",
        "You are already going to the same hack. This invite cannot be accepted.",
        "warning"
      );
    }
    if (error.response.status == 400) {
      swal(
        "Warning!!",
        "Some unknown error occured, please try again.",
        "warning"
      );
    }
    if (error.response.status == 404) {
      swal("Warning!!", "Not found.", "warning");
    }
  }
  document.querySelector(".reqinv").innerHTML = "";
  getInvites();
}
async function rejectinv(id) {
  try {
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
  } catch (error) {
    if (error.response.status == 409) {
      swal(
        "Warning!!",
        "You are already going to the same hack. This invite cannot be accepted.",
        "warning"
      );
    }
    if (error.response.status == 400) {
      swal(
        "Warning!!",
        "Some unknown error occured, please try again.",
        "warning"
      );
    }
    if (error.response.status == 404) {
      swal("Warning!!", "Not found.", "warning");
    }
  }
  document.querySelector(".reqinv").innerHTML = "";
  getInvites();
}
async function deleteinv(id) {
  try {
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
  } catch (error) {
    if (error.response.status == 400) {
      swal(
        "Warning!!",
        "Some unknown error occured, please try again.",
        "warning"
      );
    }
    if (error.response.status == 401) {
      swal("Warning!!", "Not authorized", "warning");
    }
  }
  document.querySelector(".reqinv").innerHTML = "";
  getInvites();
}

function logout() {
  login_count = 1;
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
