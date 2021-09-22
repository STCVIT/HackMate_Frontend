const loadingDiv = document.getElementById("loading");

$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
});
document.onload = loadingDiv.style.visibility = "hidden";
var random_id = localStorage.getItem("team_id");
const teamproj = () => {
  if (document.myform.projectname.value.trim() != "") {
    localStorage.setItem("teamproj", document.myform.projectname.value);
    window.location.href = "./TeamAdd_Project.html?" + random_id ;
  }
  else {
    swal("Error", "Please enter a valid Project Name!", "error")
  }
};