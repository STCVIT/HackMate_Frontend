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
var n=0;
function arrayRemove(arr, value) {
    return arr.filter(function(geeks){
        return geeks != value;
    });
 }
let choice = [];
app.addEventListener('click',function() { 
    if(n%2==0){
        app.style.backgroundColor="#1ea54c";
        choice.push("appdev");
        n=n+1;
    }
    else{
        app.style.backgroundColor="#1D2833";
        choice = arrayRemove(choice,"appdev");
        n=n+1;
    }
});
frontend.addEventListener('click',function() { 
    if(n%2==0){
        frontend.style.backgroundColor="#1ea54c";
        choice.push("Frontend Dev");
        n=n+1;
    }
    else{
        frontend.style.backgroundColor="#1D2833";
        choice = arrayRemove(choice,"Frontend Dev");
        n=n+1;
    }
});
backend.addEventListener('click',function() { 
    if(n%2==0){
        backend.style.backgroundColor="#1ea54c";
        choice.push("Backend Dev");
        n=n+1;
    }
    else{
        backend.style.backgroundColor="#1D2833";
        choice = arrayRemove(choice,"Backend Dev");
        n=n+1;
    }
});
ui.addEventListener('click',function() { 
    if(n%2==0){
        ui.style.backgroundColor="#1ea54c";
        choice.push("UI/UX");
        n=n+1;
    }
    else{
        ui.style.backgroundColor="#1D2833";
        choice = arrayRemove(choice,"UI/UX");
        n=n+1;
    }
});
machine.addEventListener('click',function() { 
    if(n%2==0){
        machine.style.backgroundColor="#1ea54c";
        choice.push("ML");
        n=n+1;
    }
    else{
        machine.style.backgroundColor="#1D2833";
        choice = arrayRemove(choice,"ML");
        n=n+1;
    }
});
management.addEventListener('click',function() { 
    if(n%2==0){
        management.style.backgroundColor="#1ea54c";
        choice.push("management");
        n=n+1;
    }
    else{
        management.style.backgroundColor="#1D2833";
        choice = arrayRemove(choice,"management");
        n=n+1;
    }
});
cyber.addEventListener('click',function(){
    if(n%2==0){
        cyber.style.backgroundColor="#1ea54c";
        choice.push("cyber");
        n=n+1;
    }
    else{
        cyber.style.backgroundColor="#1D2833";
        choice = arrayRemove(choice,"cyber");
        n=n+1;
    }
});
block.addEventListener('click',function(){
    if(n%2==0){
        block.style.backgroundColor="#1ea54c";
        choice.push("block");
        n=n+1;
    }
    else{
        block.style.backgroundColor="#1D2833";
        choice = arrayRemove(choice,"block");
        n=n+1;
    }
});

function add_skills(){
    axios
  .post(`${url}/skills/mySkills`,
  {
    skills : choice,
  },
  {
    headers: {
      Authorization: "Bearer " + auth,
    },
  }
  )
  .then((response) => {
    console.log("Success:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}

