const loginBtn = document.querySelector('.login-tab');
const signupBtn = document.querySelector('.signup-tab');

const loginSection = document.querySelector('#login-tab-content');
const signupSection = document.querySelector('#signup-tab-content');

signupBtn.addEventListener('click', function() {
    loginSection.classList.remove('active');
    signupSection.classList.add('active');
    document.getElementById("active1").className = "active3";
    document.getElementById("inactive1").className = "inactive4";
});

loginBtn.addEventListener('click', function() {
    signupSection.classList.remove('active');
    loginSection.classList.add('active');
    document.getElementById("inactive1").className = "active3";
    document.getElementById("active1").className = "inactive4";
});


const form = document.getElementById("form");
form.addEventListener('submit', (e) => {
    (e).preventDefault();
});

function signup() {
    const email = document.getElementById('user_email').value;
    const password = document.getElementById('user_pass1').value;
    const confirmpwd = document.getElementById('user_pass2').value;
    const minNumberofChars = 8;

    console.log(email);
    console.log(password);
    console.log(confirmpwd);

    // Password greater or equal to 8
    if (password.length < minNumberofChars) {
        alert("Password should be of Minimum 8 Characters.");
    }
    // Password and confirm Password should be same
    else if (password != confirmpwd) {
        alert("Password and Confirm Password are not same");
        return false;
    } else {
        // alert ("Your password created successfully"); 
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                swal("SUCCESS!!", "Your account has been created successfully", "success");
                console.log('signed up!')
                user.getIdToken().then(function(idToken) {
                    console.log(idToken)
                    fetch('https://hackportalbackend.herokuapp.com/participant/signup', {
                        method: 'POST',
                        headers: new Headers({
                            'Authorization': 'Bearer ' + idToken
                        })
                    }).then((res) => {
                        console.log(res.status)
                    })
                })
                user.sendEmailVerification().then(function() {
                    console.log('Email has been sent!');
                    alert("Pls verify your email");
                    location.reload();
                })
            })
            .catch((error) => {
                console.log(error);
                console.log(error.message);

                if (error.message == "The email address is badly formatted.") {
                    swal("WARNING!!", "Enter Valid Email ID", "warning");
                }
            });
    }
}

const form1 = document.getElementById("form1");
form1.addEventListener('submit', (e) => {
    (e).preventDefault();
});


function signin() {
    const email = document.getElementById('login_email').value;
    const password = document.getElementById('login_pass1').value;
    // const url = 'https://hackportalbackend.herokuapp.com/';

    console.log(email);
    console.log(password);

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({ user }) => {
            // Signed in 
            console.log("Signed in")
            user.getIdToken().then(function(idToken) {
                console.log(idToken)
                var loadingDiv = document.getElementById('loading');
                loadingDiv.style.visibility = 'visible';

                fetch(`https://hackportalbackend.herokuapp.com/participant/login`, {
                    method: "GET",
                    headers: new Headers({
                        'Authorization': 'Bearer ' + idToken
                    })
                }).then(response => {
                    // console.log(response.json());
                    console.log(response.status);
                    if (response.status == 404 && typeof(Storage) !== "undefined") {
                        localStorage.setItem("auth", idToken);
                        window.location.assign("./profile.html");
                        // location.href = ""; 
                    } else if (response.status == 401) {
                        swal("WARNING!!", "Please verify your email address!", "warning");
                        loadingDiv.style.visibility = 'hidden';
                        user.sendEmailVerification().then(function() {
                            console.log('Email has been sent!');
                            alert("Pls verify your email");
                            location.reload();
                        })
                    } else if (response.status == 403) {
                        swal("WARNING!!", "You are a organiser and not a participant!", "warning");
                        loadingDiv.style.visibility = 'hidden';
                    } else if (response.status == 418) {
                        swal("WARNING!!", "Try Logging in again after some time!", "warning");
                        loadingDiv.style.visibility = 'hidden';
                        signins();

                        function signins() {
                            const email = document.getElementById('login_email').value;
                            const password = document.getElementById('login_pass1').value;
                            // const url = 'https://hackportalbackend.herokuapp.com/';

                            console.log(email);
                            console.log(password);

                            firebase.auth().signInWithEmailAndPassword(email, password)
                                .then(({ user }) => {
                                    // Signed in 
                                    console.log("Signed in")
                                    user.getIdToken().then(function(idToken) {
                                        console.log(idToken);

                                        fetch(`https://hackportalbackend.herokuapp.com/participant/signup`, {
                                            method: "POST",
                                            headers: new Headers({
                                                'Authorization': 'Bearer ' + idToken
                                            })
                                        }).then(response => {
                                            // console.log(response.json());
                                            console.log(response.status);
                                        });
                                        // .then(response => response.json())   
                                        // .then(json => console.log(json));
                                    })
                                })
                                .catch((error) => {
                                    console.log(error);
                                    console.log(error.message);
                                });
                        }
                    } else if (response.status == 200 && typeof(Storage) !== "undefined") {
                        localStorage.setItem("auth", idToken);
                        window.location.assign("./viewhackathon.html");
                        // location.href = "";
                    }
                });
                // .then(response => response.json())   
                // .then(json => console.log(json));
            })
        })
        .catch((error) => {
            console.log(error);
            console.log(error.message);

            if (error.message == "The email address is badly formatted.") {
                swal("WARNING!!", "Enter Valid Email ID!", "warning");
            }
            if (error.message == "The password is invalid or the user does not have a password.") {
                swal("WARNING!!", "Enter Valid Password", "warning");
            }
            if (error.message == "There is no user record corresponding to this identifier. The user may have been deleted.") {
                swal("WARNING!!", "Pls SignUp before logging in!", "warning");
            }
        });
}
// function forgot(){
//   const email=document.getElementById('login_email').value;
//   console.log(email);
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