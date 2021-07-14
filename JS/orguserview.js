$(document).ready(function () {
  $("#nav").load("../Assets/Header/headero.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});

var user;

axios(`${url}/organiser/login`, {
  headers: {
    Authorization: "Bearer " + auth,
  },
})
  .then((response) => {
    user = response.data;
    document.myform.name.value = user.name;
    document.querySelector(".pno").innerHTML = user.phone;
    document.myform.uni.value = user.college;
    document.querySelector(".email").innerHTML = user.email;
    document.querySelector(".website").innerHTML = user.website;
    console.log(user);
  })
  .catch((error) => console.error("Error: " + error));

function deleteacc() {
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

  window.location = "";
}

function updateacc() {

    axios.patch(`${url}/organiser/updateProfile`,
        {
          name: document.myform.name.value,
          college: document.myform.uni.value,
        },
        {
          headers: {
            Authorization: "Bearer " + auth,
          },
        }
      )
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
}