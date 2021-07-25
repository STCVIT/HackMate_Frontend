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
    const minNumberofChars = 8;

    console.log(email);
    console.log(password);
    console.log(confirmpwd);

    // Password greater or equal to 8
    if(password.length < minNumberofChars){
      alert("Password should be of Minimum 8 Characters.");
    }
    // Password and confirm Password should be same
    else if(password != confirmpwd) {  
      alert("Password and Confirm Password are not same");  
      return false;  
    } 
    else {  
      alert ("Your password created successfully"); 
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(({user}) => {
            console.log('signed up!')
            user.getIdToken().then(function(idToken){
              console.log(idToken)
              fetch('https://hackportalbackend.herokuapp.com/organiser/signup',{
                method:'POST',
                headers: new Headers({
                  'Authorization': 'Bearer '+ idToken
                })
              }).then((res)=>{
                console.log(res.status)
              })
              })
            user.sendEmailVerification().then(function() {
              console.log('Email has been sent!')
              })
            })
          .catch((error) => {
            console.log(error)
          });
        }
}

const form1=document.getElementById("form1");
form1.addEventListener('submit',(e)=>{
    (e).preventDefault();
});


function signin(){
    const email=document.getElementById('login_email').value;
    const password=document.getElementById('login_pass1').value;
    // const url = 'https://hackportalbackend.herokuapp.com/';

    console.log(email);
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then(({user}) => {
    // Signed in 
    console.log("Signed in")
    user.getIdToken().then(function(idToken){
        console.log(idToken)
        
    fetch(`https://hackportalbackend.herokuapp.com/organiser/login`,{
      method:"GET",
      headers: new Headers({
          'Authorization': 'Bearer ' + idToken
        })
    }).then(response => {
      console.log(response.json());
      console.log(response.status);
      if (response.status == 404) {
        localStorage.setItem("auth", idToken);
        window.location.assign("./organiser_profile.html");
        // location.href = ""; 
    }
      else if(response.status == 200){
        localStorage.setItem("auth", idToken);
        window.location.assign("./addhack.html");
        // location.href = "";
      }
  }); 
      // .then(response => response.json())   
      // .then(json => console.log(json));
    })

  })
            .catch((error) => {
            console.log(error)
          });
}