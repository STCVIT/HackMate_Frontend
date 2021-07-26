$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerl.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
});

var project;
randomId= "60f40654c24a1800158ed33f"
axios(`${url}/projects/get/${randomId}`, {
    headers: {
        Authorization: "Bearer " + auth,
    },
})
 .then((response) => {
     project = response.data;
     console.log(project);
     document.querySelector("#git").innerHTML = project.code;
     document.querySelector("#design").innerHTML = project.design;
     document.querySelector("#personal_website").innerHTML = project.demonstration;
     document.querySelector("#bio").innerHTML = project.description;
 })
 .catch((error) => console.error("Error: " + error));
