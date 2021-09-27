const loadingDiv = document.getElementById('loading');
loadingDiv.style.visibility = 'hidden';
document
  .querySelector("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); 
    document.onload = loadingDiv.style.visibility = 'visible';
    var par_user;
    firebase.auth().onAuthStateChanged((user) => {
      par_user = user
      const email = document.getElementById('user_email').value;

      const oldPassword = document.getElementById('login_pass1').value;
  
      var credentials = firebase.auth.EmailAuthProvider.credential(email, oldPassword);
  
      if(email.trim() == ""){
          swal("WARNING!!", "Email is left empty!!", "warning");
      }
  
      else if(oldPassword == ""){
          swal("WARNING!!", "Old Password is left empty!!", "warning");
      }
      par_user.reauthenticateWithCredential(credentials)
      .then(() => {
        // User re-authenticated.
        const newPassword = document.getElementById('login_pass2').value;
    
        par_user.updatePassword(newPassword).then(() => {
            // Update successful.
            swal("SUCCESS!!", "New Password set!!", "success").then(() => {
              window.location.assign('./MyProfile_userView.html')
            })
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
    })
  });