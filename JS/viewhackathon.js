var hacks = {};
var occurence = "all";
var page = 1;
const all = document.querySelector("#all");
const ongoing = document.querySelector("#ongoing");
const upcoming = document.querySelector("#upcoming");
const popular = document.querySelector("#popularity");

$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
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
  page = event.target.innerHTML;
  console.log(page);
  window.location = "#wrapper"  
  axios(`${url}/getHacks/${occurence}?page=${page}`, {
    headers: {
      Authorization: "Bearer " + auth,
    },
  })
    .then((response) => {
      hacks = response.data;
      console.log(hacks);
      document.querySelector(".wrapper").innerHTML = "";
      for (var i = 0; i < hacks.final.length; i++) {
        document.querySelector(".wrapper").innerHTML +=
          "<div class='box'><img src='../Assets/Images/Name Banner.png' class='namebanner' alt=''> <div class='innertxt'> <nb1 class='hackname'>" +
          hacks.final[i].name +
          " <a href='" +
          hacks.final[i].website +
          "'><img src='../Assets/Images/Hack Link.svg' alt=''></a></nb1> <br> <div class='dates'> <div class='box1 start'> <div class='nbg'> <nbg>Begins:</nbg> <div class='nbw'> <nbw class='startd'>" +
          //hacks.final[i].start.split("T")[0] +
          new Date(hacks.final[i].start.split("T")[0])
            .toString()
            .split(" ")[2] +
          " " +
          new Date(hacks.final[i].start.split("T")[0])
            .toString()
            .split(" ")[1] +
          " " +
          new Date(hacks.final[i].start.split("T")[0])
            .toString()
            .split(" ")[3] +
          " " +
          "</nbw> </div> </div> </div> <div class='box2 end'> <div class='nbg'> <nbg>Ends:</nbg> <div class='nbw'> <nbw class='endd'>" +
          //hacks.final[i].end.split("T")[0] +
          new Date(hacks.final[i].end.split("T")[0]).toString().split(" ")[2] +
          " " +
          new Date(hacks.final[i].end.split("T")[0]).toString().split(" ")[1] +
          " " +
          new Date(hacks.final[i].end.split("T")[0]).toString().split(" ")[3] +
          " " +
          "</nbw> </div> </div> </div> </div> <div class='nbg'> <nbg>Venue: </nbg> <nbw class='venue'>" +
          hacks.final[i].venue +
          "</nbw> </div> <div class='nbg'> <nbg>Team Size: </nbg> <nbw class='ts'>" +
          +hacks.final[i].min_team_size +
          "-" +
          hacks.final[i].max_team_size +
          "</nbw><nbw> Participants</nbw> </div> <div class='nbg'> <nbg>Prize Pool: </nbg> <nbw></nbw>" +
          hacks.final[i].prize_pool +
          "</div><div class='status'><circle class='circle1'></circle><circle class='circle2'></circle><circle class='circle3'></circle>" +
          hacks.final[i].mode_of_conduct +
          "</div> <a class='btnkm btn btn-success' href='./hackdetails.html?" +
          hacks.final[i]._id +
          "' role='button'>Know More</a> </div> </div>";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function getdeets(event) {
  occurence = event.target.id;

  console.log(occurence);
  // axios(`${url}/getHacks/${event.target.id}?page=1`, {
  //   headers: {
  //     Authorization: "Bearer " + auth,
  //   },
  // })
  //   .then((response) => {
  //     hacks = response.data;
  //     console.log(hacks);
  //     document.querySelector(".wrapper").innerHTML = "";
  //     for (var i = 0; i < hacks.final.length; i++) {
  //       document.querySelector(".wrapper").innerHTML +=
  //         "<div class='box'><img src='../Assets/Images/Name Banner.png' class='namebanner' alt=''> <div class='innertxt'> <nb1 class='hackname'>" +
  //         hacks.final[i].name +
  //         " <a href='" +
  //         hacks.final[i].website +
  //         "'><img src='../Assets/Images/Hack Link.svg' alt=''></a></nb1> <br> <div class='dates'> <div class='box1 start'> <div class='nbg'> <nbg>Begins:</nbg> <div class='nbw'> <nbw class='startd'>" +
  //         //hacks.final[i].start.split("T")[0] +
  //         new Date(hacks.final[i].start.split("T")[0])
  //           .toString()
  //           .split(" ")[2] +
  //         " " +
  //         new Date(hacks.final[i].start.split("T")[0])
  //           .toString()
  //           .split(" ")[1] +
  //         " " +
  //         new Date(hacks.final[i].start.split("T")[0])
  //           .toString()
  //           .split(" ")[3] +
  //         " " +
  //         "</nbw> </div> </div> </div> <div class='box2 end'> <div class='nbg'> <nbg>Ends:</nbg> <div class='nbw'> <nbw class='endd'>" +
  //         //hacks.final[i].end.split("T")[0] +
  //         new Date(hacks.final[i].end.split("T")[0]).toString().split(" ")[2] +
  //         " " +
  //         new Date(hacks.final[i].end.split("T")[0]).toString().split(" ")[1] +
  //         " " +
  //         new Date(hacks.final[i].end.split("T")[0]).toString().split(" ")[3] +
  //         " " +
  //         "</nbw> </div> </div> </div> </div> <div class='nbg'> <nbg>Venue: </nbg> <nbw class='venue'>" +
  //         hacks.final[i].venue +
  //         "</nbw> </div> <div class='nbg'> <nbg>Team Size: </nbg> <nbw class='ts'>" +
  //         +hacks.final[i].min_team_size +
  //         "-" +
  //         hacks.final[i].max_team_size +
  //         "</nbw><nbw> Participants</nbw> </div> <div class='nbg'> <nbg>Prize Pool: </nbg> <nbw></nbw>" +
  //         hacks.final[i].prize_pool +
  //         "</div><div class='status'><circle class='circle1'></circle><circle class='circle2'></circle><circle class='circle3'></circle>" +
  //         hacks.final[i].mode_of_conduct +
  //         "</div> <a class='btnkm btn btn-success' href='./hackdetails.html?" +
  //         hacks.final[i]._id +
  //         "' role='button'>Know More</a> </div> </div>";
  //     }
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });

  displayTeams();
}

var Pagination = {
  code: "",
  Extend: function (data) {
    Pagination.size = data.size;
    Pagination.page = data.page;
    Pagination.step = data.step;
  },
  Add: function (s, f) {
    for (var i = s; i < f; i++) {
      Pagination.code +=
        "<button class='pagenation' onclick='events(event)'>" + i + "</button>";
    }
  },
  Last: function () {
    Pagination.code +=
      "<i style='margin-left: 11px; color: #008249' >...</i><button class='pagenation' onclick='events(event)'>" +
      Pagination.size +
      "</button>";
  },
  First: function () {
    Pagination.code += "";
  },
  Click: function () {
    Pagination.page = +this.innerHTML;
    Pagination.Start();
  },
  Prev: function () {
    Pagination.page--;
    if (Pagination.page < 1) {
      Pagination.page = 1;
    }
    Pagination.Start();
  },
  Next: function () {
    Pagination.page++;
    if (Pagination.page > Pagination.size) {
      Pagination.page = Pagination.size;
    }
    Pagination.Start();
  },
  Bind: function () {
    var a = Pagination.e.querySelectorAll(".pagenation");
    for (var i = 0; i < a.length; i++) {
      if (+a[i].innerHTML === Pagination.page) a[i].className = "current";
      a[i].addEventListener("click", Pagination.Click, false);
    }
  },
  Finish: function () {
    Pagination.e.innerHTML = Pagination.code;
    Pagination.code = "";
    Pagination.Bind();
  },
  Start: function () {
    if (Pagination.size < Pagination.step * 2 + 4) {
      Pagination.Add(1, Pagination.size + 1);
    } else if (Pagination.page < Pagination.step * 2 + 1) {
      Pagination.Add(1, Pagination.step * 2 + 2);
      Pagination.Last();
    } else if (Pagination.page > Pagination.size - Pagination.step * 2) {
      Pagination.First();
      Pagination.Add(
        Pagination.size - Pagination.step * 2 - 1,
        Pagination.size + 1
      );
    } else {
      Pagination.First();
      Pagination.Add(
        Pagination.page - Pagination.step,
        Pagination.page + Pagination.step + 1
      );
      Pagination.Last();
    }
    Pagination.Finish();
  },
  Buttons: function (e) {
    var nav = e.getElementsByTagName("a");
    nav[0].addEventListener("click", Pagination.Prev, false);
    nav[1].addEventListener("click", Pagination.Next, false);
  },
  Create: function (e) {
    var html = [
      "<a href='#wrapper' onclick='prevPage()' style='color: #008249;text-decoration: none;'>&#9668;</a>", // previous button
      "<span></span>", // pagination container
      "<a href='#wrapper' onclick='nextPage()' style='margin-left: 11px; color: #008249;text-decoration: none;'>&#9658;</a>", // next button
    ];
    e.innerHTML = html.join("");
    Pagination.e = e.getElementsByTagName("span")[0];
    Pagination.Buttons(e);
  },
  Init: function (e, data) {
    Pagination.Extend(data);
    Pagination.Create(e);
    Pagination.Start();
  },
};
function displayTeams() {
  var init = async function () {
    var res = await axios(`${url}/getHacks/${occurence}?page=1`, {
      headers: {
        Authorization: "Bearer " + auth,
      },
    });
    hacks = await res.data;
    console.log(hacks);

    var length = await res.data.length;
    console.log(length);
    document.querySelector(".wrapper").innerHTML = '';
    for (var i = 0; i < hacks.final.length; i++) {
      document.querySelector(".wrapper").innerHTML +=
        "<div class='box'><img src='../Assets/Images/Name Banner.png' class='namebanner' alt=''> <div class='innertxt'> <nb1 class='hackname'>" +
        hacks.final[i].name +
        " <a target='_blank' href='https://" +
        hacks.final[i].website +
        "'><img src='../Assets/Images/Hack Link.svg' alt=''></a></nb1> <br> <div class='dates'> <div class='box1 start'> <div class='nbg'> <nbg>Begins:</nbg> <div class='nbw'> <nbw class='startd'>" +
        //hacks.final[i].start.split("T")[0] +
        new Date(hacks.final[i].start.split("T")[0]).toString().split(" ")[2] +
        " " +
        new Date(hacks.final[i].start.split("T")[0]).toString().split(" ")[1] +
        " " +
        new Date(hacks.final[i].start.split("T")[0]).toString().split(" ")[3] +
        " " +
        "</nbw> </div> </div> </div> <div class='box2 end'> <div class='nbg'> <nbg>Ends:</nbg> <div class='nbw'> <nbw class='endd'>" +
        //hacks.final[i].end.split("T")[0] +
        new Date(hacks.final[i].end.split("T")[0]).toString().split(" ")[2] +
        " " +
        new Date(hacks.final[i].end.split("T")[0]).toString().split(" ")[1] +
        " " +
        new Date(hacks.final[i].end.split("T")[0]).toString().split(" ")[3] +
        " " +
        "</nbw> </div> </div> </div> </div> <div class='nbg'> <nbg>Venue: </nbg> <nbw class='venue'>" +
        hacks.final[i].venue +
        "</nbw> </div> <div class='nbg'> <nbg>Team Size: </nbg> <nbw class='ts'>" +
        +hacks.final[i].min_team_size +
        "-" +
        hacks.final[i].max_team_size +
        "</nbw><nbw> Participants</nbw> </div> <div class='nbg'> <nbg>Prize Pool: </nbg> <nbw></nbw>" +
        hacks.final[i].prize_pool +
        "</div><div class='status'><circle class='circle1'></circle><circle class='circle2'></circle><circle class='circle3'></circle>" +
        hacks.final[i].mode_of_conduct +
        "</div> <a class='btnkm btn btn-success' href='./hackdetails.html?" +
        hacks.final[i]._id +
        "' role='button'>Know More</a> </div> </div>";
    }
    total_hacks = Math.ceil(length / 6);
    Pagination.Init(document.getElementById("pagination"), {
      size: total_hacks,
      page: 1,
      step: 1,
    });
  };
  init();
}

displayTeams();


function nextPage() {
  if (page < total_hacks) {
    page = Pagination.page + 1;
  }
  console.log(page);
  axios(
    `${url}/getHacks/${occurence}?page=${page}`,
    {
      headers: {
        Authorization: "Bearer " + auth,
      },
    }
  )
    .then((response) => {
      hacks = response.data;
      console.log(hacks);

      document.querySelector(".wrapper").innerHTML = "";
      for (var i = 0; i < hacks.final.length; i++) {
        document.querySelector(".wrapper").innerHTML +=
          "<div class='box'><img src='../Assets/Images/Name Banner.png' class='namebanner' alt=''> <div class='innertxt'> <nb1 class='hackname'>" +
          hacks.final[i].name +
          " <a target='_blank' href='https://" +
          hacks.final[i].website +
          "'><img src='../Assets/Images/Hack Link.svg' alt=''></a></nb1> <br> <div class='dates'> <div class='box1 start'> <div class='nbg'> <nbg>Begins:</nbg> <div class='nbw'> <nbw class='startd'>" +
          //hacks.final[i].start.split("T")[0] +
          new Date(hacks.final[i].start.split("T")[0]).toString().split(" ")[2] +
          " " +
          new Date(hacks.final[i].start.split("T")[0]).toString().split(" ")[1] +
          " " +
          new Date(hacks.final[i].start.split("T")[0]).toString().split(" ")[3] +
          " " +
          "</nbw> </div> </div> </div> <div class='box2 end'> <div class='nbg'> <nbg>Ends:</nbg> <div class='nbw'> <nbw class='endd'>" +
          //hacks.final[i].end.split("T")[0] +
          new Date(hacks.final[i].end.split("T")[0]).toString().split(" ")[2] +
          " " +
          new Date(hacks.final[i].end.split("T")[0]).toString().split(" ")[1] +
          " " +
          new Date(hacks.final[i].end.split("T")[0]).toString().split(" ")[3] +
          " " +
          "</nbw> </div> </div> </div> </div> <div class='nbg'> <nbg>Venue: </nbg> <nbw class='venue'>" +
          hacks.final[i].venue +
          "</nbw> </div> <div class='nbg'> <nbg>Team Size: </nbg> <nbw class='ts'>" +
          +hacks.final[i].min_team_size +
          "-" +
          hacks.final[i].max_team_size +
          "</nbw><nbw> Participants</nbw> </div> <div class='nbg'> <nbg>Prize Pool: </nbg> <nbw></nbw>" +
          hacks.final[i].prize_pool +
          "</div><div class='status'><circle class='circle1'></circle><circle class='circle2'></circle><circle class='circle3'></circle>" +
          hacks.final[i].mode_of_conduct +
          "</div> <a class='btnkm btn btn-success' href='./hackdetails.html?" +
          hacks.final[i]._id +
          "' role='button'>Know More</a> </div> </div>";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function prevPage() {
  if (page > 1) {
    page = Pagination.page - 1;
  }
  console.log(page);
  axios(
    `${url}/getHacks/${occurence}?page=${page}`,
    {
      headers: {
        Authorization: "Bearer " + auth,
      },
    }
  )
    .then((response) => {
      hacks = response.data;
      console.log(hacks);

      document.querySelector(".wrapper").innerHTML = "";
      for (var i = 0; i < hacks.final.length; i++) {
        document.querySelector(".wrapper").innerHTML +=
          "<div class='box'><img src='../Assets/Images/Name Banner.png' class='namebanner' alt=''> <div class='innertxt'> <nb1 class='hackname'>" +
          hacks.final[i].name +
          " <a target='_blank' href='https://" +
          hacks.final[i].website +
          "'><img src='../Assets/Images/Hack Link.svg' alt=''></a></nb1> <br> <div class='dates'> <div class='box1 start'> <div class='nbg'> <nbg>Begins:</nbg> <div class='nbw'> <nbw class='startd'>" +
          //hacks.final[i].start.split("T")[0] +
          new Date(hacks.final[i].start.split("T")[0]).toString().split(" ")[2] +
          " " +
          new Date(hacks.final[i].start.split("T")[0]).toString().split(" ")[1] +
          " " +
          new Date(hacks.final[i].start.split("T")[0]).toString().split(" ")[3] +
          " " +
          "</nbw> </div> </div> </div> <div class='box2 end'> <div class='nbg'> <nbg>Ends:</nbg> <div class='nbw'> <nbw class='endd'>" +
          //hacks.final[i].end.split("T")[0] +
          new Date(hacks.final[i].end.split("T")[0]).toString().split(" ")[2] +
          " " +
          new Date(hacks.final[i].end.split("T")[0]).toString().split(" ")[1] +
          " " +
          new Date(hacks.final[i].end.split("T")[0]).toString().split(" ")[3] +
          " " +
          "</nbw> </div> </div> </div> </div> <div class='nbg'> <nbg>Venue: </nbg> <nbw class='venue'>" +
          hacks.final[i].venue +
          "</nbw> </div> <div class='nbg'> <nbg>Team Size: </nbg> <nbw class='ts'>" +
          +hacks.final[i].min_team_size +
          "-" +
          hacks.final[i].max_team_size +
          "</nbw><nbw> Participants</nbw> </div> <div class='nbg'> <nbg>Prize Pool: </nbg> <nbw></nbw>" +
          hacks.final[i].prize_pool +
          "</div><div class='status'><circle class='circle1'></circle><circle class='circle2'></circle><circle class='circle3'></circle>" +
          hacks.final[i].mode_of_conduct +
          "</div> <a class='btnkm btn btn-success' href='./hackdetails.html?" +
          hacks.final[i]._id +
          "' role='button'>Know More</a> </div> </div>";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}