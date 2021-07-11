$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerl.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
});
let all =document.querySelector("#all");
let app = document.querySelector("#app");
let frontend = document.querySelector("#frontend");
let backend = document.querySelector("#backend");
let ui = document.querySelector("#ui");
let machine = document.querySelector("#machine");
let management = document.querySelector("#management");
let cyber = document.querySelector("#cyber");
let block = document.querySelector("#block");
var n=2;

app.addEventListener('click',function() { 
    if(n%2==0){
        app.style.backgroundColor="#1ea54c";
        n=n+1;
    }
    else{
        app.style.backgroundColor="#1D2833";
        n=n+1;
    }
});
frontend.addEventListener('click',function() { 
    if(n%2==0){
        frontend.style.backgroundColor="#1ea54c";
        n=n+1;
    }
    else{
        frontend.style.backgroundColor="#1D2833";
        n=n+1;
    }
});
backend.addEventListener('click',function() { 
    if(n%2==0){
        backend.style.backgroundColor="#1ea54c";
        n=n+1;
    }
    else{
        backend.style.backgroundColor="#1D2833";
        n=n+1;
    }
});
ui.addEventListener('click',function() { 
    if(n%2==0){
        ui.style.backgroundColor="#1ea54c";
        n=n+1;
    }
    else{
        ui.style.backgroundColor="#1D2833";
        n=n+1;
    }
});
machine.addEventListener('click',function() { 
    if(n%2==0){
        machine.style.backgroundColor="#1ea54c";
        n=n+1;
    }
    else{
        machine.style.backgroundColor="#1D2833";
        n=n+1;
    }
});
management.addEventListener('click',function() { 
    if(n%2==0){
        management.style.backgroundColor="#1ea54c";
        n=n+1;
    }
    else{
        management.style.backgroundColor="#1D2833";
        n=n+1;
    }
});
cyber.addEventListener('click',function(){
    if(n%2==0){
        cyber.style.backgroundColor="#1ea54c";
        n=n+1;
    }
    else{
        cyber.style.backgroundColor="#1D2833";
        n=n+1;
    }
});
block.addEventListener('click',function(){
    if(n%2==0){
        block.style.backgroundColor="#1ea54c";
        n=n+1;
    }
    else{
        block.style.backgroundColor="#1D2833";
        n=n+1;
    }
});
all.addEventListener('click', function() {
    block.style.backgroundColor="#1D2833";
    cyber.style.backgroundColor="#1D2833";
    management.style.backgroundColor="#1D2833";
    machine.style.backgroundColor="#1D2833";
    ui.style.backgroundColor="#1D2833";
    backend.style.backgroundColor="#1D2833";
    frontend.style.backgroundColor="#1D2833";
    app.style.backgroundColor="#1D2833";
  });

