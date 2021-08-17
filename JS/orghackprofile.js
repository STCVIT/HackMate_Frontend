const authentication = firebase.auth();

$(document).ready(function () {
  $("#nav").load("../Assets/Header/headero.txt");
});
var teams;
var page;
axios(`${url}/organiser/hack/${window.location.search.split("?")[1]}`, {
  headers: {
    Authorization: "Bearer " + auth,
  },
})
  .then((response) => {
    hack = response.data;
    console.log(hack);
    document.myform.name.value = hack.name;
    document.querySelector(".hackname").innerHTML = hack.name;
    document.myform.venue.value = hack.venue;
    document.myform.moc.value = hack.mode_of_conduct;
    document.myform.website.value = hack.website;
    document.myform.about.value = hack.description;
    document.myform.start.value =
      hack.start.split("T")[0] +
      "T" +
      new Date(hack.start).toString().split(" ")[4];
    document.myform.end.value =
      hack.end.split("T")[0] +
      "T" +
      new Date(hack.end).toString().split(" ")[4];
    document.myform.mints.value = hack.min_team_size;
    document.myform.maxts.value = hack.max_team_size;
    document.myform.prizes.value = hack.prize_pool;
    document.querySelector(".poster").innerHTML += "<img style='width: 200px; height: 200px;' src='"+ hack.poster+"'></img>";
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function deleteHack() {
  axios
    .delete(
      `${url}/organiser/deleteHack/${window.location.search.split("?")[1]}`,
      {
        headers: {
          Authorization: "Bearer " + auth,
        },
      }
    )
    .then((response) => {
      hack = response.data;
      console.log(hack);
      window.location = "./orghack.html"
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
      "<a onclick='prevPage()' style='color: #008249;'>&#9668;</a>", // previous button
      "<span></span>", // pagination container
      "<a onclick='nextPage()' style='margin-left: 11px; color: #008249'>&#9658;</a>", // next button
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
    var res = await axios(
      `${url}/organiser/getTeams/${window.location.search.split("?")[1]
      }?page=1`,
      {
        headers: {
          Authorization: "Bearer " + auth,
        },
      }
    );
    teams = await res.data;
    console.log(teams);

    document.querySelector(".wrapper").innerHTML = "";

    for (var i = 0; i < teams.final.length; i++) {
      console.log(teams.final[i]);
      document.querySelector(".wrapper").innerHTML +=
        "<div class='box'> <div class='innertxt'> <h3 class='card-title'>" +
        teams.final[i].team.name +
        "</h3> <div class='card-details' style='padding-top: 30.23px;'> <p> <f>" +
        teams.final[i].participants.length +
        "</f> <r> Team <br> Members</r> </p> <div class='vl'></div> <ul class='team-members" +
        i +
        "'>" +
        +"</ul> </div> </div> </div>";
    }

    for (var i = 0; i < teams.final.length; i++) {
      document.querySelector(".team-members" + i).innerHTML = "";
      for (var j = 0; j < teams.final[i].participants.length; j++) {
        document.querySelector(".team-members" + i).innerHTML +=
          "<li class='list-item'><img id='pp' src='../Assets/Images/Rectangle 155.svg'> <p class='text'>" +
          teams.final[i].participants[j].name +
          "</p> </li>";
      }
    }

    var length = await res.data.length;
    console.log(length);
    total_teams = Math.ceil(length / 12);
    Pagination.Init(document.getElementById("pagination"), {
      size: total_teams,
      page: 1,
      step: 1,
    });
  };
  init();
}

displayTeams();

function events(event) {
  console.log(event);
  page = event.target.innerHTML;
  console.log(page);
  axios(
    `${url}/organiser/getTeams/${window.location.search.split("?")[1]
    }?page=${page}`,
    {
      headers: {
        Authorization: "Bearer " + auth,
      },
    }
  )
    .then((response) => {
      teams = response.data;
      console.log(teams);


      document.querySelector(".wrapper").innerHTML = "";

      for (var i = 0; i < teams.final.length; i++) {
        console.log(teams.final[i]);
        document.querySelector(".wrapper").innerHTML +=
          "<div class='box'> <div class='innertxt'> <h3 class='card-title'>" +
          teams.final[i].team.name +
          "</h3> <div class='card-details' style='padding-top: 30.23px;'> <p> <f>" +
          teams.final[i].participants.length +
          "</f> <r> Team <br> Members</r> </p> <div class='vl'></div> <ul class='team-members" +
          i +
          "'>" +
          +"</ul> </div> </div> </div>";
      }

      for (var i = 0; i < teams.final.length; i++) {
        document.querySelector(".team-members" + i).innerHTML = "";
        for (var j = 0; j < teams.final[i].participants.length; j++) {
          document.querySelector(".team-members" + i).innerHTML +=
            "<li class='list-item'><img id='pp' src='../Assets/Images/Rectangle 155.svg'> <p class='text'>" +
            teams.final[i].participants[j].name +
            "</p> </li>";
        }
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function nextPage() {
  if(page < total_teams)
  {
    page = Pagination.page + 1; 
  }
  console.log(page);
  axios(
    `${url}/organiser/getTeams/${window.location.search.split("?")[1]
    }?page=${page}`,
    {
      headers: {
        Authorization: "Bearer " + auth,
      },
    }
  )
    .then((response) => {
      teams = response.data;
      console.log(teams);


      document.querySelector(".wrapper").innerHTML = "";

      for (var i = 0; i < teams.final.length; i++) {
        console.log(teams.final[i]);
        document.querySelector(".wrapper").innerHTML +=
          "<div class='box'> <div class='innertxt'> <h3 class='card-title'>" +
          teams.final[i].team.name +
          "</h3> <div class='card-details' style='padding-top: 30.23px;'> <p> <f>" +
          teams.final[i].participants.length +
          "</f> <r> Team <br> Members</r> </p> <div class='vl'></div> <ul class='team-members" +
          i +
          "'>" +
          +"</ul> </div> </div> </div>";
      }

      for (var i = 0; i < teams.final.length; i++) {
        document.querySelector(".team-members" + i).innerHTML = "";
        for (var j = 0; j < teams.final[i].participants.length; j++) {
          document.querySelector(".team-members" + i).innerHTML +=
            "<li class='list-item'><img id='pp' src='../Assets/Images/Rectangle 155.svg'> <p class='text'>" +
            teams.final[i].participants[j].name +
            "</p> </li>";
        }
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
    `${url}/organiser/getTeams/${window.location.search.split("?")[1]
    }?page=${page}`,
    {
      headers: {
        Authorization: "Bearer " + auth,
      },
    }
  )
    .then((response) => {
      teams = response.data;
      console.log(teams);


      document.querySelector(".wrapper").innerHTML = "";

      for (var i = 0; i < teams.final.length; i++) {
        console.log(teams.final[i]);
        document.querySelector(".wrapper").innerHTML +=
          "<div class='box'> <div class='innertxt'> <h3 class='card-title'>" +
          teams.final[i].team.name +
          "</h3> <div class='card-details' style='padding-top: 30.23px;'> <p> <f>" +
          teams.final[i].participants.length +
          "</f> <r> Team <br> Members</r> </p> <div class='vl'></div> <ul class='team-members" +
          i +
          "'>" +
          +"</ul> </div> </div> </div>";
      }

      for (var i = 0; i < teams.final.length; i++) {
        document.querySelector(".team-members" + i).innerHTML = "";
        for (var j = 0; j < teams.final[i].participants.length; j++) {
          document.querySelector(".team-members" + i).innerHTML +=
            "<li class='list-item'><img id='pp' src='../Assets/Images/Rectangle 155.svg'> <p class='text'>" +
            teams.final[i].participants[j].name +
            "</p> </li>";
        }
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

document
  .querySelector("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    uploadBlob(document.getElementById("image_uploads").files[0]);
  });

async function uploadBlob(file) {
  console.log("Testing");
  const ref = firebase
    .storage()
    .ref("/Organisers/Hacks/" + document.myform.name.value);

  var uploadTask = ref.put(file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED:
          console.log("Upload is paused");
          break;
        case firebase.storage.TaskState.RUNNING:
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    async () => {
      uploadTask.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
        console.log("File available at", downloadURL);

        poster = await downloadURL;
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
              poster: poster,
              min_team_size: mints,
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
            console.log(response.data._id);
            swal("SUCCESS!!", "Your request has been submitted successfully", "success");
            document.querySelector(".swal-button--confirm").addEventListener("click", ()=> {
              window.location.assign("./orghackprofile.html?" + response.data._id)
            })
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });
    }
  );
}

document
  .querySelector("#image_uploads")
  .addEventListener("change", function () {
    console.log("File Uploaded Locally");
  });