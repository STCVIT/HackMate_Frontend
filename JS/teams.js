$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerl.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
});


axios(`${url}/DN_Team/myTeams?page=1`, {
    headers: {
      Authorization: "Bearer " + auth,
    },
})
.then((response) => {
  teams = response.data;
  console.log(teams.length);
  console.log(response.data);
  for (var i = 0; i < teams.length; i++) {
    document.querySelector(".cards").innerHTML +=
    "<div class='card1' style='max-width: 497px; max-height: 371px;'><div class='card-body'><h5 class='card-title'>"+
    teams[i].name +
    "</h5><p><text>Hackathon:</text><hackathon>"
    teams[i].hackathon+
    "</hackathon></p>div class='card-details'><p><f>"
    teams[i].numberofmembers+
    "</f><r> Team <br> Members</r></p><div class='vl'></div><ul class='team-members'>"
    for (var j=0; j<numberofmembers; j++) {
      "<li class='list-item'><img id='pp' src='../Assets/Images/Rectangle 155.svg'><p>"
      teams[i].member1+
      "<br><t>"
      teams[i].member1domain
      "</t></p>"
    }
    "</ul></div></div></div>"
  }     
})
.catch((error) => {
  console.error("Error:", error);
});

