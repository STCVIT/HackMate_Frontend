const loadingDiv = document.getElementById("loading");
$(document).ready(function () {
  $("#nav").load("../Assets/Header/headero.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});

var user;

var logo;

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    user.getIdToken().then(function (idToken) {
      auth = idToken;
      axios(`${url}/organiser/login`, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      })
        .then((response) => {
          user = response.data;
          document.querySelector(".photo").setAttribute("src", user.logo);
          document.myform.name.value = user.name;
          document.myform.pno.value = user.phone;
          document.myform.uni.value = user.college;
          document.querySelector(".email").innerHTML = user.email;
          document.myform.website.value = user.website;

          loadingDiv.style.visibility = "hidden";
        })
        .catch((error) => console.error("Error: " + error));
    });
  } else {
    // User is signed out
  }
});

function deleteacc() {
  loadingDiv.style.visibility = "visible";
  firebase
    .auth()
    .currentUser.getIdToken()
    .then(async (id) => {
      auth = id;
      swal({
        title: "Are you sure?",
        text: "Do you want to delete your profile?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios
            .delete(`${url}/organiser/deleteProfile`, {
              headers: {
                Authorization: "Bearer " + auth,
              },
            })
            .then((response) => {
              swal("Poof! Your profile has been deleted!", {
                icon: "success",
              });
              window.location.href = "../"
            })
            .catch((error) => console.error("Error: " + error));
        } else {
          swal("Your profile is safe!");
        }
      });
    }).catch((error) => {
      if(error.response.status == 417)
      {
        swal("Warning!!", "Please enter all the required fields.", "warning");
      }
      if(error.response.status == 400)
      {
        swal("Warning!!", "Some unknown error occured, please try again.", "warning");
      }
    });
}

function updateacc() {
  loadingDiv.style.visibility = "visible";
  firebase
    .auth()
    .currentUser.getIdToken()
    .then(async (id) => {
      auth = id;

      axios
        .patch(
          `${url}/organiser/updateProfile`,
          {
            name: document.myform.name.value,
            phone: document.myform.pno.value,
            college: document.myform.uni.value,
            website: document.myform.website.value,
          },
          {
            headers: {
              Authorization: "Bearer " + auth,
            },
          }
        )
        .then((response) => {
          window.location = "";
        })
        .catch((error) => {
          console.error("Error:", error);
          if(error.response.status == 403)
          {
            swal("Warning!!", "Some of the fields you are trying to update aren't mutable.", "warning");
          }
          if(error.response.status == 400)
          {
            swal("Warning!!", "Some unknown error occured, please try again.", "warning");
          }
          if(error.response.status == 417)
          {
            swal("Warning!!", "Please enter all the required fields.", "warning");
          }
        });
    });
}

document
  .querySelector("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
  });

async function uploadBlob(file) {
  const ref = firebase
    .storage()
    .ref("/Organisers/Profile/" + document.myform.name.value);

  var uploadTask = ref.put(file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED:
          break;
        case firebase.storage.TaskState.RUNNING:
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    async () => {
      uploadTask.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
        logo = await downloadURL;

        firebase
          .auth()
          .currentUser.getIdToken()
          .then(async (id) => {
            auth = await id;
          });

        axios
          .patch(
            `${url}/organiser/updateProfile`,
            {
              logo: logo,
            },
            {
              headers: {
                Authorization: "Bearer " + auth,
              },
            }
          )
          .then((response) => {
            swal("SUCCESS!!", "File uploaded successfully", "success");
            document
              .querySelector(".swal-button--confirm")
              .addEventListener("click", () => {
                window.location = "";
              });
          })
          .catch((error) => {
            console.error("Error:", error);
            if(error.response.status == 400)
            {
              swal("Warning!!", "Some unknown error occured, please try again.", "warning");
            }
            if(error.response.status == 417)
            {
              swal("Warning!!", "Please enter all the required fields.", "warning");
            }
            if(error.response.status == 403)
            {
              swal("Warning!!", "Some of the fields you are trying to update are immutable.", "warning");
            }
          });
      });
    }
  );
}

document
  .querySelector("#image_uploads")
  .addEventListener("change", function () {
    uploadBlob(document.getElementById("image_uploads").files[0]);
  });
