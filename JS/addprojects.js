const loadingDiv = document.getElementById('loading');

$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
});

document.onload = loadingDiv.style.visibility = 'hidden';
