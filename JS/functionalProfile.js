$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerwobtn.txt");
});
const loadingDiv = document.getElementById('loading');
let photo = "../Assets/Images/blank-profile.png";
let back = 0;
let change = 0;
let username;
// let count = 0;
if (localStorage.getItem("BACK") == 1) {
    document.form.name.value = sessionStorage.getItem("NAME");
    document.form.username.value = sessionStorage.getItem("USERNAME");
    document.form.college.value = sessionStorage.getItem("COLLEGE");
    document.form.year.value = sessionStorage.getItem("YEAR");
    back = 0;
    localStorage.setItem("BACK", back);
}
function firstpage_profile() {
    let Name = document.getElementById("name");
    let username = document.getElementById("username");
    let college = document.getElementById("college");
    let year = document.getElementById("year");
    const form = document.getElementById("form");
    let result = 0;
    form.addEventListener('submit', (e) => {
        (e).preventDefault();
        result = checkInputs(Name, username, college, year);
        if (result == 4) {
            sessionStorage.setItem("NAME", Name.value);
            sessionStorage.setItem("USERNAME", username.value);
            sessionStorage.setItem("COLLEGE", college.value);
            sessionStorage.setItem("YEAR", year.value);
            window.location.assign("./profile_2nd.html");
        }
    });
}
function set_items() {
    back = 1;
    localStorage.setItem("BACK", back);
    window.location.assign("./profile.html");
}
function secondpage_profile() {
    // count = count+1;
    const form2 = document.getElementById("form2");
    form2.addEventListener('submit', (e) => {
        (e).preventDefault();
        const Name = toTitleCase(sessionStorage.getItem("NAME"));
        username = sessionStorage.getItem("USERNAME");
        const college = sessionStorage.getItem("COLLEGE");
        const year = sessionStorage.getItem("YEAR");
        function toTitleCase(str) {
            return str.replace(
                /\w\S*/g,
                function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                }
            );
        }
        let linkedin = document.getElementById("linkedln");
        let git = document.getElementById("github");
        let website = document.getElementById("personal_website");
        let bio = document.getElementById("bio");
        localStorage.setItem("LINKEDIN", linkedin.value);
        localStorage.setItem("GIT", git.value);
        localStorage.setItem("WEBSITE", website.value);
        localStorage.setItem("BIO", bio.value);
        let eval = validate(linkedin, git, website, bio);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                user.getIdToken().then(function (idToken) {
                    auth = idToken
                    function checkusername() {
                        fetch(`${url}/participant/checkUserName/${username}`, {

                            method: "POST",
                            headers: {
                                Authorization: "Bearer " + auth,
                            },
                        })
                            .then((res) => {
                                if(res.status == 400)
                                {
                                  swal("Warning!!", "Some unknown error occured, please try again.", "warning");
                                }
                                if (res.status === 403) {
                                    signal = 100;
                                    swal("WARNING!!", "Please choose a unique username", "warning");
                                }
                                else{
                                    if (eval == 3) {
                                        fetch(`${url}/participant/createProfile`, {
        
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json; charset=utf-8",
                                                Authorization: "Bearer " + auth,
                                            },
                                            body: JSON.stringify({
                                                name: Name,
                                                college: college,
                                                github: git.value,
                                                linkedIn: linkedin.value,
                                                website: website.value,
                                                photo: photo,
                                                bio: bio.value,
                                                graduation_year: year,
                                                username: username
                                            }),
                                        })
                                            .then((response) => 
                                            
                                            {console.log("Bsk",response)
                                                if(response.status == 400)
                                                {
                                                  swal("Warning!!", "Some unknown error occured, please try again.", "warning");
                                                }
                                                if(response.status == 417)
                                                {
                                                  swal("Warning!!", "Please enter all the required fields.", "warning");
                                                }
                                                response.text()})
                                            .then((text) => {
                                                window.location.assign("./profile_skills.html");
                                            })
                                            .catch((error) => {
                                                console.log("Error:", error);
                                                if(error.response.status == 400)
                                                {
                                                  swal("Warning!!", "Some unknown error occured, please try again.", "warning");
                                                }
                                                if(error.response.status == 417)
                                                {
                                                  swal("Warning!!", "Please enter all the required fields.", "warning");
                                                }
                                            });
                                    }
                                }
                            })
                            .catch((error) => {
                                console.log(error);
                                console.log(error.message);
                                if(error.response.status == 400)
                                {
                                  swal("Warning!!", "Some unknown error occured, please try again.", "warning");
                                }
                                if (error.response.status === 403) {
                                    signal = 100;
                                    swal("WARNING!!", "Please choose a unique username", "warning");
                                }
                            })
                    }
                    checkusername()
                })
            } else {
                // User is signed out
                
            }
        });
    });
}
function checkInputs(Name, username, college, year) {
    let flag = 0;
    Name.value = Name.value.trim();
    username.value = username.value.trim();
    year.value = year.value.trim();
    college.value = college.value.trim();
    let col_name = college.value;
    let len = Name.value.length;
    let n = username.value.length;
    let reg1 = /^[a-zA-Z][a-zA-Z\s]*$/;
    let reg2 = /^(19|20)\d{2}$/;
    //name should be only alphabets and of max length 30
    if (len <= 30) {
        if (reg1.test(Name.value) === true) {
            onSuccess(Name);
            flag = flag + 1;
        }
        else {
            onError(Name, "Enter a valid name");
        }
    }
    else {
        onError(Name, "Enter a valid name");
    }
    if (n <= 20) {
        onSuccess(username);
        flag = flag + 1;
    }
    else {
        onError(username, "Username cannot be longer than 10 charecters");
    }
    //college name only alphabets
    let x = 0;
    for (let i = 0; i < col_name.length; i++) {
        if (col_name.charCodeAt(i) > 47 && col_name.charCodeAt(i) < 58) {
            onError(college, "Enter valid college name");
            x = 1;
            break;
        }
    }
    if (x == 0) {
        onSuccess(college);
        flag = flag + 1;
    }
    //year check
    if (year.value.match(reg2)) {
        onSuccess(year);
        flag = flag + 1;
    }
    else {
        onError(year, "Enter valid year");
    }
    return flag;
}

function validate(linkedin, git, website, bio) {
    let flag = 0;
    linkedin.value = linkedin.value.trim();
    let regex = /((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/;
    let github_regex = /https:\/\/github.com\//gm;
    let githubwww_regex = /https:\/\/www.github.com\//gm;
    let regstr = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    git.value = git.value.trim();
    website.value = website.value.trim();
    bio.value = bio.value.trim();
    let len = bio.value.length;
    //linkedin validation
    if (regex.test(linkedin.value) === true) {
        onSuccess(linkedin);
        flag = flag + 1;
    }
    else {
        onError(linkedin, "Enter correct linkedIn profile link");
    }
    //github profile link validation
    if (github_regex.test(git.value) === true) {
        onSuccess(git);
        flag = flag + 1;
    }
    else if(githubwww_regex.test(git.value) === true){
        onSuccess(git);
        flag = flag + 1;
    }
    else {
        onError(git, "Enter correct github profile link");
    }
    //personal website
    if (regstr.test(website.value) === true || website.value == "") {
        onSuccess(website);
    }
    else {
        onError(website, "Enter correct website link");
    }
    //setting limit to bio
    if (len <= 200) {
        onSuccess(bio);
        flag = flag + 1;
    }
    else {
        onError(bio, "bio should not exceed 200 characters");
    }
    return flag;
}
function onSuccess(input) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "hidden";
}
function onError(input, message) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.innerText = message;
}

