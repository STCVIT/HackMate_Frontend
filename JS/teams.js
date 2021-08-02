$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});
var teams;
var oneTeam = [];
var page = 1;
// axios(`${url}/DN_Team/myTeams?page=1`, {
//   headers: {
//     Authorization: "Bearer " + auth,
//   },
// })
// .then((response) => {
// teams = response.data;
// console.log(teams);
// console.log(teams.length);
// // for (var i = 0; i < teams.length; i++) {
// //   document.querySelector(".card1").innerHTML +=
// //   "<div class='card-body'><h5 class='card-title'>"+
// //   teams["final"][i]["team"].name+"</h5><p><text>Hackathon:</text><hackathon>"+teams["final"][i]["hackName"]+"</hackathon></p><div class='card-details'><p><f>"+teams["final"][i]["team"].members.length +
// //   "</f><r> Team <br> Members</r></p><div class='vl'></div><ul class='team-members'>"
// //   for(var j=0;j < teams["final"][i]["team"].members.length;j++){
// //   "<li class='list-item'><img id='pp' src='../Assets/Images/Rectangle 155.svg'><p>" +
// //   // teams['final'][i]['pt_skill'][j]['participant'].name +
// //    "<br><t>" +
// //   // teams["final"][0]["pt_skill"][0]["skills"][0]["skill"]+
// //     "</t></p>"
// //   }
// //   "</ul></div></div></div>"
// //   i++;
// //   document.querySelector(".card2").innerHTML +=
// //   "<div class='card-body'><h5 class='card-title'>"+
// //   teams["final"][i]["team"].name+"</h5><p><text>Hackathon:</text><hackathon>"+teams["final"][i]["hackName"]+"</hackathon></p><div class='card-details'><p><f>"+teams["final"][i]["team"].members.length +
// //   "</f><r> Team <br> Members</r></p><div class='vl'></div><ul class='team-members'>"
// //   for(var j=0;j < teams["final"][i]["team"].members.length;j++){
// //   "<li class='list-item'><img id='pp' src='../Assets/Images/Rectangle 155.svg'><p>" +
// //   // teams['final'][i]['pt_skill'][j]['participant'].name +
// //    "<br><t>" +
// //   // teams["final"][0]["pt_skill"][0]["skills"][0]["skill"]+
// //     "</t></p>"
// //   }
// //   "</ul></div></div></div>"
// // }     
// let body = document.querySelector(".cards");
// var yourHTML = "";
// for (var i = 0; i < teams.length;) {
//   yourHTML +="<div class='row'><div class='col-lg-6 col-md-6 col-sm-12'style='padding-bottom:5%'><div class='card1'style='max-width: 497px; max-height: 371px;padding-bottom: 10%;'><div class='card-body'><h4 class='card-title'>" + 
//   teams["final"][i]["team"].name +
//   "</h4><p><text>Hackathon:</text><hackathon>" +
//   teams["final"][i]["hackName"] +
//   "</hackathon></p><div class='card-details'><p><f>"+
//   teams["final"][i]["team"].members.length +
//  "</f><r> Team <br> Members</r></p><div class='vl'></div><ul class='team-members'>"
//  for(var j=0;j < teams["final"][i]["team"].members.length;j++){
//  yourHTML += "<li class='list-item'><img id='pp' src='../Assets/Images/Rectangle 155.svg'><p>"+
//  teams['final'][i]['pt_skill'][j]['participant'].name+
//  "<br><t>"+
//  teams["final"][i]["pt_skill"][j]["skills"][0]["skill"]+
//  "</t></p></li>"
//  }
// yourHTML += "</ul></div></div></div></div>"

// i++;
// console.log(i);

