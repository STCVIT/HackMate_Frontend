$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerwobtn.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
});

let app = document.querySelector("#app");
let frontend = document.querySelector("#frontend");
let backend = document.querySelector("#backend");
let ui = document.querySelector("#ui");
let machine = document.querySelector("#machine");
let management = document.querySelector("#management");
let cyber = document.querySelector("#cyber");
let block = document.querySelector("#block");
app.addEventListener('click',() => app.style.backgroundColor="#1ea54c", count1=1);
frontend.addEventListener('click',() => frontend.style.backgroundColor="#1ea54c",count1=1 );
frontend.addEventListener('click',() => frontend.style.backgroundColor="#1ea54c",count1=1 );
backend.addEventListener('click',() => backend.style.backgroundColor="#1ea54c",count1=1);
ui.addEventListener('click',() => ui.style.backgroundColor="#1ea54c",count1=1);
machine.addEventListener('click',() => machine.style.backgroundColor="#1ea54c",count1=1);
management.addEventListener('click',() => management.style.backgroundColor="#1ea54c"),count1=1;
cyber.addEventListener('click',() => cyber.style.backgroundColor="#1ea54c",count1=1);
block.addEventListener('click',() => block.style.backgroundColor="#1ea54c",count1=1);