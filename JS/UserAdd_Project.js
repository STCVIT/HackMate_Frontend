$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerl.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
});

const url='https://hackportalbackend.herokuapp.com';
auth="eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc3MTBiMDE3ZmQ5YjcxMWUwMDljNmMzNmIwNzNiOGE2N2NiNjgyMTEiLCJ0eXAiOiJKV1QifQ.eyJwYXJ0aWNpcGFudCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2hhY2twb3J0YWwtNDUwZDAiLCJhdWQiOiJoYWNrcG9ydGFsLTQ1MGQwIiwiYXV0aF90aW1lIjoxNjI2NjE4NjU3LCJ1c2VyX2lkIjoib3hxeXN2bHB2VWU3dXBkcGJVaXNGS0Qyc1I5MyIsInN1YiI6Im94cXlzdmxwdlVlN3VwZHBiVWlzRktEMnNSOTMiLCJpYXQiOjE2MjY2MTg2NTcsImV4cCI6MTYyNjYyMjI1NywiZW1haWwiOiJtZWdoYW1haXRpbjI3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm1lZ2hhbWFpdGluMjdAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.e5MTth6GW4IcRrVpKk-9C1PeMvpXeLPuBqZNwJd3NoJZVe1uNJ8VYoODH7cuJRtbAER0WtW2RQHsg0t-xv5tlg6_D3tq5jHUW_dgCpBdHbe_bBuYAywkZ7l-BUT-p_KO0n3KH21hTB2EubMEDtvt64wn1nJpESM6TZGtL-NKhfhD7WkDvnKE1AmvQgTOEIjvCKlbEJH49H6VsADshkln1x8lbQlmezUGd7KoB63szFlb_ZYVB_a__kVUcqZ-3C2bvmhFQ24vS_BROKIIJtSeruhpXJ57km5jYqagHME0byu4MW6wz-uYCR4peS53KHneALHqckGzPB45x727QrK0nQ"
var project;

axios(`${url}/projects/create`, 
{
  name: document.project_form.name.value,
  code: document.project_form.git.value,
  design: document.project_form.design.value,
  demonstration: document.project_form.personal_website.value,
  description: document.form.bio.value
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
