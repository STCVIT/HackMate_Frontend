$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerl.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
});

  var user;
  randomId = "60f186b2b7e1c25f80f13f60";
  axios(`${url}/participant/get/${randomId}`, {
      headers: {
          Authorization: "Bearer " + auth,
      },
  })
   .then((response) => {
       user = response.data;
       console.log(user);
       document.querySelector(".caption h2").innerHTML = toTitleCase(user.name);
       document.querySelector("#name").innerHTML = user.name;
       document.querySelector("#username").innerHTML = user.username;
       document.querySelector("#email").innerHTML = user.email;
       document.querySelector("#college").innerHTML = user.college;
       document.querySelector("#git").innerHTML = user.github;
       document.querySelector("#linkedln").innerHTML = user.linkedIn;
       document.querySelector("#personal_website").innerHTML = user.website;
       document.querySelector("#year").innerHTML = user.graduation_year;
       document.querySelector("#bio").innerHTML = user.bio;
   })
   .catch((error) => console.error("Error: " + error));

/*function add_review() {
    axios 
        .add(
          `${url}/dummy`,
        {
           review: document.otherview_form.review.value
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
        console.error("Error:",error);
    });

    windows.location = "";

}*/

function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() + ".";
      }
    );
  }