$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerl.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
});

var project;
axios(`${url}/projects/get/${window.location.search.split("?")[1]}`, {
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
