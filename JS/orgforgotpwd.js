function forgot() {
    const email = document.getElementById('login_email').value;
    console.log(email);
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            // Password reset email sent!
            // ..
            alert("Password mail set was sent!!");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);

            if (errorCode == "auth/user-not-found") {
                swal("WARNING!!", "No Account!!", "warning");
            }
            // ..
        });
}