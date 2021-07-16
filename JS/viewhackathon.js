var hacks = {};
var eventot = "all";
const all = document.querySelector("#all");
const ongoing = document.querySelector("#ongoing");
const upcoming = document.querySelector("#upcoming");
const popular = document.querySelector("#popularity");

$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
  axios(`${url}/getHacks/all?page=1`, {
    headers: {
      Authorization: "Bearer " + auth,
    },
  })
    .then((response) => {
      hacks = response.data;
      console.log(hacks);
      for (var i = 0; i < hacks.length; i++) {
        document.querySelector(".wrapper").innerHTML +=
          "<div class='box'><img src='../Assets/Images/Name Banner.png' class='namebanner' alt=''> <div class='innertxt'> <nb1 class='hackname'>" +
          hacks[i].name +
          " <a href='" +
          hacks[i].website +
          "'><img src='../Assets/Images/Hack Link.svg' alt=''></a></nb1> <br> <div class='dates'> <div class='box1 start'> <div class='nbg'> <nbg>Begins:</nbg> <div class='nbw'> <nbw class='startd'>" +
          //hacks[i].start.split("T")[0] +
          new Date(hacks[i].start.split("T")[0]).toString().split(" ")[2] +
          " " +
          new Date(hacks[i].start.split("T")[0]).toString().split(" ")[1] +
          " " +
          new Date(hacks[i].start.split("T")[0]).toString().split(" ")[3] +
          " " +
          "</nbw> </div> </div> </div> <div class='box2 end'> <div class='nbg'> <nbg>Ends:</nbg> <div class='nbw'> <nbw class='endd'>" +
          //hacks[i].end.split("T")[0] +
          new Date(hacks[i].end.split("T")[0]).toString().split(" ")[2] +
          " " +
          new Date(hacks[i].end.split("T")[0]).toString().split(" ")[1] +
          " " +
          new Date(hacks[i].end.split("T")[0]).toString().split(" ")[3] +
          " " +
          "</nbw> </div> </div> </div> </div> <div class='nbg'> <nbg>Venue: </nbg> <nbw class='venue'>" +
          hacks[i].venue +
          "</nbw> </div> <div class='nbg'> <nbg>Team Size: </nbg> <nbw class='ts'>" +
          +hacks[i].min_team_size +
          "-" +
          hacks[i].max_team_size +
          "</nbw><nbw> Participants</nbw> </div> <div class='nbg'> <nbg>Prize Pool: </nbg> <nbw></nbw>" +
          hacks[i].prize_pool +
          "</div><div class='status'><circle class='circle1'></circle><circle class='circle2'></circle><circle class='circle3'></circle>" +
          hacks[i].mode_of_conduct +
          "</div> <a class='btnkm btn btn-success' href='./hackdetails.html?" +
          hacks[i]._id +
          "' role='button'>Know More</a> </div> </div>";

        document.querySelector(".wrapper1").innerHTML =
          "<button class='pagenation' onclick='events(event)'>1</button><button class='pagenation' onclick='events(event)'>2</button><button class='pagenation' onclick='events(event)'>3</button><span class='dots'>...</span><button class='pagenation' onclick='events(event)'>7</button><button class='pagenation' onclick='events(event)'>8</button><button class='pagenation' onclick='events(event)'>9</button>";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

all.addEventListener("click", function () {
  if (all.classList == "button") {
    all.classList.remove("button");
    all.classList.add("button1");
  } else if (all.classList == "button1") {
    all.classList.remove("button1");
    all.classList.add("button");
    ongoing.classList.remove("button");
    ongoing.classList.add("button1");
    upcoming.classList.remove("button");
    upcoming.classList.add("button1");
    popular.classList.remove("button");
    popular.classList.add("button1");
  }
});
ongoing.addEventListener("click", function () {
  if (ongoing.classList == "button") {
    ongoing.classList.remove("button");
    ongoing.classList.add("button1");
  } else if (ongoing.classList == "button1") {
    ongoing.classList.remove("button1");
    ongoing.classList.add("button");
    all.classList.remove("button");
    all.classList.add("button1");
    upcoming.classList.remove("button");
    upcoming.classList.add("button1");
    popular.classList.remove("button");
    popular.classList.add("button1");
  }
});
upcoming.addEventListener("click", function () {
  if (upcoming.classList == "button") {
    upcoming.classList.remove("button");
    upcoming.classList.add("button1");
  } else if (upcoming.classList == "button1") {
    upcoming.classList.remove("button1");
    upcoming.classList.add("button");
    all.classList.remove("button");
    all.classList.add("button1");
    ongoing.classList.remove("button");
    ongoing.classList.add("button1");
    popular.classList.remove("button");
    popular.classList.add("button1");
  }
});

popular.addEventListener("click", function () {
  if (popular.classList == "button") {
    popular.classList.remove("button");
    popular.classList.add("button1");
  } else if (popular.classList == "button1") {
    popular.classList.remove("button1");
    popular.classList.add("button");
    all.classList.remove("button");
    all.classList.add("button1");
    ongoing.classList.remove("button");
    ongoing.classList.add("button1");
    upcoming.classList.remove("button");
    upcoming.classList.add("button1");
  }
});

// fetch(`${url}/getHacks/all?page=1`, {
//   headers: {
//
//     Authorization: "Bearer " + auth,
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     hacks = data;
//     console.log(hacks);
//     console.log("Success:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

function events(event) {
  console.log(event);
  var eventocc = event.target.innerHTML;
  console.log(eventocc);
  axios(`${url}/getHacks/${eventot}?page=${eventocc}`, {
    headers: {
      Authorization: "Bearer " + auth,
    },
  })
    .then((response) => {
      hacks = response.data;
      console.log(hacks);
      document.querySelector(".wrapper").innerHTML = "";
      for (var i = 0; i < hacks.length; i++) {
        document.querySelector(".wrapper").innerHTML +=
          "<div class='box'><img src='../Assets/Images/Name Banner.png' class='namebanner' alt=''> <div class='innertxt'> <nb1 class='hackname'>" +
          hacks[i].name +
          " <a href='" +
          hacks[i].website +
          "'><img src='../Assets/Images/Hack Link.svg' alt=''></a></nb1> <br> <div class='dates'> <div class='box1 start'> <div class='nbg'> <nbg>Begins:</nbg> <div class='nbw'> <nbw class='startd'>" + //hacks[i].start.split("T")[0] +
          new Date(hacks[i].start.split("T")[0]).toString().split(" ")[2] +
          " " +
          new Date(hacks[i].start.split("T")[0]).toString().split(" ")[1] +
          " " +
          new Date(hacks[i].start.split("T")[0]).toString().split(" ")[3] +
          " " +
          "</nbw> </div> </div> </div> <div class='box2 end'> <div class='nbg'> <nbg>Ends:</nbg> <div class='nbw'> <nbw class='endd'>" +
          //hacks[i].end.split("T")[0] +
          new Date(hacks[i].end.split("T")[0]).toString().split(" ")[2] +
          " " +
          new Date(hacks[i].end.split("T")[0]).toString().split(" ")[1] +
          " " +
          new Date(hacks[i].end.split("T")[0]).toString().split(" ")[3] +
          " " +
          "</nbw> </div> </div> </div> </div> <div class='nbg'> <nbg>Venue: </nbg> <nbw class='venue'>" +
          hacks[i].venue +
          "</nbw> </div> <div class='nbg'> <nbg>Team Size: </nbg> <nbw class='ts'>" +
          +hacks[i].min_team_size +
          "-" +
          hacks[i].max_team_size +
          "</nbw><nbw> Participants</nbw> </div> <div class='nbg'> <nbg>Prize Pool: </nbg> <nbw></nbw>" +
          hacks[i].prize_pool +
          "</div><div class='status'><circle class='circle1'></circle><circle class='circle2'></circle><circle class='circle3'></circle>" +
          hacks[i].mode_of_conduct +
          "</div> <a class='btnkm btn btn-success' href='./hackdetails.html?" +
          hacks[i]._id +
          "' role='button'>Know More</a> </div> </div>";

        document.querySelector(".wrapper1").innerHTML =
          "<button class='pagenation' onclick='events(event)'>1</button><button class='pagenation' onclick='events(event)'>2</button><button class='pagenation' onclick='events(event)'>3</button><span class='dots'>...</span><button class='pagenation' onclick='events(event)'>7</button><button class='pagenation' onclick='events(event)'>8</button><button class='pagenation' onclick='events(event)'>9</button>";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function getdeets(event) {
  eventot = event.target.id;
  axios(`${url}/getHacks/${event.target.id}?page=1`, {
    headers: {
      Authorization: "Bearer " + auth,
    },
  })
    .then((response) => {
      hacks = response.data;
      console.log(hacks);
      document.querySelector(".wrapper").innerHTML = "";
      for (var i = 0; i < hacks.length; i++) {
        document.querySelector(".wrapper").innerHTML +=
          "<div class='box'><img src='../Assets/Images/Name Banner.png' class='namebanner' alt=''> <div class='innertxt'> <nb1 class='hackname'>" +
          hacks[i].name +
          " <a href='" +
          hacks[i].website +
          "'><img src='../Assets/Images/Hack Link.svg' alt=''></a></nb1> <br> <div class='dates'> <div class='box1 start'> <div class='nbg'> <nbg>Begins:</nbg> <div class='nbw'> <nbw class='startd'>" + //hacks[i].start.split("T")[0] +
          new Date(hacks[i].start.split("T")[0]).toString().split(" ")[2] +
          " " +
          new Date(hacks[i].start.split("T")[0]).toString().split(" ")[1] +
          " " +
          new Date(hacks[i].start.split("T")[0]).toString().split(" ")[3] +
          " " +
          "</nbw> </div> </div> </div> <div class='box2 end'> <div class='nbg'> <nbg>Ends:</nbg> <div class='nbw'> <nbw class='endd'>" +
          //hacks[i].end.split("T")[0] +
          new Date(hacks[i].end.split("T")[0]).toString().split(" ")[2] +
          " " +
          new Date(hacks[i].end.split("T")[0]).toString().split(" ")[1] +
          " " +
          new Date(hacks[i].end.split("T")[0]).toString().split(" ")[3] +
          " " +
          "</nbw> </div> </div> </div> </div> <div class='nbg'> <nbg>Venue: </nbg> <nbw class='venue'>" +
          hacks[i].venue +
          "</nbw> </div> <div class='nbg'> <nbg>Team Size: </nbg> <nbw class='ts'>" +
          +hacks[i].min_team_size +
          "-" +
          hacks[i].max_team_size +
          "</nbw><nbw> Participants</nbw> </div> <div class='nbg'> <nbg>Prize Pool: </nbg> <nbw></nbw>" +
          hacks[i].prize_pool +
          "</div><div class='status'><circle class='circle1'></circle><circle class='circle2'></circle><circle class='circle3'></circle>" +
          hacks[i].mode_of_conduct +
          "</div> <a class='btnkm btn btn-success' href='./hackdetails.html' role='button'>Know More</a> </div> </div>";

        document.querySelector(".wrapper1").innerHTML =
          "<button class='pagenation' onclick='events(event)'>1</button><button class='pagenation' onclick='events(event)'>2</button><button class='pagenation' onclick='events(event)'>3</button><span class='dots'>...</span><button class='pagenation' onclick='events(event)'>7</button><button class='pagenation' onclick='events(event)'>8</button><button class='pagenation' onclick='events(event)'>9</button>";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
