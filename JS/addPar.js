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
var n=0;
all.addEventListener('click', function() {
    all.style.backgroundColor="#1ea54c";
    app.style.backgroundColor="#1D2833";
    frontend.style.backgroundColor="#1D2833";
    backend.style.backgroundColor="#1D2833";
    ui.style.backgroundColor="#1D2833";
    machine.style.backgroundColor="#1D2833";
    management.style.backgroundColor="#1D2833";
    cyber.style.backgroundColor="#1D2833";
  });

app.addEventListener('click',function() { 
    if(n%2==0){
        app.style.backgroundColor="#1ea54c";
        all.style.backgroundColor="#1D2833";
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
        all.style.backgroundColor="#1D2833";
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
        all.style.backgroundColor="#1D2833";
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
        all.style.backgroundColor="#1D2833";
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
        all.style.backgroundColor="#1D2833";
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
        all.style.backgroundColor="#1D2833";
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
        all.style.backgroundColor="#1D2833";
        n=n+1;
    }
    else{
        cyber.style.backgroundColor="#1D2833";
        n=n+1;
    }
});

document.getElementById("participant_name").addEventListener("keyup", function(event) {
    event.preventDefault();
    var hack_id = window.location.search.split("?")[1];
    var name = document.getElementById("participant_name").value;
    if (event.keyCode === 13) {
      axios(`${url}/participant/get/userName/${hack_id}?name=${name}&page=1`, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      })
      .then((response) => {
        teams = response.data;
        console.log(teams);
  
         document.querySelector(".persons").innerHTML +=
          "<div class='card2'><div class='card-body-2'><div class='row'><div class='col-lg-2 col-md-2 col-2'><img src='../Assets/Images/dp1.svg' class='Image1'></div><div class='col-lg-7 col-md-7 col-7'><h4 class='text13'>"+teams.final[0].pt.name+"</h4><h5 class='text14'>"+teams.final[0].skills[0].skill+"</h5></div><div class='col-lg-3 col-md-3 col-3'><h5 class='text15' onclick='invite()'>INVITE</h5></div></div></div></div>"; 
      })
      .catch(e => {
        console.log(e);
        console.log(e.response.status);
        if(e.response.status == 404){
          swal("WARNING!!", "No Participant Found", "warning");
        }
      });
    }
  });
  
  function invite() {
    // id.innerHTML = "Ooops!";
    var participant_id = teams.final[0].pt._id;
    console.log(participant_id);
        axios
        .post(
          `${url}/invites/invite/${window.location.search.split("?")[1]}/${participant_id}`, 
        {
          code: invite,
        },
          {
        headers: {
          Authorization: "Bearer " + auth,
        },
      }
      )
      .then((response) => {
        accepted = response.data;
        console.log(accepted);
        swal("SUCCESS!!", "Your invite has been submitted successfully", "success");
      })
      .catch(e => {
        console.log(e);
        console.log(e.response.status);
        if(e.response.status == 404){
          swal("WARNING!!", "No Participant Found", "warning");
        }
        else if(e.response.status == 400){
          swal("WARNING!!", "Invite has already been sent", "warning");
        }
      });
  
  }