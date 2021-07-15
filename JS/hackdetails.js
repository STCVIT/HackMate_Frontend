$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});

axios(`${url}/getHacks/${window.location.search.split("?")[1]}`, {
  headers: {
    Authorization: "Bearer " + auth,
  },
})
  .then((response) => {
    hack = response.data;
    console.log(hack);

    document.querySelector(".parent").innerHTML =
      "<div class='row' style='padding-top: 54px;'> <div class='col-1'></div> <div class='col-10 main'> <img src='../Assets/Images/Hack Deets Banner.svg' style='width: 83.333vw;' alt=''> <div class='row' style='margin: 41.89px 0 0;'> <div class='col-1'></div> <div class='col-sm-4 col-12 justify-content-center text-center'> <img src='../Assets/Images/DevSpace.svg' style='width: 25vw;' alt=''> </div> <div class='col-sm-6 col-12 text-center'> <div class='nbw'>" +
      hack.name +
      " <a href=''><img src='../Assets/Images/Attachment.svg' alt=''></a> </div> <div class='row' style='margin-top: 25.91px;'> <div class='display1 col-3'> <nbgre>Begins:</nbgre> <div class='nbwsd' style='padding-bottom: 5.65px;'>" +
      hack.start.split("T")[0] +
      "<br> </div> <nbgre>Ends:</nbgre> <div class='nbwsd'>" +
      hack.end.split("T")[0] +
      "</div> </div> <div class='display2 col-6'> <nbgre>Begins:</nbgre> <div class='nbwsd'>" +
      hack.start.split("T")[0] +
      "</div> </div> <div class='display2 col-6'> <nbgre>Ends:</nbgre> <div class='nbwsd'>" +
      hack.end.split("T")[0] +
      "</div> </div> <div class='display1 col-3'> <nbgre>Prize Pool:</nbgre> <div class='nbws'>" +
      hack.prize_pool +
      "</div> </div> <div class='display1 col-3'> <nbgre>Team Size:</nbgre> <div class='nbws'> Min: 1 Member<br> Max: " +
      hack.max_team_size +
      " Members </div> </div> <div class='display1 col-3'> <nbgre>Venue:</nbgre> <div class='nbws'>" +
      hack.venue +
      "</div> </div> <div class='display2 col-4'> <nbgre>Prize Pool:</nbgre> <div class='nbws'>" +
      hack.prize_pool +
      "</div> </div> <div class='display2 col-4'> <nbgre>Team Size:</nbgre> <div class='nbws'> Min: 1 Member<br> Max: " +
      hack.max_team_size +
      " Members </div> </div> <div class='display2 col-4'> <nbgre>Venue:</nbgre> <div class='nbws'>" +
      hack.venue +
      "</div> </div> </div> <div class='status' style='margin-top: 54px;'> <circle class='circle1'></circle> <circle class='circle2'></circle> <circle class='circle3'></circle>Online </div> </div> <div class='col-1'></div> </div> <div class='row' style='margin: 60.33px 0 0;'> <div class='col-1'></div> <div class='col-10'> <nbgre> About: </nbgre> <div class='nbwsb'>"+hack.description +"</div> </div> </div> </div> <div class='col-1'></div> </div>";

    document.querySelector(".child").innerHTML =
      "<div class='row text-center justify-content-center'> <div class='card'> <div class='card-body justify-content-center text-center'> <div class='gray' style='height: 252px; background: #C4C4C4;'></div> <a class=' btns btn btn-success' href='./searchforteamswhack.html?" +
      hack._id +
      "' role='button' style='margin-top: 34px;'>Join Team</a> </div> </div> <div class='card'> <div class='card-body justify-content-center text-center'> <div class='gray' style='height: 252px; background: #C4C4C4;'></div> <a class=' btns btn btn-success' href='./createteamwhackwteam.html?" +
      hack._id +
      "' role='button' style='margin-top: 34px;'>Create Team</a> </div> </div> <div class='card'> <div class='card-body justify-content-center text-center'> <div class='gray' style='height: 252px; background: #C4C4C4;'></div> <a class=' btns btn btn-success' href='./addfromexisting.html' role='button' style='margin-top: 34px;'>Add from Existing</a> </div> </div> </div>";
  })
  .catch((error) => {
    console.error("Error:", error);
  });
