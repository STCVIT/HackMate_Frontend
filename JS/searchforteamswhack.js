const app = document.querySelector('.button1');
const fweb = document.querySelector('.button5');
const bweb = document.querySelector('.button6');
const ml = document.querySelector('.button7');
const mgmt = document.querySelector('.button9');
const design = document.querySelector('.button8');
const block = document.querySelector('.button10');
const cyber = document.querySelector('.button11');
const all = document.querySelector('.button');

var n = 0;
app.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button1";
    document.getElementById("inactive1").className = "button";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button1";
    document.getElementById("inactive1").className = "button1";
    n = n+1;
  }
});

fweb.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button1";
    document.getElementById("inactive2").className = "button";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button1";
    document.getElementById("inactive2").className = "button1";
    n = n+1;
  }
});
bweb.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button1";
    document.getElementById("inactive3").className = "button";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button1";
    document.getElementById("inactive3").className = "button1";
    n = n+1;
  }
});
ml.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button1";
    document.getElementById("inactive4").className = "button";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button1";
    document.getElementById("inactive4").className = "button1";
    n = n+1;
  }
});
design.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button1";
    document.getElementById("inactive5").className = "button";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button1";
    document.getElementById("inactive5").className = "button1";
    n = n+1;
  }
});
mgmt.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button1";
    document.getElementById("inactive6").className = "button";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button1";
    document.getElementById("inactive6").className = "button1";
    n = n+1;
  }
});
block.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button1";
    document.getElementById("inactive7").className = "button";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button1";
    document.getElementById("inactive7").className = "button1";
    n = n+1;
  }
});
cyber.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button1";
    document.getElementById("inactive8").className = "button";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button1";
    document.getElementById("inactive8").className = "button1";
    n = n+1;
  }
});
all.addEventListener('click', function() {
  document.getElementById("active1").className = "button";
  document.getElementById("inactive1").className = "button1";
  document.getElementById("inactive2").className = "button1";
  document.getElementById("inactive3").className = "button1";
  document.getElementById("inactive4").className = "button1";
  document.getElementById("inactive5").className = "button1";
  document.getElementById("inactive6").className = "button1";
  document.getElementById("inactive7").className = "button1";
  document.getElementById("inactive8").className = "button1";
});

$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerl.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
});

document.getElementById("search").addEventListener("keyup", function(event) {
  event.preventDefault();
  var hack_id = window.location.search.split("?")[1];
  if (event.keyCode === 13) {
    axios(`${url}/DN_Team/teamName/${hack_id}`, {
      headers: {
        Authorization: "Bearer " + auth,
      },
      params: {
        name : document.getElementById("search").value,
        // name: "DEF",
      },
    })
    .then((response) => {
      teams = response.data;
      console.log(teams);
      if (teams[0].participants.length == 1){
        document.querySelector(".cards_container").innerHTML +=
        "<div class = 'row'><div class='col-lg-6 md-12 col-12'><div class='d-flex justify-content-center'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>"+teams[0].team.name+"</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>"+teams[0].participants.length+
        "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>"+ teams[0].participants[0].name +"</h5></div></div></div></div></div></div></div>";
      }
      if (teams[0].participants.length == 2){
        document.querySelector(".cards_container").innerHTML +=
        "<div class = 'row'><div class='col-lg-6 md-12 col-12'><div class='d-flex justify-content-center'><div class='card_of_teams1'><div class='card-body'><h3 class='text13' id='team1'>"+teams[0].team.name+"</h3><div class='row left'><div class='col-lg-3 col-md-3 col-3'><h2 class='text14'>"+teams[0].participants.length+
        "</h2><h3 class='text15'>Team Members</h3></div><div class='col-lg-1 col-md-1 col-1'><div class='vertical'></div></div><div class='col-lg-8 col-md-8 col-8'><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text16'>"+ teams[0].participants[0].name +"</h5></div></div><div class='row'><div class='col-lg-3 col-md-3 col-3'><img src='../Assets/Images/searcdp2.svg' class='Image2'></div><div class='col-lg-7 col-md-7 col-7'><h5 class='text17'>"+ teams[0].participants[1].name +"</h5></div></div></div></div></div></div></div>";
      }
    })
    .catch(e => {
      console.log(e);
    });
  }
});

function join(){
  code = document.getElementById("enter_code").value;
  console.log(code);
    axios
    .post(
      `${url}/DN_Team/code/${window.location.search.split("?")[1]}`,
      {
        code: code,
      },
      {
        headers: {
          Authorization: "Bearer " + auth,
        },
      }
    )
  .then((response) => {
    hack = response.data;
    console.log(hack);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}


// document.getElementById("search").addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//       axios.get('https://jsonplaceholder.typicode.com/todos', {
//       })
//       .then(res => showOutput(res))
//       .catch(err => console.error(err));
//     }
// });
// function showOutput(res) {
//   document.getElementById('team1').innerHTML = `${JSON.stringify(res.data)}`;
// }
