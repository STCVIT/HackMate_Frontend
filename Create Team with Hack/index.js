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
  document.getElementById("active1").className = "button2";
  document.getElementById("inactive1").className = "button3";
});
fweb.addEventListener('click', function() {
  document.getElementById("active1").className = "button2";
  document.getElementById("inactive2").className = "button3";
});
bweb.addEventListener('click', function() {
  document.getElementById("active1").className = "button2";
  document.getElementById("inactive3").className = "button3";
});
ml.addEventListener('click', function() {
  document.getElementById("active1").className = "button2";
  document.getElementById("inactive4").className = "button3";
});
design.addEventListener('click', function() {
  document.getElementById("active1").className = "button2";
  document.getElementById("inactive5").className = "button3";
});
mgmt.addEventListener('click', function() {
  document.getElementById("active1").className = "button2";
  document.getElementById("inactive6").className = "button3";
});
block.addEventListener('click', function() {
  document.getElementById("active1").className = "button2";
  document.getElementById("inactive7").className = "button3";
});
cyber.addEventListener('click', function() {
  document.getElementById("active1").className = "button2";
  document.getElementById("inactive8").className = "button3";
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