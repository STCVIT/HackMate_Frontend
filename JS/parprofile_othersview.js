$(document).ready(function () {
    $("#nav").load("../Assets/Header/headero.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
  });

  var user;
//anyone can watch but the details should be of the individual participant
  axios(`${url}/organiser/login`, {
      headers: {
          Authorization: "Bearer " + auth,
      },
  })
   .then((response) => {
       user = response.data;
       document.querySelector("#name").innerHTML = user.name;
       document.querySelector("#username").innerHTML = user.username;
       document.querySelector("#email").innerHTML = user.email;
       document.querySelector("#college").innerHTML = user.college;
       document.querySelector("#git").innerHTML = user.git;
       document.querySelector("#personal_website").innerHTML = user.website;
       document.querySelector("#year").innerHTML = user.year;
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