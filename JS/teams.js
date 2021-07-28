$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});
var teams;
var oneTeam = [];
axios(`${url}/DN_Team/myTeams?page=1`, {
  headers: {
    Authorization: "Bearer " + auth,
  },
})
.then((response) => {
teams = response.data;
console.log(teams);
console.log(teams.length);
// for (var i = 0; i < teams.length; i++) {
//   document.querySelector(".card1").innerHTML +=
//   "<div class='card-body'><h5 class='card-title'>"+
//   teams["final"][i]["team"].name+"</h5><p><text>Hackathon:</text><hackathon>"+teams["final"][i]["hackName"]+"</hackathon></p><div class='card-details'><p><f>"+teams["final"][i]["team"].members.length +
//   "</f><r> Team <br> Members</r></p><div class='vl'></div><ul class='team-members'>"
//   for(var j=0;j < teams["final"][i]["team"].members.length;j++){
//   "<li class='list-item'><img id='pp' src='../Assets/Images/Rectangle 155.svg'><p>" +
//   // teams['final'][i]['pt_skill'][j]['participant'].name +
//    "<br><t>" +
//   // teams["final"][0]["pt_skill"][0]["skills"][0]["skill"]+
//     "</t></p>"
//   }
//   "</ul></div></div></div>"
//   i++;
//   document.querySelector(".card2").innerHTML +=
//   "<div class='card-body'><h5 class='card-title'>"+
//   teams["final"][i]["team"].name+"</h5><p><text>Hackathon:</text><hackathon>"+teams["final"][i]["hackName"]+"</hackathon></p><div class='card-details'><p><f>"+teams["final"][i]["team"].members.length +
//   "</f><r> Team <br> Members</r></p><div class='vl'></div><ul class='team-members'>"
//   for(var j=0;j < teams["final"][i]["team"].members.length;j++){
//   "<li class='list-item'><img id='pp' src='../Assets/Images/Rectangle 155.svg'><p>" +
//   // teams['final'][i]['pt_skill'][j]['participant'].name +
//    "<br><t>" +
//   // teams["final"][0]["pt_skill"][0]["skills"][0]["skill"]+
//     "</t></p>"
//   }
//   "</ul></div></div></div>"
// }     
let body = document.querySelector(".cards");
var yourHTML = "";
for (var i = 0; i < teams.length;) {
  yourHTML +="<div class='row'><div class='col-lg-6 col-md-6 col-sm-12'style='padding-bottom:5%'><div class='card1'style='max-width: 497px; max-height: 371px;padding-bottom: 10%;'><div class='card-body'><h4 class='card-title'>" + 
  teams["final"][i]["team"].name +
  "</h4><p><text>Hackathon:</text><hackathon>" +
  teams["final"][i]["hackName"] +
  "</hackathon></p><div class='card-details'><p><f>"+
  teams["final"][i]["team"].members.length +
 "</f><r> Team <br> Members</r></p><div class='vl'></div><ul class='team-members'>"
 for(var j=0;j < teams["final"][i]["team"].members.length;j++){
 yourHTML += "<li class='list-item'><img id='pp' src='../Assets/Images/Rectangle 155.svg'><p>"+
 teams['final'][i]['pt_skill'][j]['participant'].name+
 "<br><t>"+
 teams["final"][0]["pt_skill"][0]["skills"][0]["skill"]+
 "</t></p></li>"
 }
yourHTML += "</ul></div></div></div></div>"

i++;
console.log(i);

yourHTML += "<div class='col-lg-6 col-md-6 col-sm-12'><div class='card2' style='max-width: 497px; max-height: 371px; padding-bottom:20px;'><div class='card-body'><h4 class='card-title'>" +
teams["final"][i]["team"].name +
  "</h4><p><text>Hackathon:</text><hackathon>" +
  teams["final"][i]["hackName"] +
  "</hackathon></p><div class='card-details'><p><f>"+
  teams["final"][i]["team"].members.length +
 "</f><r> Team <br> Members</r></p><div class='vl'></div><ul class='team-members'>"
 for(var j=0;j < teams["final"][i]["team"].members.length;j++){
 yourHTML += "<li class='list-item'><img id='pp' src='../Assets/Images/Rectangle 155.svg'><p>"+
 teams['final'][i]['pt_skill'][j]['participant'].name+
 "<br><t>"+
 teams["final"][i]["pt_skill"][j]["skills"][0]["skill"]+
 "</t></p></li>"
 }
 yourHTML += "</ul></div></div></div></div></div>"

i++;
console.log(i);
}
body.innerHTML += yourHTML;
})
.catch((error) => {
console.error("Error:", error);
});

