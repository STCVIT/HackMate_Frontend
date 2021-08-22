$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerwobtn.txt");
});
let photo ="HEY";
function firstpage_profile(){
    let Name=document.getElementById("name");
    let username=document.getElementById("username");
    let college=document.getElementById("college");
    let year=document.getElementById("year");
    const form=document.getElementById("form");
    let result=0;
    form.addEventListener('submit',(e)=>{
    (e).preventDefault();
    result=checkInputs(Name,username,college,year);
    console.log(result);
    if (result==4){
        sessionStorage.setItem("NAME",Name.value);
        sessionStorage.setItem("USERNAME",username.value);
        sessionStorage.setItem("COLLEGE",college.value);
        sessionStorage.setItem("YEAR",year.value);
        window.location.assign("./profile_2nd.html");
    }
});
}
function secondpage_profile(){
const form2=document.getElementById("form2");
form2.addEventListener('submit',(e)=>{
    (e).preventDefault();
    const Name=sessionStorage.getItem("NAME");
    const username=sessionStorage.getItem("USERNAME");
    const college=sessionStorage.getItem("COLLEGE");
    const year=sessionStorage.getItem("YEAR");


    let linkedin=document.getElementById("linkedln");
    let git=document.getElementById("github");
    let website=document.getElementById("personal_website");
    let bio=document.getElementById("bio");
    let eval=validate(linkedin,git,website,bio);
    console.log(eval);
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          user.getIdToken().then(function(idToken){
            console.log(idToken)
            auth = idToken
    if(eval==1)
    {
        console.log("form validation completed");
        fetch(`${url}/participant/createProfile`, {

            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              Authorization: "Bearer " + auth,
            },
            body: JSON.stringify({
                name:Name,
                college: college,
                github:git.value,
                linkedIn:linkedin.value,
                website: website.value,
                photo:photo,
                bio:bio.value,
                graduation_year:year,
                username:username
            }),
        })
        .then((response)=>response.text())
        .then((text) => {
            console.log("Success:",text);
            window.location.assign("./profile_skills.html");
        })
        .catch((error) => {
            console.log("Error:", error);
        });
    }
})
} else {
  // User is signed out
  console.log("I'm signed out!")
}
});
});
}
function checkInputs(Name,username,college,year){
    let flag=0;
    let current_year= new Date().getFullYear();
    Name.value=Name.value.trim();
    username.value=username.value.trim();
    year.value=year.value.trim();
    college.value=college.value.trim();
    let len=Name.value.length;
    let n = username.value.length;
    let reg1= /^[a-zA-Z][a-zA-Z\s]*$/;
    let reg2=/(19|20)\d{2}$/;
    //name should be only alphabets and of max length 30
    if(len<=30){
        if(reg1.test(Name.value) === true){ 
            onSuccess(Name);
            flag=flag+1;
        }
        else{
            onError(Name,"Enter a valid name");
        }
    }
    else{
        onError(Name,"Enter a valid name");
    }
    //username should be only alphabets and of max length 30
    if(n<=20){
            onSuccess(username);
            flag=flag+1;
    }
    else{
        onError(username,"Username cannot be longer than 10 charecters");
    }
    //college name only alphabets
    if(college.value.match(reg1)){
        onSuccess(college);
        flag=flag+1;
    }
    else{
        onError(college,"Enter valid college name");
    }
    //year check
    if(year.value.match(reg2)){
            onSuccess(year);
            flag=flag+1;
    }
    else{
        onError(year,"Enter valid year");
    }
    return flag;
}

function validate(linkedin,git,website,bio){
    let flag=0;
    linkedin.value=linkedin.value.trim();
    let regex=/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/;
    let regstr=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
    git.value=git.value.trim();
    website.value=website.value.trim();
    bio.value=bio.value.trim();
    let len=bio.value.length;
    //linkedin validation
    if(regex.test(linkedin.value) === true){
        onSuccess(linkedin);
    }
    else{
        onError(linkedin,"Enter correct linkedIn profile link");
    }
    //github profile link validation
    if(regstr.test(git.value) === true){
        onSuccess(git);
    }
    else{
        onError(git,"Enter correct github profile link");
    }
    //personal website
    if(regstr.test(website.value) === true){
        onSuccess(website);
    }
    else{
        onError(website,"Enter correct website link");
    }
    //setting limit to bio
    if(len<=200){
        onSuccess(bio);
        flag=flag+1;
    }
    else{
        onError(bio,"bio should not exceed 200 characters");
    }
    return flag;
}
function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";  
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
}