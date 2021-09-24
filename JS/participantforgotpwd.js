function forgot() {
    const email = document.getElementById('login_email').value;
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            // Password reset email sent!
            // ..
            // alert("Password mail set was sent!!");
            swal("SUCCESS!!", "Password mail set was sent!!", "success");
            setTimeout(function(){
                window.location.assign('./participantlognsignup.html')
            } , 3000);   
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);

            if (errorCode == "auth/user-not-found") {
                swal("WARNING!!", "No Account!!", "warning");
            }
            else if (errorCode == "auth/invalid-email") {
                swal("WARNING!!", "Invalid Email!!", "warning");
            }
            // ..
        });
}