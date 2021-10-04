const loginBtn = document.querySelector(".login-tab");
const signupBtn = document.querySelector(".signup-tab");

const loginSection = document.querySelector("#login-tab-content");
const signupSection = document.querySelector("#signup-tab-content");

signupBtn.addEventListener("click", function () {
  loginSection.classList.remove("active");
  signupSection.classList.add("active");
  document.getElementById("active1").className = "active3";
  document.getElementById("inactive1").className = "inactive4";
});

loginBtn.addEventListener("click", function () {
  signupSection.classList.remove("active");
  loginSection.classList.add("active");
  document.getElementById("inactive1").className = "active3";
  document.getElementById("active1").className = "inactive4";
});

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
          window.location.assign = "./orghack.html";
        }else if (response.status == 200) {
          window.location.assign("./viewhackathon.html");
        }
      });
    });
  } else {
    // User is signed out
  }
});

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function signup() {
  const email = document.getElementById("user_email").value;
  const password = document.getElementById("user_pass1").value;
  const confirmpwd = document.getElementById("user_pass2").value;
  const minNumberofChars = 8;

  // console.log(email);
  // console.log(password);
  // console.log(confirmpwd);

  // Password greater or equal to 8
  if (password.length < minNumberofChars) {
    alert("Password should be of Minimum 8 Characters.");
  }
  // Password and confirm Password should be same
  else if (password != confirmpwd) {
    alert("Password and Confirm Password are not same");
    return false;
  } else {
    // alert("Your password created successfully");
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        // swal("SUCCESS!!", "Your account has been created successfully", "success");
        Swal.fire({
          title: "SUCCESS!!",
          text: "Your account has been created successfully!",
          icon: "success",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("SUCCESS!!!", "Please verify your email!", "success");
          }
        });
        console.log("signed up!");
        user.getIdToken().then(function (idToken) {
          // console.log(idToken);
          fetch("https://hackportalbackend.herokuapp.com/organiser/signup", {
            method: "POST",
            headers: new Headers({
              Authorization: "Bearer " + idToken,
            }),
          }).then((res) => {
            // console.log(res.status);
          });
        });
        user.sendEmailVerification().then(function () {
          // console.log("Email has been sent!");
          // alert("Please verify your email");
          // location.reload();
        });
      })
      .catch((error) => {
        // console.log(error);
        // console.log(error.message);

        if (error.message == "The email address is badly formatted.") {
          // swal("WARNING!!", "Enter Valid Email ID", "warning");
          Swal.fire({
            title: "WARNING!!",
            text: "Enter Valid Email ID!",
            icon: "warning",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok!",
          });
        } else if (
          error.message ==
          "The email address is already in use by another account."
        ) {
          // swal("WARNING!!", "You already have an account!!", "warning");
          Swal.fire({
            title: "WARNING!!",
            text: "You already have an account!!",
            icon: "warning",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok!",
          });
        }
      });
  }
}

const form1 = document.getElementById("form1");
form1.addEventListener("submit", (e) => {
  e.preventDefault();
});

function signin() {
  const email = document.getElementById("login_email").value;
  const password = document.getElementById("login_pass1").value;
  // const url = 'https://hackportalbackend.herokuapp.com/';

  // console.log(email);
  // console.log(password);
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => {
      // Signed in
      // console.log("Signed in");
      user.getIdToken().then(function (idToken) {
        var loadingDiv = document.getElementById("loading");
        loadingDiv.style.visibility = "visible";

        fetch(`https://hackportalbackend.herokuapp.com/organiser/login`, {
          method: "GET",
          headers: new Headers({
            Authorization: "Bearer " + idToken,
          }),
        }).then((response) => {
          // console.log(response.json());
          // console.log(response.status);
          if (response.status == 404) {
            localStorage.setItem("auth", idToken);
            window.location.assign("./organiser_profile.html");
            // location.href = "";
          } else if (response.status == 401) {
            // swal("WARNING!!", "Please verify your email address!", "warning");
            Swal.fire({
              title: "WARNING!!",
              text: "Please verify your email address!",
              icon: "warning",
              showCancelButton: false,
              confirmButtonColor: "#3085d6",
              confirmButtonText: "Ok!",
            });
            loadingDiv.style.visibility = "hidden";
            user.sendEmailVerification().then(function () {
              console.log("Email has been sent!");
            });
          } else if (response.status == 403) {
            // swal("WARNING!!", "You are a participant and not an organiser!", "warning");
            Swal.fire({
              title: "WARNING!!",
              text: "You are a participant and not a organiser!",
              icon: "warning",
              showCancelButton: false,
              confirmButtonColor: "#3085d6",
              confirmButtonText: "Ok!",
            });
            loadingDiv.style.visibility = "hidden";
          } else if (response.status == 418) {
            // swal("WARNING!!", "Set Claim not happened right now!", "warning");
            Swal.fire({
              title: "WARNING!!",
              text: "Try Logging in again after some time!",
              icon: "warning",
              showCancelButton: false,
              confirmButtonColor: "#3085d6",
              confirmButtonText: "Ok!",
            });
            loadingDiv.style.visibility = "hidden";
            signins();

            function signins() {
              const email = document.getElementById("login_email").value;
              const password = document.getElementById("login_pass1").value;
              // const url = 'https://hackportalbackend.herokuapp.com/';

              // console.log(email);
              // console.log(password);

              firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(({ user }) => {
                  // Signed in
                  // console.log("Signed in");
                  user.getIdToken().then(function (idToken) {
                    fetch(
                      `https://hackportalbackend.herokuapp.com/organiser/signup`,
                      {
                        method: "POST",
                        headers: new Headers({
                          Authorization: "Bearer " + idToken,
                        }),
                      }
                    ).then((response) => {
                      // console.log(response.json());
                      // console.log(response.status);
                    });
                    // .then(response => response.json())
                    // .then(json => console.log(json));
                  });
                })
                .catch((error) => {
                  // console.log(error);
                  // console.log(error.message);
                });
            }
          } else if (response.status == 200) {
            localStorage.setItem("auth", idToken);
            window.location.assign("./orghack.html");
            // location.href = "";
          }
        });
        // .then(response => response.json())
        // .then(json => console.log(json));
      });
    })
    .catch((error) => {
      // console.log(error);
      // console.log(error.message);

      if (error.message == "The email address is badly formatted.") {
        // swal("WARNING!!", "Enter Valid Email ID!", "warning");
        Swal.fire({
          title: "WARNING!!",
          text: "Enter Valid Email ID!",
          icon: "warning",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok!",
        });
      }
      if (
        error.message ==
        "The password is invalid or the user does not have a password."
      ) {
        // swal("WARNING!!", "Enter Valid Password", "warning");
        Swal.fire({
          title: "WARNING!!",
          text: "Enter Valid Password",
          icon: "warning",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok!",
        });
      }
      if (
        error.message ==
        "There is no user record corresponding to this identifier. The user may have been deleted."
      ) {
        // swal("WARNING!!", "Please SignUp before logging in!", "warning");
        Swal.fire({
          title: "WARNING!!",
          text: "Please Sign Up before logging in!",
          icon: "warning",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok!",
        });
      }
    });
}

// function forgot(){
//   const email=document.getElementById('login_email').value;
//   firebase.auth().sendPasswordResetEmail(email)
//   .then(() => {
//     // Password reset email sent!
//     // ..
//     alert("Password mail set was sent!!");
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//   });
// }
