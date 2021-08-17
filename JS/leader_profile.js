$(document).ready(function () {
    $("#nav").load("../Assets/Header/headerl.txt");
    $("#foobottom").load("../Assets/Footer/footer.txt");
});

function submit(){
    axios
  .post(`${url}/DN_Team/addSkills/${window.location.search.split("?")[1]}`,
  {
    skills : choice,
  },
  {
    headers: {
      Authorization: "Bearer " + auth,
    },
  }
  )
  .then((response) => {
    talent = response.data;
    console.log(talent);
    swal("SUCCESS!!", "The skills has been submitted successfully.", "success");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}