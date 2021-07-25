const app = document.querySelector('.text3');
const fweb = document.querySelector('.text6');
const bweb = document.querySelector('.text7');
const ml = document.querySelector('.text8');
const mgmt = document.querySelector('.text10');
const design = document.querySelector('.text9');
const block = document.querySelector('.text11');
const cyber = document.querySelector('.text12');
const all = document.querySelector('.text5');

var n = 0;
app.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive1").className = "button3";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive1").className = "button2";
    n = n+1;
  }
});

fweb.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive2").className = "button3";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive2").className = "button2";
    n = n+1;
  }
});
bweb.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive3").className = "button3";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive3").className = "button2";
    n = n+1;
  }
});
ml.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive4").className = "button3";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive4").className = "button2";
    n = n+1;
  }
});
design.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive5").className = "button3";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive5").className = "button2";
    n = n+1;
  }
});
mgmt.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive6").className = "button3";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive6").className = "button2";
    n = n+1;
  }
});
block.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive7").className = "button3";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive7").className = "button2";
    n = n+1;
  }
});
cyber.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive8").className = "button3";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive8").className = "button2";
    n = n+1;
  }
});
all.addEventListener('click', function() {
  document.getElementById("active1").className = "button3";
  document.getElementById("inactive1").className = "button2";
  document.getElementById("inactive2").className = "button2";
  document.getElementById("inactive3").className = "button2";
  document.getElementById("inactive4").className = "button2";
  document.getElementById("inactive5").className = "button2";
  document.getElementById("inactive6").className = "button2";
  document.getElementById("inactive7").className = "button2";
  document.getElementById("inactive8").className = "button2";
});
$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerl.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
});

const team_name = localStorage.getItem("hack_name");
console.log(team_name);
document.getElementById("teams").innerHTML = team_name;