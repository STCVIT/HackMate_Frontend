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
      axios(`${url}/projects/get/${window.location.search.split("?")[1]}`, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      })
        .then((response) => {
          project = response.data;
          document.querySelector(".caption").innerHTML = "<h1>"+project.name+"</h1>";
          document.querySelector("#git").innerHTML = project.code;
          document.querySelector("#design").innerHTML = project.design;
          document.querySelector("#personal_website").innerHTML =
            project.demonstration;
          document.querySelector("#bio").innerHTML = project.description;
          loadingDiv.style.visibility = "hidden";
        })
        .catch((error) => console.error("Error: " + error));
    });
  } else {
    // User is signed out
  }
});
