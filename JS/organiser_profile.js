$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerwobtn.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
});

const form=document.getElementById("form");
form.addEventListener('submit',(e)=>{
    (e).preventDefault();
    let username=document.getElementById("name");
    let phone_num=document.getElementById("phone");
    let college=document.getElementById("college");
    let website=document.getElementById("website");
    let logo="HEY";
    let res=checkInputs(username,phone_num,college);
    if(res==3)
    {
        auth="eyJhbGciOiJSUzI1NiIsImtpZCI6IjhmNDMyMDRhMTc5MTVlOGJlN2NjZDdjYjI2NGRmNmVhMzgzYzQ5YWIiLCJ0eXAiOiJKV1QifQ.eyJvcmdhbmlzZXIiOnRydWUsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9oYWNrcG9ydGFsLTQ1MGQwIiwiYXVkIjoiaGFja3BvcnRhbC00NTBkMCIsImF1dGhfdGltZSI6MTYyNjI1OTYxMiwidXNlcl9pZCI6IkM4d2tNODJ1MnBXV1plYUdZYXVMcXVadnJmTzIiLCJzdWIiOiJDOHdrTTgydTJwV1daZWFHWWF1THF1WnZyZk8yIiwiaWF0IjoxNjI2MjU5NjEyLCJleHAiOjE2MjYyNjMyMTIsImVtYWlsIjoic2hyZXlhbi5zYW55YWwyMDIwQHZpdHN0dWRlbnQuYWMuaW4iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJzaHJleWFuLnNhbnlhbDIwMjBAdml0c3R1ZGVudC5hYy5pbiJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.fjoYpI9yFzXdIpCSd3ZK8sLO5hd-dvk8XwCCmW8vsEqCF3ATdpIgMDyziyAQFMEGdfi6zPwdW51dEP2YAdHYWltRDY2O5uxCMoxk7tPyz4j6i4hiTxgypmxpFGWTojg-S9NHiDt4zY04bF-bw_0og6GtEAQMJO8u5s0eaHrvKFu6J6wvJclRDPsvyeBnatZ7HrsZ-V2TF0g61n_vSFt-lvE0mljHupKh6UazG2OP0kK0u8nrFJgEGmEt1LlH2VREw2-W7Hbmr3xeHw5Q3BU7Ve5SGyI0oyuluBpaogadOwZ9BljOvThsbj6LIN07OtRp0KAIhcu4LZpZn5TuEj7Vtg"
        console.log("form validation completed");
        const url = 'https://hackportalbackend.herokuapp.com';
        fetch(`${url}/organiser/createProfile`, {

            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              Authorization: "Bearer " + auth,
            },
            body: JSON.stringify({
                name: username.value,
                college: college.value,
                phone: phone_num.value,
                website: website.value,
                logo: logo
            }),
        })
        .then((response)=>response.text())
        .then((text) => {
            console.log("Success:",text);
        })
        /*.then(response => {
            console.log(response.status);
            if (response.status == 200) {
              window.location.assign("./addhack.html");
            }
          })*/
        .catch((error) => {
            console.log("Error:", error);
        });
    } 
});
function checkInputs(username,phone_num,college){
    let flag=0;
    //name should be only alphabets and of max length 30
    username.value=username.value.trim().toUpperCase();
    college.value=college.value.toUpperCase();
    let n = username.value.length;
    let reg1=/^[A-Z][A-Z\s]*$/;
    let reg2=/^[1-9]\d{9}$/;
    if(n<=30){
        if(reg1.test(username.value) === true){ 
            onSuccess(username);
            flag=flag+1;
        }
        else{
            onError(username,"Enter a valid name");
        }
    }
    else{
        onError(username,"Enter a valid name");
    }
    //10 digit phone number
    if(phone_num.value.match(reg2)){
        onSuccess(phone_num);
        flag=flag+1;
    }
    else{
        onError(phone_num,"Enter a valid phone number");
    }
    //college name only alphabets
    if(college.value.match(reg1)){
        onSuccess(college);
        flag=flag+1;
    }
    else{
        onError(college,"Enter valid college name");
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