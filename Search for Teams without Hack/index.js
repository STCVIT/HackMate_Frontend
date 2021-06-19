const app = document.querySelector('.text3');
const fweb = document.querySelector('.text6');
const bweb = document.querySelector('.text7');
const ml = document.querySelector('.text8');
const mgmt = document.querySelector('.text10');
const design = document.querySelector('.text9');
const block = document.querySelector('.text11');
const cyber = document.querySelector('.text12');
const all = document.querySelector('.text5');

app.addEventListener('click', function() {
  document.getElementById("active1").className = "button1";
  document.getElementById("inactive1").className = "button";
});
fweb.addEventListener('click', function() {
  document.getElementById("active1").className = "button1";
  document.getElementById("inactive2").className = "button";
});
bweb.addEventListener('click', function() {
  document.getElementById("active1").className = "button1";
  document.getElementById("inactive3").className = "button";
});
ml.addEventListener('click', function() {
  document.getElementById("active1").className = "button1";
  document.getElementById("inactive4").className = "button";
});
design.addEventListener('click', function() {
  document.getElementById("active1").className = "button1";
  document.getElementById("inactive5").className = "button";
});
mgmt.addEventListener('click', function() {
  document.getElementById("active1").className = "button1";
  document.getElementById("inactive6").className = "button";
});
block.addEventListener('click', function() {
  document.getElementById("active1").className = "button1";
  document.getElementById("inactive7").className = "button";
});
cyber.addEventListener('click', function() {
  document.getElementById("active1").className = "button1";
  document.getElementById("inactive8").className = "button";
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
    $("#nav").load("../Header/headerl.txt");
    $("#foobottom").load("../Footer/footer.txt");
});