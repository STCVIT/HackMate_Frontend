 // Your web app's Firebase configuration
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

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      user.getIdToken().then(function(idToken){
        console.log(idToken)
        auth = idToken
      })
    } else {
      // User is signed out
      console.log("I'm signed out!")
    }
  });
