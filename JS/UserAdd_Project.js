$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerl.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
});

const url='https://hackportalbackend.herokuapp.com';
auth="eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc3MTBiMDE3ZmQ5YjcxMWUwMDljNmMzNmIwNzNiOGE2N2NiNjgyMTEiLCJ0eXAiOiJKV1QifQ.eyJwYXJ0aWNpcGFudCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2hhY2twb3J0YWwtNDUwZDAiLCJhdWQiOiJoYWNrcG9ydGFsLTQ1MGQwIiwiYXV0aF90aW1lIjoxNjI2NjkxMjcyLCJ1c2VyX2lkIjoib3hxeXN2bHB2VWU3dXBkcGJVaXNGS0Qyc1I5MyIsInN1YiI6Im94cXlzdmxwdlVlN3VwZHBiVWlzRktEMnNSOTMiLCJpYXQiOjE2MjY2OTEyNzIsImV4cCI6MTYyNjY5NDg3MiwiZW1haWwiOiJtZWdoYW1haXRpbjI3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lZ2hhbWFpdGluMjdAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.DUXv_K9m0Yh5fZw6If9l7hLWP68T-u1N9hFMHak9J0nqBTv6hIntmFu5gnPLOUiVZSjZe-JO_sN5yyWbMwM1fYKrbwA6NZh9jBZbWnxANw2gLE4mZYVab2w9ImVKEQOK8DL92ldyAGWMxoDAVPTdadZYSoERtE9gczei4IruBspXWFZkVlQcCqFOHagi635_l3ZBA6ayPb5QZF5OZsgEZE4vuphY_cb7tCQO231ZoEv6xzm8tUALBEEqoWxLp1auQctS-XNKH5noxZeOtUxInvmJiCRjnPqnQ1eKyAQAqMlSOuykdItpg0-7FnEZN8t0rPlButvkfZQvIBN2Fp6DvQ"
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
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}
