$(document).ready(function () {
    $("#nav").load("../Header/header.txt");
    $("#foobottom").load("../Footer/footer.txt");
});
const form=document.getElementById("form");
form.addEventListener('submit',(e)=>{
    (e).preventDefault();
    const name=document.getElementById('name').value;
    const phone_num=document.getElementById('phone_num').value;
    const college=document.getElementById('college').value;
    const email=document.getElementById('email').value;
    const website=document.getElementById('website').value;

    console.log(name);
    console.log(phone_num);
    console.log(college);
    console.log(email);
    console.log(website);

    form.reset()
});