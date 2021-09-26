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
          document.querySelector("#projname").innerHTML = project.name;
          document.querySelector("#name").value = project.name;
          document.querySelector("#git").value = project.code;
          document.querySelector("#design").value = project.design;
          document.querySelector("#personal_website").value =
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

function submitform() {
  let flag = 0;
  let projname = document.getElementById("name").value;
  let git = document.getElementById("git").value;
  let design = document.getElementById("design").value;
  let demo = document.getElementById("personal_website").value;
  let bio = document.getElementById("bio").value;
  if (bio.trim() == "") {
    document.getElementById("error_bio").style.visibility = "visible";
    flag = 1;
  }
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      user.getIdToken().then(function (idToken) {
        auth = idToken;
        if (flag == 0) {
          axios
            .patch(
              `${url}/projects/update/${window.location.search.split("?")[1]}`,
              {
                name: projname,
                code: git,
                design: design,
                demonstration: demo,
                description: bio,
              },
              {
                headers: {
                  Authorization: "Bearer " + auth,
                },
              }
            )
            .then((response) => {
              console.log(response);
              swal(
                "SUCCESS!!",
                "Project has been updated successfully",
                "success"
              );
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      });
    } else {
      // User is signed out
    }
  });
}

function deleteProject() {
  loadingDiv.style.visibility = "visible";
  firebase
    .auth()
    .currentUser.getIdToken()
    .then(async (id) => {
      auth = id;
      swal({
        title: "Are you sure?",
        text: "Do you want to delete your project?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios
            .delete(
              `${url}/projects/delete/${window.location.search.split("?")[1]}`,
              {
                headers: {
                  Authorization: "Bearer " + auth,
                },
              }
            )
            .then((response) => {
              console.log(response.data);
              swal("Poof! Your project has been deleted!", {
                icon: "success",
              }).then(() => {
                loadingDiv.style.visibility = "hidden";
              });
            })
            .catch((error) => console.error("Error: " + error));
        } else {
          swal("Your project is safe!").then(() => {
            loadingDiv.style.visibility = "hidden";
          });
        }
      });
    });
}
