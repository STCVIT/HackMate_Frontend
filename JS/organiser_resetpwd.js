document
  .querySelector("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    var user = await firebase.auth().currentUser;

    const email = document.getElementById('user_email').value;

    const oldPassword = document.getElementById('login_pass1').value;

    var credentials = await firebase.auth.EmailAuthProvider.credential(email, oldPassword);

    if(email.trim() == ""){
        swal("WARNING!!", "Email is left empty!!", "warning");
    }

    else if(oldPassword == ""){
        swal("WARNING!!", "Old Password is left empty!!", "warning");
    }
    user.reauthenticateWithCredential(credentials)
    .then(() => {
      // User re-authenticated.
      const newPassword = document.getElementById('login_pass2').value;
  
      user.updatePassword(newPassword).then(() => {
          // Update successful.
          swal("SUCCESS!!", "New Password set!!", "success");
          setTimeout(function(){
              // window.location.assign('./MyProfile_userView.html')
          } , 3000); 
      }).catch((error) => {
          // An error ocurred
          // ...
          var errorCode = error.code;
          var errorMessage = error.message;
  
          console.log(errorCode);
          console.log(errorMessage);
          if(errorMessage == "The password must be 6 characters long or more."){
            swal("WARNING!!", "Password length must be minimum of 6 characters!!", "warning");
          }
          else if(errorMessage == "Password should be at least 6 characters"){
            swal("WARNING!!", "Password length must be minimum of 6 characters!!", "warning");
          }
          else if(errorMessage == "The password is invalid or the user does not have a password."){
            swal("WARNING!!", "The Old Password mentioned is wrong!!", "warning");
          }
      });
    })
    .catch((error) => {
      // An error ocurred
      // ...
      var errorCode = error.code;
      var errorMessage = error.message;

      if(errorMessage == "The password is invalid or the user does not have a password."){
        swal("WARNING!!", "The Old Password mentioned is wrong!!", "warning");
      }
    });
  });
function reset() {
    var user = firebase.auth().currentUser;

    const email = document.getElementById('user_email').value;
    console.log(email);

    const oldPassword = document.getElementById('login_pass1').value;
    console.log(oldPassword);

    var credentials = firebase.auth.EmailAuthProvider.credential(email, oldPassword);
    console.log(credentials);

    if(email == ""){
        swal("WARNING!!", "Email is left empty!!", "warning");
    }

    else if(oldPassword == ""){
        swal("WARNING!!", "Old Password is left empty!!", "warning");
    }
    user.reauthenticateWithCredential(credentials)
    .then(() => {
      // User re-authenticated.
      const newPassword = document.getElementById('login_pass2').value;
      console.log(newPassword);
  
      user.updatePassword(newPassword).then(() => {
          // Update successful.
          swal("SUCCESS!!", "New Password set!!", "success");
          setTimeout(function(){
              // window.location.assign('./MyProfile_userView.html')
          } , 3000); 
      }).catch((error) => {
          // An error ocurred
          // ...
          var errorCode = error.code;
          var errorMessage = error.message;
  
          console.log(errorCode);
          console.log(errorMessage);
          if(errorMessage == "The password must be 6 characters long or more."){
            swal("WARNING!!", "Password length must be minimum of 6 characters!!", "warning");
          }
          else if(errorMessage == "Password should be at least 6 characters"){
            swal("WARNING!!", "Password length must be minimum of 6 characters!!", "warning");
          }
          else if(errorMessage == "The password is invalid or the user does not have a password."){
            swal("WARNING!!", "The Old Password mentioned is wrong!!", "warning");
          }
      });
    })
    .catch((error) => {
      // An error ocurred
      // ...
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);
      if(errorMessage == "The password is invalid or the user does not have a password."){
        swal("WARNING!!", "The Old Password mentioned is wrong!!", "warning");
      }
    });
}