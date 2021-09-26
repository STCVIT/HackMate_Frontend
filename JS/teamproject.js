$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});
const loadingDiv = document.getElementById("loading");
loadingDiv.style.visibility = "visible";
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    user.getIdToken().then(function (idToken) {
      auth = idToken;
      var project;
      axios(`${url}/DN_Team/${window.location.search.split("?")[1]}`, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      })
        .then((response) => {
          project = response.data;
          document.querySelector(".caption").innerHTML =
            "<h1>" + project.team.project_name + "</h1>";
          document.querySelector("#git").innerHTML = project.team.code;
          document.querySelector("#design").innerHTML = project.team.design;
          document.querySelector("#personal_website").innerHTML =
            project.team.demonstration;
          document.querySelector("#bio").innerHTML =
            project.team.project_description;
          loadingDiv.style.visibility = "hidden";
        })
        .catch((error) => {
          console.error("Error: " + error);
          swal("Not Found!", "Project doesn't exist", "warning").then(() => {
            window.location.href = "./addproject.html";
          });
        });
    });
  } else {
    // User is signed out
  }
});
