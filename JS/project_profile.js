$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerl.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
});

const url='https://hackportalbackend.herokuapp.com';
auth="eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc3MTBiMDE3ZmQ5YjcxMWUwMDljNmMzNmIwNzNiOGE2N2NiNjgyMTEiLCJ0eXAiOiJKV1QifQ.eyJwYXJ0aWNpcGFudCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2hhY2twb3J0YWwtNDUwZDAiLCJhdWQiOiJoYWNrcG9ydGFsLTQ1MGQwIiwiYXV0aF90aW1lIjoxNjI2Njc2ODgyLCJ1c2VyX2lkIjoib3hxeXN2bHB2VWU3dXBkcGJVaXNGS0Qyc1I5MyIsInN1YiI6Im94cXlzdmxwdlVlN3VwZHBiVWlzRktEMnNSOTMiLCJpYXQiOjE2MjY2NzY4ODIsImV4cCI6MTYyNjY4MDQ4MiwiZW1haWwiOiJtZWdoYW1haXRpbjI3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lZ2hhbWFpdGluMjdAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.i5eiVIY22TKX0dNagLoRKylKZqfbTd22JCMupM8j1tADlWDv68a8fYbidc3yUwknjoZcUIP6wq-jLdda7iQNlXWGu-SkU_hBtveEo5QqMz16XVn3KOsZikrHyL0e8Mjuf1e0nh0dI-doWlFD-2NnMa7TPrd-1Xf26ttr8t8UHGKHCgqJKBk1LTh3G-WReCPzerz6BURCqTJLRSq6zB4dU-ryH65MXXv5XEj33YyOb72M6ov_cb41ELosXv4iXpqTO9hzFQineqe0dVljwZzdZjak3ItOA9a4UJh1_mty6eCIAQxhTNBKa1k-VrxBy6wzZDIyIL-h5b6uXw2yFpZPLg"
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
