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
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          //console.log("Upload is paused");
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          //console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    async () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
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
            window.location.assign("./orghackprofile.html?"+response.data._id)
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

// fetch(`${url}/organiser/createHack`, {

//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + auth,
//   },
//   body: JSON.stringify({
//     name: "Brew",
//     venue: "VIT",
//     start: "2021-07-01",
//     end: "2021-07-30",
//     poster: "aGV5",
//     max_team_size: 4,
//     mode_of_conduct:"Offline",
//     prize_pool:100000,
//     description:"Testing 101",
//     website:"google.com"
//   }),
// }).then((response)=>response.json())
//   .then((data) => {
//     console.log("Success:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// axios(`${url}/organiser/createHack`, {

//   method: "POST",
//   headers: {
//     Authorization: "Bearer " + auth,
//   },
//   data: {
//     name: "Brew",
//     venue: "VIT",
//     start: "2021-07-01",
//     end: "2021-07-30",
//     poster: "aGV5",
//     max_team_size: 4,
//     mode_of_conduct:"Offline",
//     prize_pool:100000,
//     description:"Testing 101",
//     website:"google.com"
//   },
// })
//   .then((data) => {
//     console.log("Success:", data.data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// axios.post(`${url}/organiser/createHack`,{
//     name: "Brew",
//     venue: "VIT",
//     start: "2021-07-01",
//     end: "2021-07-30",
//     poster: "aGV5",
//     max_team_size: 4,
//     mode_of_conduct:"Offline",
//     prize_pool:100000,
//     description:"Testing 101",
//     website:"google.com"},
//  {
// headers: {
//     Authorization: "Bearer " + auth,
//   },
// })
//   .then((data) => {
//     console.log("Success:", data.data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
