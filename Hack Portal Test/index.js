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
    const email=document.getElementById('usp').value;
    const password=document.getElementById('pp').value;

    console.log(email);
    console.log(password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(({user}) => {
    // Signed in 
    user.getIdToken().then(function(idToken){
        console.log(idToken)
        })
      user.sendEmailVerification().then(function() {
        console.log('Email has been sent!')
        })
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  };

  function signin(){
    const email=document.getElementById('usn').value;
    const password=document.getElementById('pn').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then(({user}) => {
    // Signed in 
    console.log("Signed in")
    user.getIdToken().then(function(idToken){
        console.log(idToken)
        })
    })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  };