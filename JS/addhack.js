$(document).ready(function () {
  $("#nav").load("../Assets/Header/headero.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.myform.name.value;
  var venue = document.myform.venue.value;
  var moc = document.myform.moc.value;
  var website = document.myform.website.value;
  var about = document.myform.about.value;
  var start = document.myform.start.value;
  var end = document.myform.end.value;

  console.log("Test");

});


// fetch(`${url}/organiser/createHack`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + auth,
//   },

//   body: {
//     name: document.myform.name.value,
    
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Success:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });