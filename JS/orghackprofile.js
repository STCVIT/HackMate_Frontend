$(document).ready(function () {
  $("#nav").load("../Assets/Header/headero.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});

axios(`${url}/organiser/hack/${window.location.search.split("?")[1]}`, {
  headers: {
    Authorization: "Bearer " + auth,
  },
})
  .then((response) => {
    hack = response.data;
    console.log(hack);
    document.myform.name.value = hack.name;
    document.myform.venue.value = hack.venue;
    document.myform.moc.value = hack.mode_of_conduct;
    document.myform.website.value = hack.website;
    //document.myform.bio.value = hack.description;
    document.myform.start.value = hack.start.split("Z")[0];
    document.myform.end.value = hack.end.split("Z")[0];
    //document.myform.mints.value = hack.min_team_size;
    document.myform.maxts.value = hack.max_team_size;
    document.myform.prizes.value = hack.prize_pool;
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function deleteHack() {
  axios
    .delete(
      `${url}/organiser/deleteHack/:${window.location.search.split("?")[1]}`,
      {
        headers: {
          Authorization: "Bearer " + auth,
        },
      }
    )
    .then((response) => {
      hack = response.data;
      console.log(hack);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
