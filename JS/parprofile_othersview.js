$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerl.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
});

  var user;
  const url='https://hackportalbackend.herokuapp.com';
  randomId = "60f186b2b7e1c25f80f13f60" ;
  auth="eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc3MTBiMDE3ZmQ5YjcxMWUwMDljNmMzNmIwNzNiOGE2N2NiNjgyMTEiLCJ0eXAiOiJKV1QifQ.eyJwYXJ0aWNpcGFudCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2hhY2twb3J0YWwtNDUwZDAiLCJhdWQiOiJoYWNrcG9ydGFsLTQ1MGQwIiwiYXV0aF90aW1lIjoxNjI2NjAxNjE3LCJ1c2VyX2lkIjoib3hxeXN2bHB2VWU3dXBkcGJVaXNGS0Qyc1I5MyIsInN1YiI6Im94cXlzdmxwdlVlN3VwZHBiVWlzRktEMnNSOTMiLCJpYXQiOjE2MjY2MDE2MTcsImV4cCI6MTYyNjYwNTIxNywiZW1haWwiOiJtZWdoYW1haXRpbjI3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lZ2hhbWFpdGluMjdAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.YOauTNOCSiG9RV1ZeSwh_I2QozzH9KfdPfGnsno-TsPcRjiNufkqqDXNcZYvuGvhfWZWUgcg3-jQAaWdZJvlNLu5fYYn45zVLNpd7TPmfjO-5pUJV2r8cnkM8UWAn-waEdGAWmy73jY6o_QQsDvq9TmCiBPmLZf5vvqwm1QVDE9QoRlpJfV_r8nyTcT-GtdK7t9DzHDlRLEZnI2z2J_eCDIhEH9fLvnqFZCg8K4xFaRt-wU9hQnHrrP8SQ11qcmUT33hP4YhrK0k8c618is5pPSF0UJLnxybJF3QeC8klaiLhk8_RAN3_VdEBID7vtobv_ZsFVs12SolHyZYq9RIQg"
  axios(`${url}/participant/get/${randomId}`, {
      headers: {
          Authorization: "Bearer " + auth,
      },
  })
   .then((response) => {
       user = response.data;
       console.log(user);
       document.querySelector(".caption h2").innerHTML = toTitleCase(user.name);
       document.querySelector("#name").innerHTML = toTitleCase(user.name);
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
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }