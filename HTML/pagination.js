var Pagination = {
  code: "",

  Extend: function (data) {
    data = data || {};
    Pagination.size = data.size;
    Pagination.page = data.page;
    Pagination.step = data.step;
  },


  Add: function (s, f) {
    for (var i = s; i < f; i++) {
      Pagination.code += "<button class='pagenation' onclick='events(event)'>" + i + "</button>";

    }
  },

  Last: function () {
    Pagination.code +=
      "<i style='margin-left: 11px;' >...</i><button class='pagenation' onclick='events(event)'>" +
      Pagination.size +
      "</button>";
  },

  First: function () {
    Pagination.code +=
      "<button class='pagenation' onclick='events(event)'>1</button><i style='margin-left: 11px;'>...</i>";
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
    if (Pagination.size < Pagination.step * 2 + 6) {
      Pagination.Add(1, Pagination.size + 1);
    } else if (Pagination.page < Pagination.step * 2 + 1) {
      Pagination.Add(1, Pagination.step * 2 + 4);
      Pagination.Last();
    } else if (Pagination.page > Pagination.size - Pagination.step * 2) {
      Pagination.First();
      Pagination.Add(
        Pagination.size - Pagination.step * 2 - 2,
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
      "<a>&#9668;</a>", // previous button
      "<span></span>", // pagination container
      "<a>&#9658;</a>", // next button
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

var init = function () {
  Pagination.Init(document.getElementById("pagination"), {
    size: 30, // pages size
    page: 1, // selected page
    step: 3, // pages before and after current
  });
};

document.addEventListener("DOMContentLoaded", init, false);

function events(event) {
  console.log(event);
  var eventocc = event.target.innerHTML;
  console.log(eventocc);
  axios(`${url}/getHacks/all?page=${eventocc}`, {
    headers: {
      Authorization: "Bearer " + auth,
    },
  })
    .then((response) => {
      hacks = response.data;
      console.log(hacks);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}