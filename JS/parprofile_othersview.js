$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerl.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
});

  var user;
  randomId = localStorage.getItem("participant");
  axios(`${url}/participant/get/${randomId}`, {
      headers: {
          Authorization: "Bearer " + auth,
      },
  })
   .then((response) => {
       user = response.data;
       console.log(user);
       document.querySelector(".caption h2").innerHTML = toTitleCase(user.participant.name);
       document.querySelector("#name").innerHTML = user.participant.name;
       document.querySelector("#username").innerHTML = user.participant.username;
       document.querySelector("#email").innerHTML = user.participant.email;
       document.querySelector("#college").innerHTML = user.participant.college;
       document.querySelector("#git").innerHTML = user.participant.github;
       document.querySelector("#linkedln").innerHTML = user.participant.linkedIn;
       document.querySelector("#personal_website").innerHTML = user.participant.website;
       document.querySelector("#year").innerHTML = user.participant.graduation_year;
       document.querySelector("#bio").innerHTML = user.participant.bio;

       let body = document.getElementById("card-body");
       let yourHTML = "<h5 class='card-title'>Skills</h5>";
       let len = user.skills.length;
       for(let i=0;i<len;i++){
           yourHTML += "<p class='fill'><input class='form-check-input' type='checkbox' value='' id='flexCheckDefault' checked><label class='check-label' for='flexCheckDefault'>"+
           user.skills[i].skill
           yourHTML += "</label></p>"
        }
        
        body.innerHTML= yourHTML;
   })
   .catch((error) => console.error("Error: " + error));

   var user;
   var user_id;
axios(`${url}/participant/login`, {
    headers: {
        Authorization: "Bearer " + auth,
    },
})
.then((response) => {
    user = response.data;
    user_id = user._id;
})
.catch((error) => console.error("Error: " + error));

let review = document.getElementById("review");
function add_review() {
    axios 
        .post(
          `${url}/review/postReview/${user_id}/${randomId}`,
        {
           review: review.value
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
}

function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() + ".";
      }
    );
  }

  function invite() {
    // id.innerHTML = "Ooops!";
    var participant_id = randomId;
    console.log(participant_id);
    axios
      .post(
        `${url}/invites/invite/${participant_id}/${user_id}`,
        {
          code: invite,
        },
        {
          headers: {
            Authorization: "Bearer " + auth,
          },
        }
      )
      .then((response) => {
        accepted = response.data;
        console.log(accepted);
        swal("SUCCESS!!", "Your invite has been submitted successfully", "success");
      })
      .catch(e => {
        console.log(e);
        console.log(e.response.status);
        if (e.response.status == 404) {
          swal("WARNING!!", "No Participant Found", "warning");
        }
        else if (e.response.status == 400) {
          swal("WARNING!!", "Invite has already been sent", "warning");
        }
      });
  
  }