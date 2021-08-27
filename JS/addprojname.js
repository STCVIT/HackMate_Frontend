$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
});


const project_name = () => {
  localStorage.setItem("project_name", document.myform.projectname.value);
}