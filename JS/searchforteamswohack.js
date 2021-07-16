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