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

const form=document.getElementById("form");
form.addEventListener('submit',(e)=>{
    (e).preventDefault();
});

var firebaseConfig = {
    apiKey: "AIzaSyBoUb0hvHl_U8gRkz8ZZkrSSQSvxvQdAQM",
    authDomain: "hackportal-450d0.firebaseapp.com",
    projectId: "hackportal-450d0",
    storageBucket: "hackportal-450d0.appspot.com",
    messagingSenderId: "770962135087",
    appId: "1:770962135087:web:3904056387ded9b7420eda"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function signup(){
    const email=document.getElementById('user_email').value;
    const password=document.getElementById('user_pass1').value;
    const confirmpwd=document.getElementById('user_pass2').value;

    console.log(email);
    console.log(password);
    console.log(confirmpwd);
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(({user}) => {
    // Signed in 
    user.getIdToken().then(function(idToken){
        console.log(idToken);
        })
      user.sendEmailVerification().then(function() {
        console.log('Email has been sent!');
        })
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
};