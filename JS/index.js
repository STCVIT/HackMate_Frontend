$(document).ready(function () {
    $("#nav").load("./Assets/Header/header.txt");
});

var preloader = document.getElementById('loading');

function myFunc(){
    setTimeout(load, 1500);
}

function load(){
    preloader.style.display = 'none';
}