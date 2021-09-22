$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerwobtn.txt");
});
const loadingDiv = document.getElementById('loading');
let photo = "../Assets/Images/blank-profile.png";
let back = 0;
let count = 0;
let username;
let previous = 0;
let x = sessionStorage.getItem("GIT");
console.log(x);
if (sessionStorage.getItem("PREVIOUS") == 1) {
    console.log(sessionStorage.getItem("GIT"));
    console.log(sessionStorage.getItem("LINKEDIN"));
    document.form2.linkedln.value = sessionStorage.getItem("LINKEDIN");
    document.form2.git.value = sessionStorage.getItem("GIT");
    document.form2.website.value = sessionStorage.getItem("WEBSITE");
    document.form2.bio.value = sessionStorage.getItem("BIO");
    document.form2.linkedln.value = sessionStorage.getItem("LINKEDIN");
    previous = 0;
    sessionStorage.setItem("PREVIOUS", previous);
}
if (sessionStorage.getItem("COUNT") == 1) {
    console.log(sessionStorage.getItem("GIT"));
    console.log(sessionStorage.getItem("LINKEDIN"));
    document.form2.linkedln.value = sessionStorage.getItem("LINKEDIN");
    document.form2.git.value = sessionStorage.getItem("GIT");
    document.form2.website.value = sessionStorage.getItem("WEBSITE");
    document.form2.bio.value = sessionStorage.getItem("BIO");
    document.form2.linkedln.value = sessionStorage.getItem("LINKEDIN");
    count = 0;
    sessionStorage.setItem("COUNT", count);
}
function set_items() {
    back = 1;
    count = 1;
    sessionStorage.setItem("BACK", back);
    sessionStorage.setItem("COUNT", count);
    window.location.assign("./profile.html");
}
// console.log(count);
function secondpage_profile() {
    // count = count+1;
    const form2 = document.getElementById("form2");
    form2.addEventListener('submit', (e) => {
        (e).preventDefault();
        // const Name = toTitleCase(sessionStorage.getItem("NAME"));
        // username = sessionStorage.getItem("USERNAME");
        // const college = toTitleCase(sessionStorage.getItem("COLLEGE"));
        // const year = sessionStorage.getItem("YEAR");
        // console.log(Name,username,college,year);
        // function toTitleCase(str) {
        //     return str.replace(
        //         /\w\S*/g,
        //         function (txt) {
        //             return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        //         }
        //     );
        // }
        let linkedin = document.getElementById("linkedln");
        let git = document.getElementById("github");
        let website = document.getElementById("personal_website");
        let bio = document.getElementById("bio");
        let eval = validate(linkedin, git, website, bio);
        console.log(eval);
        sessionStorage.setItem("LINKEDIN", linkedin.value);
        sessionStorage.setItem("GIT", git.value);
        sessionStorage.setItem("WEBSITE", website.value);
        sessionStorage.setItem("BIO", bio.value);
        sessionStorage.setItem("EVAL", eval);
        if (eval == 4) {
            sessionStorage.setItem("LINKEDIN", linkedin.value);
            sessionStorage.setItem("GIT", git.value);
            sessionStorage.setItem("WEBSITE", website.value);
            sessionStorage.setItem("BIO", bio.value);
            console.log("form validation completed");
            window.location.assign("./profile_skills.html");
        }
        // firebase.auth().onAuthStateChanged((user) => {
        //     if (user) {
        //         user.getIdToken().then(function (idToken) {
        //             console.log(idToken)
        //             auth = idToken
        //             console.log(auth);
        //             if (eval == 3) {
        //                 console.log("form validation completed");
        //                 fetch(`${url}/participant/createProfile`, {

        //                     method: "POST",
        //                     headers: {
        //                         "Content-Type": "application/json; charset=utf-8",
        //                         Authorization: "Bearer " + auth,
        //                     },
        //                     body: JSON.stringify({
        //                         name: Name,
        //                         college: college,
        //                         github: git.value,
        //                         linkedIn: linkedin.value,
        //                         website: website.value,
        //                         photo: photo,
        //                         bio: bio.value,
        //                         graduation_year: year,
        //                         username: username
        //                     }),
        //                 })
        //                     .then((response) => response.text())
        //                     .then((text) => {
        //                         console.log("Success:", text);
        //                         window.location.assign("./profile_skills.html");
        //                     })
        //                     .catch((error) => {
        //                         console.log("Error:", error);
        //                     });
        //             }
        //         })
        //     } else {
        //         // User is signed out
        //         
        //     }
        // });
    });
}

function validate(linkedin, git, website, bio) {
    let flag = 0;
    linkedin.value = linkedin.value.trim();
    let regex = /((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/;
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
    if (regstr.test(git.value) === true) {
        onSuccess(git);
        flag = flag + 1;
    }
    else {
        onError(git, "Enter correct github profile link");
    }
    //personal website
    if (regstr.test(website.value) === true || website.value == "") {
        onSuccess(website);
        flag = flag + 1;
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

