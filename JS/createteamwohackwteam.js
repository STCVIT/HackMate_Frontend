const app = document.querySelector('.text3');
const fweb = document.querySelector('.text6');
const bweb = document.querySelector('.text7');
const ml = document.querySelector('.text8');
const mgmt = document.querySelector('.text10');
const design = document.querySelector('.text9');
const block = document.querySelector('.text11');
const cyber = document.querySelector('.text12');
const all = document.querySelector('.text5');

var n = 0;
app.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive1").className = "button3";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive1").className = "button2";
    n = n+1;
  }
});

fweb.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive2").className = "button3";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive2").className = "button2";
    n = n+1;
  }
});
bweb.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive3").className = "button3";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive3").className = "button2";
    n = n+1;
  }
});
ml.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive4").className = "button3";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive4").className = "button2";
    n = n+1;
  }
});
design.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive5").className = "button3";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive5").className = "button2";
    n = n+1;
  }
});
mgmt.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive6").className = "button3";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive6").className = "button2";
    n = n+1;
  }
});
block.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive7").className = "button3";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive7").className = "button2";
    n = n+1;
  }
});
cyber.addEventListener('click', function() {
  if(n%2 == 0){
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive8").className = "button3";
    n = n+1;
  }
  else{
    document.getElementById("active1").className = "button2";
    document.getElementById("inactive8").className = "button2";
    n = n+1;
  }
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
$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerl.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
});

document.querySelector(".creates").innerHTML = "<input type='submit' class='button' value='Create' onclick='create()'>";

function create(){
  name = document.getElementById("team_name").value;
  console.log(name);
    axios
    .post(
      `${url}/Dn_Team/createTeam/null`,
      {
        name: name,
      },
      {
        headers: {
          Authorization: "Bearer " + auth,
        },
      }
    )
  .then((response) => {
    hack = response.data;
    console.log(hack);
    // document.querySelector(".creates").innerHTML = "<input type='submit' class='button' value='Create' onclick='create()'>"
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("hack_name", name);
        window.location.assign("./createteamwohack.html?" + hack._id);
        // location.href = ""; 
    }
    // window.location.assign("./createteamwhack.html?" + window.location.search.split("?")[1]);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// let a = document.querySelector("#flexCheckDefault6");
// let f = document.querySelector("#flexCheckDefault1");
// let b = document.querySelector("#flexCheckDefault2");
// let u = document.querySelector("#flexCheckDefault3");
// let mac = document.querySelector("#flexCheckDefault4");
// let man = document.querySelector("#flexCheckDefault5");
// let c = document.querySelector("#flexCheckDefault7");
// let blo = document.querySelector("#flexCheckDefault8");

// let choice = [];
// a.addEventListener('click',function() { 
//         choice.push("appdev");
// });
// f.addEventListener('click',function() { 
//         choice.push("frontend");
// });
// b.addEventListener('click',function() { 
//         choice.push("backend");
// });
// u.addEventListener('click',function() { 
//         choice.push("ui/ux");
// });
// mac.addEventListener('click',function() { 
//         choice.push("ml");
// });
// // man.addEventListener('click',function() { 
// //         choice.push("appdev");
// // });
// // blo.addEventListener('click',function() { 
// //         choice.push("appdev");
// // });
// // c.addEventListener('click',function() { 
// //         choice.push("appdev");
// // });

// function submit(){
//     axios
//   .post(`${url}/DN_Team/addSkills/${window.location.search.split("?")[1]}`,
//   {
//     skills : choice,
//   },
//   {
//     headers: {
//       Authorization: "Bearer " + auth,
//     },
//   }
//   )
//   .then((response) => {
//     talent = response.data;
//     console.log(talent);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
// }