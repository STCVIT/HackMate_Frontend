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