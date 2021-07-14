$(document).ready(function () {
  $("#nav").load("../Assets/Header/headero.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});

axios(`${url}/organiser/hacks`, {
  headers: {
    Authorization: "Bearer " + auth,
  },
})
  .then((response) => {
    hacks = response.data;
    console.log(hacks);

    for (var i = 0; i < hacks.length; i++) {
      document.querySelector(".wrapper").innerHTML +=
        "<div class='box'> <a href='./orghackprofile.html' style='text-decoration: none;'> <div class='innertxt'> <div class='hackname'> <nb1>" +
        hacks[i].name +
        ". </nb1> </div> <br> <div class='dates'> <div class='box1 start'> <div class='nbg'> <nbg>Begins:</nbg> <div class='nbw'> <nbw>" +
        hacks[i].start.split("T")[0] +
        "</nbw> </div> </div> </div> <div class='box2 end'> <div class='nbg'> <nbg>Ends:</nbg> <div class='nbw'> <nbw>" +
        hacks[i].end.split("T")[0] +
        "</nbw> </div> </div> </div> </div> <div class='nbg'> <nbg>Venue: </nbg> <nbw>" +
        hacks[i].venue +
        "</nbw> </div> <div class='nbg'> <nbg>Max Team Size: </nbg> <nbw> " +
        hacks[i].max_team_size +
        " Participants</nbw> </div> <div class='nbg'> <nbg>Prize Pool: </nbg> <nbw></nbw>" +
        hacks[i].prize_pool +
        "</div> <div class='status'> <circle class='circle1'></circle> <circle class='circle2'></circle> <circle class='circle3'></circle>" +
        hacks[i].mode_of_conduct +
        "</div> </div> </a></div>";
    }
  })
  .catch((error) => console.error("Error: " + error));
