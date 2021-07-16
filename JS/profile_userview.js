$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerl.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
});

var user;
const url="";

axios(`${url}/participant/login`, {
    headers: {
        Authorization: "Bearer " + idToken,
    },
})
.then((response) => {
    user = response.data;
    document.par_form.name.value = user.name;
    document.par_form.username.value = user.username;
    document.querySelector("#email").innerHTML = user.email;
    document.par_form.college.value = user.college;
    document.par_form.git.value = user.git;
    document.par_form.linkedln.value = user.linkedin;
    document.par_form.personal_website.value = user.website;
    document.par_form.year.value = user.year;
    console.log(user);
})
.catch((error) => console.error("Error: " + error));

function delete_accoount(){
  axios 
    .delete(`${url}/participant/deleteProfile`, {
        headers: {
            Authorization: "Bearer " + auth,
        },
    })
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => console.error("Error: " + error));
  
    window.location = "";
}

function update_account() {
  axios
    .patch(
        `${url}/participant/updateProfile`,
        {
            name: document.par_form.name.value,
            username: document.par_form.username.value,
            college: document.par_form.college.value,
            git: document.par_form.git.value,
            linkedin: document.par_form.linkedln.value,
            website: document.par_form.personal_website.value,
            year: document.par_form.year.value
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