$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerwobtn.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
});
const form=document.getElementById("form");
form.addEventListener('submit',(e)=>{
    (e).preventDefault();
    const name=document.getElementById('name').value;
    const phone_num=document.getElementById('phone_num').value;
    const college=document.getElementById('college').value;
    const website=document.getElementById('website').value;
    checkInputs(name,phone_num,college);

    form.reset()
});

function checkInputs(name,phone_num,college){
    name=name.toUpperCase();
    let n =name.length;
    if(n<=30){
        if()
    }
}