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
if (sessionStorage.getItem("PREVIOUS") == 1) {
    document.form2.linkedln.value = sessionStorage.getItem("LINKEDIN");
    document.form2.git.value = sessionStorage.getItem("GIT");
    document.form2.website.value = sessionStorage.getItem("WEBSITE");
    document.form2.bio.value = sessionStorage.getItem("BIO");
    document.form2.linkedln.value = sessionStorage.getItem("LINKEDIN");
    previous = 0;
    sessionStorage.setItem("PREVIOUS", previous);
}
if (sessionStorage.getItem("COUNT") == 1) {
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
function secondpage_profile() {
    // count = count+1;
    const form2 = document.getElementById("form2");
    form2.addEventListener('submit', (e) => {
        (e).preventDefault();
        let linkedin = document.getElementById("linkedln");
        let git = document.getElementById("github");
        let website = document.getElementById("personal_website");
        let bio = document.getElementById("bio");
        let eval = validate(linkedin, git, website, bio);
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
            window.location.assign("./profile_skills.html");
        }
    });
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
        onError(git, "Enter correct GitHub profile link");
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

$(document).ready(function() {
    var max = 200;
    $('#feedback').html(max + 'characters remaining');

    $('#bio').keyup(function() {
        var text_length = $('#bio').val().length;
        var text_remaining = max - text_length;

        $('#feedback').html(text_remaining + ' characters remaining');
    });
});