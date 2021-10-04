$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});
const loadingDiv = document.getElementById("loading");

if (window.location.search.split("?")[1] == undefined) {
  swal("Not Found!", "Hack doesn't exist", "warning").then(() => {
    window.location.href = "./viewhackathon.html";
  });
}
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    user.getIdToken().then(function (idToken) {
      auth = idToken;
      axios(`${url}/getHacks/${window.location.search.split("?")[1]}`, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      })
        .then((response) => {
          hack = response.data;

          document.querySelector(".parent").innerHTML =
            "<div class='row' style='padding-top: 54px;'> <div class='col-1'></div> <div class='col-10 main'> <img src='../Assets/Images/Hack Deets Banner.svg' style='width: 81vw;' alt=''> <div class='row' style='margin: 41.89px 0 0;'> <div class='col-1'></div> <div class='col-lg-4 col-12 justify-content-center text-center'> <img src='" +
            hack.poster +
            "' style='width: 200px;height: 200px;' alt=''> </div> <div class='col-lg-6 col-12 pt-lg-0 pt-3'> <div class='nbw text-lg-start text-center  '>" +
            hack.name +
            " <a target='_blank' href='" +
            hack.website +
            "'><img src='../Assets/Images/Attachment.svg' alt=''></a> <img class='mode_of_conduct' src='../Assets/Images/" +
            hack.mode_of_conduct +
            ".svg'> </div> <div class='row' style='margin-top: 25.91px;'> <div class='display1 col-3'> <nbgre>Begins:</nbgre> <div class='nbwsd' style='padding-bottom: 5.65px;'>" +
            //hack.start.split("T")[0] +
            new Date(hack.start.split("T")[0]).toString().split(" ")[2] +
            " " +
            new Date(hack.start.split("T")[0]).toString().split(" ")[1] +
            " " +
            new Date(hack.start.split("T")[0]).toString().split(" ")[3] +
            " " +
            "<br> </div> <nbgre>Ends:</nbgre> <div class='nbwsd'>" +
            //hack.end.split("T")[0] +
            new Date(hack.end.split("T")[0]).toString().split(" ")[2] +
            " " +
            new Date(hack.end.split("T")[0]).toString().split(" ")[1] +
            " " +
            new Date(hack.end.split("T")[0]).toString().split(" ")[3] +
            " " +
            "</div> </div> <div class='display2 col-6'> <nbgre>Begins:</nbgre> <div class='nbwsd'>" +
            new Date(hack.start.split("T")[0]).toString().split(" ")[2] +
            " " +
            new Date(hack.start.split("T")[0]).toString().split(" ")[1] +
            " " +
            new Date(hack.start.split("T")[0]).toString().split(" ")[3] +
            " " +
            "</div> </div> <div class='display2 col-6'> <nbgre>Ends:</nbgre> <div class='nbwsd'>" +
            new Date(hack.end.split("T")[0]).toString().split(" ")[2] +
            " " +
            new Date(hack.end.split("T")[0]).toString().split(" ")[1] +
            " " +
            new Date(hack.end.split("T")[0]).toString().split(" ")[3] +
            " " +
            "</div> </div> <div class='display1 col-3'> <nbgre>Prize Pool(₹):</nbgre> <div class='nbws'>" +
            hack.prize_pool +
            "</div> </div> <div class='display1 col-3'> <nbgre>Team Size:</nbgre> <div class='nbws'> Min: " +
            hack.min_team_size +
            " Member<br> Max: " +
            hack.max_team_size +
            " Members </div> </div> <div class='display1 col-3'> <nbgre>Venue:</nbgre> <div class='nbws'>" +
            hack.venue +
            "</div> </div> <div class='display2 col-4 pt-3'> <nbgre>Prize Pool(₹):</nbgre> <div class='nbws'>" +
            hack.prize_pool +
            "</div> </div> <div class='display2 col-5 pt-3'> <nbgre>Team Size:</nbgre> <div class='nbws2'> Min: " +
            hack.min_team_size +
            " Member<br> Max: " +
            hack.max_team_size +
            " Members </div> </div> <div class='display2 col-3 pt-3'> <nbgre>Venue:</nbgre> <div class='nbws'>" +
            hack.venue +
            "</div> </div> </div> </div> <div class='col-1'></div> </div> <div class='row about'> <div class='col-lg-1'></div> <div class='col-10'> <nbgre> About: </nbgre> <div class='nbwsb'>" +
            hack.description +
            "</div> </div> </div> </div> <div class='col-1'></div> </div>";

          document.querySelector(".child").innerHTML =
            "<div class='row justify-content-lg-between justify-content-evenly' style='padding-left: 8.333%; padding-right: 8.3333%;'>  <div class='card'> <div class='card-body justify-content-center text-center'> <div class='gray' style='height: 252px; background: #23303D;'><img src='../Assets/Images/Join Team.svg' style='width:294px;background: center;margin-top: 40px;' alt=''></div> <a class=' btns btn btn-success' href='./searchforteamswhack.html?" +
            hack._id +
            "' role='button' style='margin-top: 34px;'>Join Team</a> </div> </div> <div class='card'> <div class='card-body justify-content-center text-center'> <div class='gray' style='height: 252px; background: #23303D;'><img src='../Assets/Images/Create Team.svg' style='width:294px;background: center;margin-top: 31px;' alt=''></div> <a class=' btns btn btn-success' href='./createteamwhackwteam.html?" +
            hack._id +
            "' role='button' style='margin-top: 34px;'>Create Team</a> </div> </div> <div class='card'> <div class='card-body justify-content-center text-center'> <div class='gray' style='height: 252px; background: #23303D;'><img src='../Assets/Images/Add From Existing.svg' style='width:233px;background: center;margin-top: 10px;' alt=''></div><a class=' btns btn btn-success' href='./addfromexisting.html?" +
            hack._id +
            "' role='button' style='margin-top: 34px;'>Add from Existing</a> </div> </div> </div>";
          loadingDiv.style.visibility = "hidden";
        })
        .catch((error) => {
          console.error("Error:", error);
          if (error.response.status == 400) {
            swal(
              "Warning!!",
              "Some unknown error occured, please try again.",
              "warning"
            );
          }
          if (error.response.status == 404) {
            swal("Not Found!", "Hack doesn't exist", "warning").then(() => {
              window.location.href = "./viewhackathon.html";
            });
          }
        });
    });
  } else {
    // User is signed out
  }
});
