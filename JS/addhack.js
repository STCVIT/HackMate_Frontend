const authentication = firebase.auth();
var poster;
const loadingDiv = document.getElementById("loading");
document.onload = loadingDiv.style.visibility = "hidden";
$(document).ready(function () {
  $("#nav").load("../Assets/Header/headero.txt");
});
let objectURL;
let uploadedFile;
document
  .querySelector("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    if (
      document.myform.name.value.trim() == "" ||
      document.myform.venue.value.trim() == "" ||
      document.myform.moc.value.trim() == "" ||
      document.myform.website.value.trim() == "" ||
      document.myform.about.value.trim() == "" ||
      document.myform.start.value.trim() == "" ||
      document.myform.end.value.trim() == "" ||
      document.myform.maxts.value.trim() == "" ||
      document.myform.mints.value.trim() == "" ||
      uploadedFile == undefined
    ) {
      swal("Error!", "Please fill in all the required fields", "warning");
    } else {
      if (
        document.myform.start.value.trim() > document.myform.end.value.trim()
      ) {
        swal(
          "Error!",
          "Start date cannot be greater than end date.",
          "warning"
        );
      } else if (
        document.myform.mints.value.trim() > document.myform.maxts.value.trim()
      ) {
        swal(
          "Error!",
          "Minimum Team Size cannot be greater than Maximum Team Size.",
          "warning"
        );
      } else if (new Date(document.myform.end.value) < new Date()) {
        swal("Error!", "End date can't be before current date.", "warning");
      } else {
        uploadBlob(uploadedFile);
      }
    }
  });

async function uploadBlob(file) {
  document.onload = loadingDiv.style.visibility = "visible";
  const ref = firebase
    .storage()
    .ref("/Organisers/Hacks/" + document.myform.name.value);

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
        poster = await downloadURL;
        var name = document.myform.name.value;
        var venue = document.myform.venue.value;
        var moc = document.myform.moc.value;
        var website = document.myform.website.value;
        var about = document.myform.about.value;
        var start = new Date(
          document.myform.start.value.split("T")[0] +
            " " +
            document.myform.start.value.split("T")[1] +
            " GMT+05:30"
        );
        var end = new Date(
          document.myform.end.value.split("T")[0] +
            " " +
            document.myform.end.value.split("T")[1] +
            " GMT+05:30"
        );
        var mints = document.myform.mints.value;
        var maxts = document.myform.maxts.value;
        var prizes = document.myform.prizes.value;

        firebase
          .auth()
          .currentUser.getIdToken()
          .then(async (id) => {
            auth = await id;
          });
        axios
          .post(
            `${url}/organiser/createHack`,
            {
              name: name,
              venue: venue,
              start: start,
              end: end,
              poster: poster,
              min_team_size: mints,
              max_team_size: maxts,
              mode_of_conduct: moc,
              prize_pool: prizes,
              description: about,
              website: website,
            },
            {
              headers: {
                Authorization: "Bearer " + auth,
              },
            }
          )
          .then((response) => {
            document.onload = loadingDiv.style.visibility = "hidden";
            swal(
              "SUCCESS!!",
              "Your request has been submitted successfully",
              "success"
            );
            document
              .querySelector(".swal-button--confirm")
              .addEventListener("click", () => {
                window.location.assign(
                  "./orghackprofile.html?" + response.data._id
                );
              });
          })
          .catch((error) => {
            console.error("Error:", error);
            if (error.response.status == 406) {
              swal(
                "Error!",
                "Min team size cannot be greater than max team size",
                "warning"
              );
            }
            if (error.response.status == 407) {
              swal("Error!", "Start date cannot be after end date", "warning");
            }
            if (error.response.status == 417) {
              swal(
                "Warning!!",
                "Please enter all the required fields.",
                "warning"
              );
            }
            if (error.response.status == 400) {
              swal(
                "Warning!!",
                "Some unknown error occured, please try again.",
                "warning"
              );
            }
          });
      });
    }
  );
}

document
  .querySelector("#image_uploads")
  .addEventListener("change", function () {
    uploadedFile = document.getElementById("image_uploads").files[0];
    objectURL = URL.createObjectURL(
      document.getElementById("image_uploads").files[0]
    );
    document.querySelector("#uploaded_image").innerHTML =
      "<img src='../Assets/Images/EDIT.svg' alt=''>";
    document.querySelector(".image_uploads").innerHTML =
      "<div class='poster' style='padding-top: 6px;'><img style='width: 200px; height: 200px;' src='" +
      objectURL +
      "'></div>";
  });
