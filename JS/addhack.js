$(document).ready(function () {
  $("#nav").load("../Assets/Header/headero.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.myform.name.value;
  var venue = document.myform.venue.value;
  var moc = document.myform.moc.value;
  var website = document.myform.website.value;
  var about = document.myform.about.value;
  var start = new Date(
    document.myform.start.value.split("T")[0] +
      " " +
      document.myform.start.value.split("T")[1] +
      " GMT+05:30"
  );
  var end = new Date(
    document.myform.end.value.split("T")[0] +
      " " +
      document.myform.end.value.split("T")[1] +
      " GMT+05:30"
  );
  var mints = document.myform.mints.value;
  var maxts = document.myform.maxts.value;
  var prizes = document.myform.prizes.value;

  axios
    .post(
      `${url}/organiser/createHack`,
      {
        name: name,
        venue: venue,
        start: start,
        end: end,
        poster: "aGV5",
        max_team_size: maxts,
        mode_of_conduct: moc,
        prize_pool: prizes,
        description: about,
        website: website,
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
});

// fetch(`${url}/organiser/createHack`, {

//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + auth,
//   },
//   body: JSON.stringify({
//     name: "Brew",
//     venue: "VIT",
//     start: "2021-07-01",
//     end: "2021-07-30",
//     poster: "aGV5",
//     max_team_size: 4,
//     mode_of_conduct:"Offline",
//     prize_pool:100000,
//     description:"Testing 101",
//     website:"google.com"
//   }),
// }).then((response)=>response.json())
//   .then((data) => {
//     console.log("Success:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// axios(`${url}/organiser/createHack`, {

//   method: "POST",
//   headers: {
//     Authorization: "Bearer " + auth,
//   },
//   data: {
//     name: "Brew",
//     venue: "VIT",
//     start: "2021-07-01",
//     end: "2021-07-30",
//     poster: "aGV5",
//     max_team_size: 4,
//     mode_of_conduct:"Offline",
//     prize_pool:100000,
//     description:"Testing 101",
//     website:"google.com"
//   },
// })
//   .then((data) => {
//     console.log("Success:", data.data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// axios.post(`${url}/organiser/createHack`,{
//     name: "Brew",
//     venue: "VIT",
//     start: "2021-07-01",
//     end: "2021-07-30",
//     poster: "aGV5",
//     max_team_size: 4,
//     mode_of_conduct:"Offline",
//     prize_pool:100000,
//     description:"Testing 101",
//     website:"google.com"},
//  {
// headers: {
//     Authorization: "Bearer " + auth,
//   },
// })
//   .then((data) => {
//     console.log("Success:", data.data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
