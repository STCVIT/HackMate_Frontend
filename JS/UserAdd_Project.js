$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});
const loadingDiv = document.getElementById('loading');
const project_form = document.getElementById("project_form");
project_form.addEventListener('submit', (e) => {
  (e).preventDefault();
});
let projname = localStorage.getItem("project_name");
document.getElementById("projname").innerHTML = toTitleCase(projname)+".";
const form = document.getElementById("form");
form.addEventListener('submit', (e) => {
  (e).preventDefault();
});
function submitform() {
  let flag = 0;
  let git = document.getElementById("git").value;
  let design = document.getElementById("design").value;
  let demo = document.getElementById("personal_website").value;
  let bio = document.getElementById("bio").value;
  if (bio == "") {
    document.getElementById("error_bio").style.visibility = "visible";
    flag = 1;
  }
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      user.getIdToken().then(function (idToken) {
        auth = idToken
        if (flag == 0) {
          console.log("megha")
          axios
            .post(`${url}/projects/create`,
              {
                name: projname,
                code: git,
                design: design,
                demonstration: demo,
                description: bio
              },
              {
                headers: {
                  Authorization: "Bearer " + auth,
                },
              }
            )
            .then((response) => {
              console.log("Success:", response.data);
              swal("SUCCESS!!", "Project has been created successfully", "success");
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      })
    }
    else {
      // User is signed out
      console.log("I'm signed out!");
    }
  });
}
 
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}