// yourHTML += "<div class='col-lg-6 col-md-6 col-sm-12'><div class='card2' style='max-width: 497px; max-height: 371px; padding-bottom:20px;'><div class='card-body'><h4 class='card-title'>" +
// teams["final"][i]["team"].name +
//   "</h4><p><text>Hackathon:</text><hackathon>" +
//   teams["final"][i]["hackName"] +
//   "</hackathon></p><div class='card-details'><p><f>"+
//   teams["final"][i]["team"].members.length +
//  "</f><r> Team <br> Members</r></p><div class='vl'></div><ul class='team-members'>"
//  for(var j=0;j < teams["final"][i]["team"].members.length;j++){
//  yourHTML += "<li class='list-item'><img id='pp' src='../Assets/Images/Rectangle 155.svg'><p>"+
//  teams['final'][i]['pt_skill'][j]['participant'].name+
//  "<br><t>"
//  if(teams["final"][i]["pt_skill"][j]["skills"].length==0){
//   yourHTML += "</t></p></li>"
//  }
//  else{
//   yourHTML += teams["final"][i]["pt_skill"][j]["skills"][0]["skill"]+"</t></p></li>"
//  }
// }
//  yourHTML += "</ul></div></div></div></div></div>"

// i++;
// console.log(i);

// body.innerHTML += yourHTML;
// yourHTML = "";
// }
// })
// .catch((error) => {
// console.error("Error:", error);
// });



var Pagination = {
  code: "",
  Extend: function (data) {
    Pagination.size = data.size;
    Pagination.page = data.page;
    Pagination.step = data.step;
  },
  Add: function (s, f) {
    for (var i = s; i < f; i++) {
      Pagination.code +=
        "<button class='pagenation' onclick='events(event)'>" + i + "</button>";
    }
  },
  Last: function () {
    Pagination.code +=
      "<i style='margin-left: 11px; color: #008249' >...</i><button class='pagenation' onclick='events(event)'>" +
      Pagination.size +
      "</button>";
  },
  First: function () {
    Pagination.code += "";
  },
  Click: function () {
    Pagination.page = +this.innerHTML;
    Pagination.Start();
  },
  Prev: function () {
    Pagination.page--;
    if (Pagination.page < 1) {
      Pagination.page = 1;
    }
    Pagination.Start();
  },
  Next: function () {
    Pagination.page++;
    if (Pagination.page > Pagination.size) {
      Pagination.page = Pagination.size;
    }
    Pagination.Start();
  },
  Bind: function () {
    var a = Pagination.e.querySelectorAll(".pagenation");
    for (var i = 0; i < a.length; i++) {
      if (+a[i].innerHTML === Pagination.page) a[i].className = "current";
      a[i].addEventListener("click", Pagination.Click, false);
    }
  },
  Finish: function () {
    Pagination.e.innerHTML = Pagination.code;
    Pagination.code = "";
    Pagination.Bind();
  },
  Start: function () {
    if (Pagination.size < Pagination.step * 2 + 4) {
      Pagination.Add(1, Pagination.size + 1);
    } else if (Pagination.page < Pagination.step * 2 + 1) {
      Pagination.Add(1, Pagination.step * 2 + 2);
      Pagination.Last();
    } else if (Pagination.page > Pagination.size - Pagination.step * 2) {
      Pagination.First();
      Pagination.Add(
        Pagination.size - Pagination.step * 2 - 1,
        Pagination.size + 1
      );
    } else {
      Pagination.First();
      Pagination.Add(
        Pagination.page - Pagination.step,
        Pagination.page + Pagination.step + 1
      );
      Pagination.Last();
    }
    Pagination.Finish();
  },
  Buttons: function (e) {
    var nav = e.getElementsByTagName("a");
    nav[0].addEventListener("click", Pagination.Prev, false);
    nav[1].addEventListener("click", Pagination.Next, false);
  },
  Create: function (e) {
    var html = [
      "<a href='#wrapper' onclick='prevPage()' style='color: #008249;text-decoration: none;'>&#9668;</a>", // previous button
      "<span></span>", // pagination container
      "<a href='#wrapper' onclick='nextPage()' style='margin-left: 11px; color: #008249;text-decoration: none;'>&#9658;</a>", // next button
    ];
    e.innerHTML = html.join("");
    Pagination.e = e.getElementsByTagName("span")[0];
    Pagination.Buttons(e);
  },
  Init: function (e, data) {
    Pagination.Extend(data);
    Pagination.Create(e);
    Pagination.Start();
  },
};


