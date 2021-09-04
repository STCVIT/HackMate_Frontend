const loadingDiv = document.getElementById('loading');
$(document).ready(function () {
  $("#nav").load("../Assets/Header/headero.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});

var user;

var logo;

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    user.getIdToken().then(function (idToken) {
      console.log(idToken)
      auth = idToken
      axios(`${url}/organiser/login`, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      })
        .then((response) => {
          user = response.data;
          document.querySelector(".photo").setAttribute("src", user.logo)
          document.myform.name.value = user.name;
          document.myform.pno.value = user.phone;
          document.myform.uni.value = user.college;
          document.querySelector(".email").innerHTML = user.email;
          document.myform.website.value = user.website;
          console.log(user);
          loadingDiv.style.visibility = 'hidden';
        })
        .catch((error) => console.error("Error: " + error));
    })
  } else {
    // User is signed out
    console.log("I'm signed out!")
  }
});


function deleteacc() {

  firebase.auth().currentUser.getIdToken().then(async (id) => {
    auth = id
    axios
      .delete(`${url}/organiser/deleteProfile`, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.error("Error: " + error));

    window.location = "../";

  })
}

function updateacc() {


  firebase.auth().currentUser.getIdToken().then(async (id) => {
    auth = id

    axios
      .patch(
        `${url}/organiser/updateProfile`,
        {
          name: document.myform.name.value,
          phone: document.myform.pno.value,
          college: document.myform.uni.value,
          website: document.myform.website.value
        },
        {
          headers: {
            Authorization: "Bearer " + auth,
          },
        }
      )
      .then((response) => {
        console.log("Success:", response.data);
        window.location = "";
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  })
}


document
  .querySelector("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    
  });

async function uploadBlob(file) {
  console.log("Testing");
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

        logo = await downloadURL;


        firebase.auth().currentUser.getIdToken().then(async (id)=>{
          auth = await id
      })

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
        console.log("Success:", response.data);
        swal("SUCCESS!!", "File uploaded successfully", "success");
        document.querySelector(".swal-button--confirm").addEventListener("click", ()=> {
          window.location = "";
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
    uploadBlob(document.getElementById("image_uploads").files[0]);
  });