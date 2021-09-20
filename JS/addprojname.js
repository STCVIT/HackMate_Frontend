const loadingDiv = document.getElementById("loading");

$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
});

const project_name = () => {
  if (document.myform.projectname.value.trim() != "") {
    localStorage.setItem("project_name", document.myform.projectname.value);
    window.location.href = "./UserAdd_Project.html"
  }
  else {
    swal("Error", "Please enter a valid Project Name!", "error")
  }
};

document.onload = loadingDiv.style.visibility = "hidden";
