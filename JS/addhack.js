const authentication = firebase.auth();
var poster;

$(document).ready(function () {
  $("#nav").load("../Assets/Header/headero.txt");
});

document
  .querySelector("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    uploadBlob(document.getElementById("image_uploads").files[0]);
  });

async function uploadBlob(file) {
  console.log("Testing");
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
          console.log("Upload is paused");
          break;
        case firebase.storage.TaskState.RUNNING:
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    async () => {
      uploadTask.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
        console.log("File available at", downloadURL);

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

        firebase.auth().currentUser.getIdToken().then(async (id)=>{
          auth = await id
      })
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
            console.log("Success:", response.data);
            console.log(response.data._id);
            swal("SUCCESS!!", "Your request has been submitted successfully", "success");
            document.querySelector(".swal-button--confirm").addEventListener("click", ()=> {
              window.location.assign("./orghackprofile.html?" + response.data._id)
            })
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });
    }
  );
}

document
  .querySelector("#image_uploads")
  .addEventListener("change", function () {
    console.log("File Uploaded Locally");
  });