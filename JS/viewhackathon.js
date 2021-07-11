$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});

const all = document.querySelector(".all");
const ongoing = document.querySelector(".ongoing");
const upcoming = document.querySelector(".upcoming");
const popular = document.querySelector(".popular");

all.addEventListener("click", function () {
  for (var i = 0; i < all.classList.length; i++) {
    if (all.classList[i] === "button") {
      all.classList.remove("button");
      all.classList.add("button1");
    }
    else if (all.classList[i] === "button1") {
      all.classList.remove("button1");
      all.classList.add("button");
    }
  }
});
ongoing.addEventListener("click", function () {
  for (var i = 0; i < ongoing.classList.length; i++) {
    if (ongoing.classList[i] === "button") {
      ongoing.classList.remove("button");
      ongoing.classList.add("button1");
    }
    else if (ongoing.classList[i] === "button1") {
      ongoing.classList.remove("button1");
      ongoing.classList.add("button");
    }
  }
});
upcoming.addEventListener("click", function () {
  for (var i = 0; i < upcoming.classList.length; i++) {
    if (upcoming.classList[i] === "button") {
      upcoming.classList.remove("button");
      upcoming.classList.add("button1");
    } else if (upcoming.classList[i] === "button1") {
      upcoming.classList.remove("button1");
      upcoming.classList.add("button");
    }
  }
});

popular.addEventListener("click", function () {
  for (var i = 0; i < popular.classList.length; i++) {
    if (popular.classList[i] === "button") {
      popular.classList.remove("button");
      popular.classList.add("button1");
    } else if (popular.classList[i] === "button1") {
      popular.classList.remove("button1");
      popular.classList.add("button");
    }
  }
});
