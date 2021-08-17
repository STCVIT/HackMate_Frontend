$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerl.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
});

const project_form= document.getElementById("project_form");
project_form.addEventListener('submit',(e)=>{
  (e).preventDefault();
});
const form = document.getElementById("form");
form.addEventListener('submit',(e) =>{
  (e).preventDefault();
});
function submitform(){
  let name = localStorage.getItem("project_name");
  let git = document.getElementById("git").value;
  let design = document.getElementById("design").value;
  let demo = document.getElementById("personal_website").value;
  let bio = document.getElementById("bio").value;
  axios 
  .post(`${url}/projects/create`,
  {
    name: name,
    code: git,
    design: design,
    demonstration: demo,
    description: bio
  },
  {
    headers: {
      Authorization: "Bearer " + auth,
    },
  }
  )
  .then((response) => {
    console.log("Success:", response.data);
    swal("SUCCESS!!", "Project has been created successfully", "success");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}
