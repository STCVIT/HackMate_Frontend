var page = 1;

$(document).ready(function () {
  $("#nav").load("../Assets/Header/headero.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});

// axios(`${url}/organiser/hacks?page=1`, {
//   headers: {
//     Authorization: "Bearer " + auth,
//   },
// })
//   .then((response) => {
//     hacks = response.data;
//     console.log(hacks);

//     for (var i = 0; i < hacks.newHacks.length; i++) {
//       document.querySelector(".wrapper").innerHTML +=
//         "<div class='box'> <a href='./orghackprofile.html' style='text-decoration: none;'> <div class='innertxt'> <div class='hackname'> <nb1>" +
//         hacks.newHacks[i].name +
//         ". </nb1> </div> <br> <div class='dates'> <div class='box1 start'> <div class='nbg'> <nbg>Begins:</nbg> <div class='nbw'> <nbw>" +
//         hacks.newHacks[i].start.split("T")[0] +
//         "</nbw> </div> </div> </div> <div class='box2 end'> <div class='nbg'> <nbg>Ends:</nbg> <div class='nbw'> <nbw>" +
//         hacks.newHacks[i].end.split("T")[0] +
//         "</nbw> </div> </div> </div> </div> <div class='nbg'> <nbg>Venue: </nbg> <nbw>" +
//         hacks.newHacks[i].venue +
//         "</nbw> </div> <div class='nbg'> <nbg>Max Team Size: </nbg> <nbw> " +
//         hacks.newHacks[i].max_team_size +
//         " Participants</nbw> </div> <div class='nbg'> <nbg>Prize Pool: </nbg> <nbw></nbw>" +
//         hacks.newHacks[i].prize_pool +
//         "</div> <div class='status'> <circle class='circle1'></circle> <circle class='circle2'></circle> <circle class='circle3'></circle>" +
//         hacks.newHacks[i].mode_of_conduct +
//         "</div> </div> </a></div>";
//     }
//   })
//   .catch((error) => console.error("Error: " + error));

function events(event) {
  console.log(event);
  page = event.target.innerHTML;
  console.log(page);
  axios(`${url}/organiser/hacks?page=${page}`, {
    headers: {
      Authorization: "Bearer " + auth,
    },
  })
    .then((response) => {
      hacks = response.data;
      console.log(hacks);
      document.querySelector(".wrapper").innerHTML = "";

      for (var i = 0; i < hacks.newHacks.length; i++) {
        document.querySelector(".wrapper").innerHTML +=
          "<div class='box'> <a href='./orghackprofile.html?" +
          hacks.newHacks[i]._id +
          "' style='text-decoration: none;'> <div class='innertxt'> <div class='hackname'> <nb1>" +
          hacks.newHacks[i].name +
          ". </nb1> </div> <br> <div class='dates'> <div class='box1 start'> <div class='nbg'> <nbg>Begins:</nbg> <div class='nbw'> <nbw>" +
          hacks.newHacks[i].start.split("T")[0] +
          "</nbw> </div> </div> </div> <div class='box2 end'> <div class='nbg'> <nbg>Ends:</nbg> <div class='nbw'> <nbw>" +
          hacks.newHacks[i].end.split("T")[0] +
          "</nbw> </div> </div> </div> </div> <div class='nbg'> <nbg>Venue: </nbg> <nbw>" +
          hacks.newHacks[i].venue +
          "</nbw> </div> <div class='nbg'> <nbg>Max Team Size: </nbg> <nbw> " +
          hacks.newHacks[i].max_team_size +
          " Participants</nbw> </div> <div class='nbg'> <nbg>Prize Pool: </nbg> <nbw></nbw>" +
          hacks.newHacks[i].prize_pool +
          "</div> <div class='status'> <circle class='circle1'></circle> <circle class='circle2'></circle> <circle class='circle3'></circle>" +
          hacks.newHacks[i].mode_of_conduct +
          "</div> </div> </a></div>";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  window.location = "./orghack.html#hacksadded"

}
function nextPage() {
  if(page <total_hacks)
  {
    page = Pagination.page + 1; 
  }
  console.log(page);
  axios(`${url}/organiser/hacks?page=${page}`, {
    headers: {
      Authorization: "Bearer " + auth,
    },
  })
    .then((response) => {
      hacks = response.data;
      console.log(hacks);
      document.querySelector(".wrapper").innerHTML = "";

      for (var i = 0; i < hacks.newHacks.length; i++) {
        document.querySelector(".wrapper").innerHTML +=
          "<div class='box'> <a href='./orghackprofile.html?" +
          hacks.newHacks[i]._id +
          "' style='text-decoration: none;'> <div class='innertxt'> <div class='hackname'> <nb1>" +
          hacks.newHacks[i].name +
          ". </nb1> </div> <br> <div class='dates'> <div class='box1 start'> <div class='nbg'> <nbg>Begins:</nbg> <div class='nbw'> <nbw>" +
          hacks.newHacks[i].start.split("T")[0] +
          "</nbw> </div> </div> </div> <div class='box2 end'> <div class='nbg'> <nbg>Ends:</nbg> <div class='nbw'> <nbw>" +
          hacks.newHacks[i].end.split("T")[0] +
          "</nbw> </div> </div> </div> </div> <div class='nbg'> <nbg>Venue: </nbg> <nbw>" +
          hacks.newHacks[i].venue +
          "</nbw> </div> <div class='nbg'> <nbg>Max Team Size: </nbg> <nbw> " +
          hacks.newHacks[i].max_team_size +
          " Participants</nbw> </div> <div class='nbg'> <nbg>Prize Pool: </nbg> <nbw></nbw>" +
          hacks.newHacks[i].prize_pool +
          "</div> <div class='status'> <circle class='circle1'></circle> <circle class='circle2'></circle> <circle class='circle3'></circle>" +
          hacks.newHacks[i].mode_of_conduct +
          "</div> </div> </a></div>";
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
  axios(`${url}/organiser/hacks?page=${page}`, {
    headers: {
      Authorization: "Bearer " + auth,
    },
  })
    .then((response) => {
      hacks = response.data;
      console.log(hacks);
      document.querySelector(".wrapper").innerHTML = "";

      for (var i = 0; i < hacks.newHacks.length; i++) {
        document.querySelector(".wrapper").innerHTML +=
          "<div class='box'> <a href='./orghackprofile.html?" +
          hacks.newHacks[i]._id +
          "' style='text-decoration: none;'> <div class='innertxt'> <div class='hackname'> <nb1>" +
          hacks.newHacks[i].name +
          ". </nb1> </div> <br> <div class='dates'> <div class='box1 start'> <div class='nbg'> <nbg>Begins:</nbg> <div class='nbw'> <nbw>" +
          hacks.newHacks[i].start.split("T")[0] +
          "</nbw> </div> </div> </div> <div class='box2 end'> <div class='nbg'> <nbg>Ends:</nbg> <div class='nbw'> <nbw>" +
          hacks.newHacks[i].end.split("T")[0] +
          "</nbw> </div> </div> </div> </div> <div class='nbg'> <nbg>Venue: </nbg> <nbw>" +
          hacks.newHacks[i].venue +
          "</nbw> </div> <div class='nbg'> <nbg>Max Team Size: </nbg> <nbw> " +
          hacks.newHacks[i].max_team_size +
          " Participants</nbw> </div> <div class='nbg'> <nbg>Prize Pool: </nbg> <nbw></nbw>" +
          hacks.newHacks[i].prize_pool +
          "</div> <div class='status'> <circle class='circle1'></circle> <circle class='circle2'></circle> <circle class='circle3'></circle>" +
          hacks.newHacks[i].mode_of_conduct +
          "</div> </div> </a></div>";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
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
      "<a onclick='prevPage()' style='color: #008249;text-decoration: none;'>&#9668;</a>", // previous button
      "<span></span>", // pagination container
      "<a href='#hacksadded' onclick='nextPage()' style='margin-left: 11px; color: #008249; text-decoration: none;'>&#9658;</a>", // next button
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

function displayHacks() {
  var init = async function () {
    var res = await axios(`${url}/organiser/hacks?page=1`, {
      headers: {
        Authorization: "Bearer " + auth,
      },
    });
    hacks = await res.data;
    console.log(hacks);

    var length = await res.data.length;
    console.log(length);
    document.querySelector(".wrapper").innerHTML = "";

    for (var i = 0; i < hacks.newHacks.length; i++) {
      document.querySelector(".wrapper").innerHTML +=
        "<div class='box'> <a href='./orghackprofile.html?" +
        hacks.newHacks[i]._id +
        "' style='text-decoration: none;'> <div class='innertxt'> <div class='hackname'> <nb1>" +
        hacks.newHacks[i].name +
        ". </nb1> </div> <br> <div class='dates'> <div class='box1 start'> <div class='nbg'> <nbg>Begins:</nbg> <div class='nbw'> <nbw>" +
        hacks.newHacks[i].start.split("T")[0] +
        "</nbw> </div> </div> </div> <div class='box2 end'> <div class='nbg'> <nbg>Ends:</nbg> <div class='nbw'> <nbw>" +
        hacks.newHacks[i].end.split("T")[0] +
        "</nbw> </div> </div> </div> </div> <div class='nbg'> <nbg>Venue: </nbg> <nbw>" +
        hacks.newHacks[i].venue +
        "</nbw> </div> <div class='nbg'> <nbg>Max Team Size: </nbg> <nbw> " +
        hacks.newHacks[i].max_team_size +
        " Participants</nbw> </div> <div class='nbg'> <nbg>Prize Pool: </nbg> <nbw></nbw>" +
        hacks.newHacks[i].prize_pool +
        "</div> <div class='status'> <circle class='circle1'></circle> <circle class='circle2'></circle> <circle class='circle3'></circle>" +
        hacks.newHacks[i].mode_of_conduct +
        "</div> </div> </a></div>";
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

displayHacks();
