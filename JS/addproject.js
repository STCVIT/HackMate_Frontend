const loadingDiv = document.getElementById("loading");

$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    user.getIdToken().then(function (idToken) {
      auth = idToken;
      axios(`${url}/projects/getAll`, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      })
        .then((response) => {
          projects = response.data;
          for (var i = 0; i < projects.individualProjects.length; i++) {
            document.querySelector(".projects").innerHTML +=
              "<div class='card'><a href='./Project_Profile.html?" +
              projects.individualProjects[i]._id +
              "' style='text-decoration: none;'><div class='card-body '><nbgre>" +
              projects.individualProjects[i].name +
              "</nbgre><div class='disc'>" +
              projects.individualProjects[i].description +
              "</div></div></a></div>";
          }
          for (var i = 0; i < projects.teams.length; i++) {
            document.querySelector(".projects").innerHTML +=
              "<div class='card'><a href='./TeamAdd_Project.html?" +
              projects.teams[i]._id +
              "' style='text-decoration: none;'><div class='card-body '><nbgre>" +
              projects.teams[i].project_name +
              "</nbgre><div class='disc'>" +
              projects.teams[i].project_description +
              "</div></div></a></div>";
          }
          loadingDiv.style.visibility = "hidden";
        })
        .catch((error) => {
          console.error("Error:", error);
          if (error.response.status == 404) {
            document.querySelector(".projects").innerHTML =
              "<h2 class='text-center' style='margin-top: 82px;'>No Projects Found!</h2>";
          }
          if(error.response.status == 400)
          {
            swal("Warning!!", "Some unknown error occured, please try again.", "warning");
          }
          loadingDiv.style.visibility = "hidden";
        });
    });
  } else {
    // User is signed out
  }
});
