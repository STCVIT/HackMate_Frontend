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
        choice.push("App Dev");
        n=n+1;
    }
    else{
        app.style.backgroundColor="#1D2833";
        choice = arrayRemove(choice,"App Dev");
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
const url='https://hackportalbackend.herokuapp.com';
auth="eyJhbGciOiJSUzI1NiIsImtpZCI6IjFiYjk2MDVjMzZlOThlMzAxMTdhNjk1MTc1NjkzODY4MzAyMDJiMmQiLCJ0eXAiOiJKV1QifQ.eyJwYXJ0aWNpcGFudCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2hhY2twb3J0YWwtNDUwZDAiLCJhdWQiOiJoYWNrcG9ydGFsLTQ1MGQwIiwiYXV0aF90aW1lIjoxNjI3MjE2NDMzLCJ1c2VyX2lkIjoiSkVWVGJnandOclZEbVY1ZExTUmk1endoMng5MiIsInN1YiI6IkpFVlRiZ2p3TnJWRG1WNWRMU1JpNXp3aDJ4OTIiLCJpYXQiOjE2MjcyMTY0MzMsImV4cCI6MTYyNzIyMDAzMywiZW1haWwiOiJzaHJleXV1MjAyMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJzaHJleXV1MjAyMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.RejrBzGXFtDHpBLL8DdRoExbLtwVDhLkTilGy1GeA1AWzxOXOMykZnQl-nfGPvVSIDwY-Av51MJa6pS313PnBLGudikKpb7MXb0q9EmtiVgJsKrqdVnXJ04Cfopei7SeSi2e-CM861lI_rA7TQQLbv93raSrUgW6Q-TsX-BftglC7VFSWQBLLylAjjlh9-7Oj0SAFxvei1RUaulbRR1ZLnG8VAzeu2WgVEMoE8DUSSNIP4L98Hhf3Ja5Mttt_S0HMJ_ihH_1Z8hRiOXFBWwyxwy2Vs4CWGL2Y4pcvjA-e4xlUxCTz0Q7BSR6ISoeeukTL57RGrPTDvcW3Y-8t0VLIw"
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