function displayTeams() {
  var init = async function () {
    var res = await axios(`${url}/DN_Team/myTeams?page=${page}`, {
      headers: {
        Authorization: "Bearer " + auth,
      },
    });
    teams = await res.data;
    console.log(teams);

    var length = await res.data.length;
    console.log(length);

    document.querySelector(".wrapper").innerHTML = "";
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
     teams["final"][i]["pt_skill"][j]["skills"][0]["skill"]+
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
     "<br><t>"
     if(teams["final"][i]["pt_skill"][j]["skills"].length==0){
      yourHTML += "</t></p></li>"
     }
     else{
      yourHTML += teams["final"][i]["pt_skill"][j]["skills"][0]["skill"]+"</t></p></li>"
     }
    }
     yourHTML += "</ul></div></div></div></div></div>"
    
    i++;
    console.log(i);
    
    body.innerHTML += yourHTML;
    yourHTML = "";
    }
    total_teams = Math.ceil(length / 6);
    
    Pagination.Init(document.getElementById("pagination"), {
      size: total_teams,
      page: 1,
      step: 1,
    });
  };
  init();
}

displayTeams();

function events(event) {
  console.log(event);
  page = event.target.innerHTML;
  console.log(page);
  axios(`${url}/DN_Team/myTeams?page=${page}`, {
    headers: {
      Authorization: "Bearer " + auth,
    },
  })
  .then((response) => {
    teams = response.data;
    console.log(teams);

    document.querySelector(".wrapper").innerHTML = "";
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
     teams["final"][i]["pt_skill"][j]["skills"][0]["skill"]+
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
     "<br><t>"
     if(teams["final"][i]["pt_skill"][j]["skills"].length==0){
      yourHTML += "</t></p></li>"
     }
     else{
      yourHTML += teams["final"][i]["pt_skill"][j]["skills"][0]["skill"]+"</t></p></li>"
     }
    }
     yourHTML += "</ul></div></div></div></div></div>"
    
    i++;
    console.log(i);
    
    body.innerHTML += yourHTML;
    yourHTML = "";
    }
    })
    .catch((error) => {
    console.error("Error:", error);
    });
}


function nextPage() {
  if (page < total_teams) {
    page = Pagination.page + 1;
  }
  console.log(page);
  axios(
    `${url}/DN_Team/myTeams?page=${page}`,
    {
      headers: {
        Authorization: "Bearer " + auth,
      },
    }
  )
  .then((response) => {
    teams = response.data;
    console.log(teams);
    
    document.querySelector(".wrapper").innerHTML = "";
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
     teams["final"][i]["pt_skill"][j]["skills"][0]["skill"]+
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
     "<br><t>"
     if(teams["final"][i]["pt_skill"][j]["skills"].length==0){
      yourHTML += "</t></p></li>"
     }
     else{
      yourHTML += teams["final"][i]["pt_skill"][j]["skills"][0]["skill"]+"</t></p></li>"
     }
    }
     yourHTML += "</ul></div></div></div></div></div>"
    
    i++;
    console.log(i);
    
    body.innerHTML += yourHTML;
    yourHTML = "";
    }
    })
    .catch((error) => {
    console.error("Error:", error);
    });
}


function prevPage() {
  if (page > 1) {
    page = Pagination.page - 1;
  }
  console.log(page);
  axios(
    `${url}/DN_Team/myTeams?page=${page}`,
    {
      headers: {
        Authorization: "Bearer " + auth,
      },
    }
  )
  .then((response) => {
    teams = response.data;
    console.log(teams);

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
     teams["final"][i]["pt_skill"][j]["skills"][0]["skill"]+
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
     "<br><t>"
     if(teams["final"][i]["pt_skill"][j]["skills"].length==0){
      yourHTML += "</t></p></li>"
     }
     else{
      yourHTML += teams["final"][i]["pt_skill"][j]["skills"][0]["skill"]+"</t></p></li>"
     }
    }
     yourHTML += "</ul></div></div></div></div></div>"
    
    i++;
    console.log(i);
    
    body.innerHTML += yourHTML;
    yourHTML = "";
    }
    })
    .catch((error) => {
    console.error("Error:", error);
    });
  }