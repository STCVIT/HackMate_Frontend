$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerl.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
});
const url = 'https://hackportalbackend.herokuapp.com';
auth = "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc3MTBiMDE3ZmQ5YjcxMWUwMDljNmMzNmIwNzNiOGE2N2NiNjgyMTEiLCJ0eXAiOiJKV1QifQ.eyJwYXJ0aWNpcGFudCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2hhY2twb3J0YWwtNDUwZDAiLCJhdWQiOiJoYWNrcG9ydGFsLTQ1MGQwIiwiYXV0aF90aW1lIjoxNjI2NzAxMDkwLCJ1c2VyX2lkIjoib3hxeXN2bHB2VWU3dXBkcGJVaXNGS0Qyc1I5MyIsInN1YiI6Im94cXlzdmxwdlVlN3VwZHBiVWlzRktEMnNSOTMiLCJpYXQiOjE2MjY3MDEwOTAsImV4cCI6MTYyNjcwNDY5MCwiZW1haWwiOiJtZWdoYW1haXRpbjI3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lZ2hhbWFpdGluMjdAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.ZKzuiYcRG11CV1C4wRXNgo5jVl4YtclL4oMdRV3QlZrKbHQ5AQ3BBE-3Sx0JCTXCY-XMojtsanYwbmAuAJYcA9ksnLwjMWrOUR-4iaaNo_gyvUNNqXzA7WweYNnkasQXIqqgeytuOaEiS9bDcXfHScCFIDcnoKZsFLwW35_I3dXtVz7g_0v7IOkrOr4Fh14ZYkDWGMXqRXYLDTWjr75XFG8tU8TOWwLe0Dhu9wvD9gFYVsMfhrfflX_O3O_Vn_Hb8UVT7eIsF3KXfOgRbUIY2pvJpNMJbPPMkf6QhEEhb3KgZjapbrg6-tR2Xc4zncl-V3pViY34As0AqSsolrrWEg"
axios(`${url}/DN_Team/myTeams?page=1`, {
    headers: {
      Authorization: "Bearer " + auth,
    },
})
.then((response) => {
  teams = response.data;
  console.log(teams.length);
  console.log(teams);
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

