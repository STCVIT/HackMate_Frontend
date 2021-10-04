$(document).ready(function () {
  $("#nav").load("../Assets/Header/headerl.txt");
  $("#foobottom").load("../Assets/Footer/footer.txt");
});
const loadingDiv = document.getElementById("loading");
var logo;
var user;
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    user.getIdToken().then(function (idToken) {
      sessionStorage.setItem("auth", idToken);
      auth = idToken;
      axios(`${url}/participant/login`, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      })
        .then((response) => {
          user = response.data;
          document.querySelector(".photo").setAttribute("src", user.photo);
          document.par_form.name.value = user.name;
          document.par_form.username.value = user.username;
          document.querySelector("#email").innerHTML = user.email;
          document.par_form.college.value = user.college;
          document.par_form.git.value = user.github;
          document.par_form.linkedln.value = user.linkedIn;
          document.par_form.personal_website.value = user.website;
          document.par_form.year.value = user.graduation_year;
          document.form.bio.value = user.bio;
        })
        .catch((error) => {
          if (error.response.status == 400) {
            swal(
              "Warning!!",
              "Some unknown error occured, please try again.",
              "warning"
            );
          }
          console.error("Error: " + error);
        });
      let fd = document.getElementById("frontend");
      let bd = document.getElementById("backend");
      let ui = document.getElementById("ui");
      let ml = document.getElementById("ml");
      let mg = document.getElementById("management");
      let app = document.getElementById("app");
      let cyber = document.getElementById("cyber");
      let block = document.getElementById("block");
      var skills = [];
      var userskills = [];
      axios(`${url}/skills/mySkills`, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      })
        .then((response) => {
          skills = response.data;
          skills.forEach((element) => {
            userskills.push(element.skill);
          });
          if (userskills.includes("frontend")) {
            fd.checked = true;
          }
          if (userskills.includes("backend")) {
            bd.checked = true;
          }
          if (userskills.includes("management")) {
            mg.checked = true;
          }
          if (userskills.includes("ui/ux")) {
            ui.checked = true;
          }
          if (userskills.includes("ml")) {
            ml.checked = true;
          }
          if (userskills.includes("appdev")) {
            app.checked = true;
          }
          if (userskills.includes("cybersecurity")) {
            cyber.checked = true;
          }
          if (userskills.includes("blockchain")) {
            block.checked = true;
          }
          document.getElementById("loading").style.visibility = "hidden";
        })
        .catch((error) => {
          if (error.response.status == 400) {
            swal(
              "Warning!!",
              "Some unknown error occured, please try again.",
              "warning"
            );
          }
          if (error.response.status == 404) {
            swal("Warning!!", "Not found.", "warning");
          }
          console.error("Error: " + error);
        });
    });
  } else {
    // User is signed out
  }
});
let signal = 0;
function delete_account() {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      swal({
        title: "Are you sure?",
        text: "Do you want to delete your profile?",
        type: "warning",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios
            .delete(`${url}/participant/deleteProfile`, {
              headers: {
                Authorization: "Bearer " + auth,
              },
            })
            .then((response) => {
              window.location.assign("./participantlognsignup.html");
            })
            .catch((error) => {
              console.error("Error:", error);
              if (error.response.status == 400) {
                swal(
                  "Warning!!",
                  "Some unknown error occured, please try again.",
                  "warning"
                );
              }
            });
          swal("Poof! Your profile has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your profile is safe!");
        }
      });
    });
}

function update_account() {
  firebase
    .auth()
    .currentUser.getIdToken()
    .then((id) => {
      auth = id;
      let flag = 0;
      let Name = document.getElementById("name");
      let username = document.getElementById("username");
      let college = document.getElementById("college");
      let year = document.getElementById("year");
      let linkedin = document.getElementById("linkedln");
      let git = document.getElementById("git");
      let website = document.getElementById("personal_website");
      let bio = document.getElementById("bio");
      Name.value = toTitleCase(Name.value.trim());
      username.value = username.value.trim();
      year.value = year.value.trim();
      college.value = college.value.trim();
      function toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
      }
      let len = Name.value.length;
      let n = username.value.length;
      linkedin.value = linkedin.value.trim();
      let regex =
        /((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/;
      let github_regex = /https:\/\/github.com\//gm;
      let githubwww_regex = /https:\/\/www.github.com\//gm;
      let regstr =
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
      git.value = git.value.trim();
      website.value = website.value.trim();
      bio.value = bio.value.trim();
      let length = bio.value.length;
      let reg1 = /^[a-zA-Z][a-zA-Z\s]*$/;
      let reg2 = /(19|20)\d{2}$/;
      //name should be only alphabets and of max length 30
      if (len <= 30) {
        if (reg1.test(Name.value) === true) {
          onSuccess(Name);
        } else {
          onError(Name, "Enter a valid name");
          flag = flag + 1;
        }
      } else {
        onError(Name, "Enter a valid name");
        flag = flag + 1;
      }
      //username should be only alphabets and of max length 30
      if (n <= 20) {
        onSuccess(username);
      } else {
        onError(username, "Username cannot be longer than 10 charecters");
        flag = flag + 1;
      }
      //college name only alphabets
      if (college.value.match(reg1)) {
        onSuccess(college);
      } else {
        onError(college, "Enter valid college name");
        flag = flag + 1;
      }
      //year check
      if (year.value.match(reg2)) {
        onSuccess(year);
      } else {
        onError(year, "Enter valid year");
        flag = flag + 1;
      }
      //linkedin validation
      if (regex.test(linkedin.value) === true) {
        onSuccess(linkedin);
      } else {
        onError(linkedin, "Enter correct linkedIn profile link");
        flag = flag + 1;
      }
      //github profile link validation
      if (github_regex.test(git.value) === true) {
        onSuccess(git);
      } else if (githubwww_regex.test(git.value) === true) {
        onSuccess(git);
      } else {
        onError(git, "Enter correct github profile link");
        flag = flag + 1;
      }
      //personal website
      if (regstr.test(website.value) === true || website.value == "") {
        onSuccess(website);
      } else {
        onError(website, "Enter correct website link");
        flag = flag + 1;
      }
      //setting limit to bio
      if (length <= 200 && bio.value != "") {
        onSuccess(bio);
      } else {
        if (length > 200) {
          onError(bio, "bio should not exceed 200 characters");
          flag = flag + 1;
        } else if (bio.value == "") {
          onError(bio, "Bio can't be empty.");
          flag = flag + 1;
        }
      }

      if (flag == 0) {
        axios
          .patch(
            `${url}/participant/updateProfile`,
            {
              name: toTitleCase(document.par_form.name.value),
              username: document.par_form.username.value,
              college: document.par_form.college.value,
              github: document.par_form.git.value,
              linkedIn: document.par_form.linkedln.value,
              website: document.par_form.personal_website.value,
              graduation_year: document.par_form.year.value,
              bio: document.form.bio.value,
            },
            {
              headers: {
                Authorization: "Bearer " + auth,
              },
            }
          )
          .then((response) => {
            swal(
              "SUCCESS!!",
              "Your profile has been updated successfully",
              "success"
            ).then((okay) => {
              if (okay) {
                window.location.href = "./MyProfile_userView.html";
              }
            });
          })
          .catch((error) => {
            console.error("Error:", error);
            if (error.response.status == 400) {
              swal(
                "Warning!!",
                "Some unknown error occured, please try again.",
                "warning"
              );
            }
            if (error.response.status == 403) {
              swal("Warning!!", "Invalid updates.", "warning");
            }
            if (error.response.status == 417) {
              swal(
                "Warning!!",
                "Please enter all the required fields.",
                "warning"
              );
            }
          });
      }
    });
}
function onSuccess(input) {
  let parent = input.parentElement;
  let messageEle = parent.querySelector("small");
  messageEle.style.visibility = "hidden";
}
function onError(input, message) {
  let parent = input.parentElement;
  let messageEle = parent.querySelector("small");
  messageEle.style.visibility = "visible";
  messageEle.innerText = message;
}
function arrayRemove(arr, value) {
  return arr.filter(function (geeks) {
    return geeks != value;
  });
}

function addskills() {
  let choice = [];
  let fd = document.getElementById("frontend");
  let bd = document.getElementById("backend");
  let ui = document.getElementById("ui");
  let ml = document.getElementById("ml");
  let mg = document.getElementById("management");
  let app = document.getElementById("app");
  let cyber = document.getElementById("cyber");
  let block = document.getElementById("block");
  if (fd.checked == 1) {
    choice.push("frontend");
  } else {
    if (choice.includes("frontend")) {
      choice = arrayRemove(choice, "frontend");
    }
  }
  if (bd.checked == 1) {
    choice.push("backend");
  } else {
    if (choice.includes("backend")) {
      choice = arrayRemove(choice, "backend");
    }
  }
  if (ui.checked == 1) {
    choice.push("ui/ux");
  } else {
    if (choice.includes("ui/ux")) {
      choice = arrayRemove(choice, "ui/ux");
    }
  }
  if (ml.checked == 1) {
    choice.push("ml");
  } else {
    if (choice.includes("ml")) {
      choice = arrayRemove(choice, "ml");
    }
  }
  if (mg.checked == 1) {
    choice.push("management");
  } else {
    if (choice.includes("management")) {
      choice = arrayRemove(choice, "management");
    }
  }
  if (app.checked == 1) {
    choice.push("appdev");
  } else {
    if (choice.includes("appdev")) {
      choice = arrayRemove(choice, "appdev");
    }
  }
  if (cyber.checked == 1) {
    choice.push("cybersecurity");
  } else {
    if (choice.includes("cybersecurity")) {
      choice = arrayRemove(choice, "cybersecurity");
    }
  }
  if (block.checked == 1) {
    choice.push("blockchain");
  } else {
    if (choice.includes("blockchain")) {
      choice = arrayRemove(choice, "blockchain");
    }
  }
  if (choice.length == 0) {
    swal("WARNING!!", "Please select at least one skill", {
      icon: "warning",
    });
  } else {
    axios
      .post(
        `${url}/skills/mySkills`,
        {
          skills: choice,
        },
        {
          headers: {
            Authorization: "Bearer " + auth,
          },
        }
      )
      .then((response) => {
        swal(
          "SUCCESS!!",
          "Your skills have been added successfully",
          "success"
        );
      })
      .catch((error) => {
        console.error("Error:", error);
        if (error.response.status == 404) {
          swal("Warning!!", "Please enter some skills.", "warning");
        }
        if (error.response.status == 403) {
          swal("Warning!!", "Invalid.", "warning");
        }

        if (error.response.status == 400) {
          swal(
            "Warning!!",
            "Some unknown error occured, please try again.",
            "warning"
          );
        }
      });
  }
}

async function uploadBlob(file) {
  const ref = firebase
    .storage()
    .ref("/Participants/Profile/" + document.par_form.name.value);

  var uploadTask = ref.put(file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED:
          break;
        case firebase.storage.TaskState.RUNNING:
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    async () => {
      uploadTask.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
        logo = await downloadURL;

        firebase
          .auth()
          .currentUser.getIdToken()
          .then(async (id) => {
            auth = await id;
          });

        axios
          .patch(
            `${url}/participant/updateProfile`,
            {
              photo: logo,
            },
            {
              headers: {
                Authorization: "Bearer " + auth,
              },
            }
          )
          .then((response) => {
            swal("SUCCESS!!", "File uploaded successfully", "success");
            document
              .querySelector(".swal-button--confirm")
              .addEventListener("click", () => {
                window.location = "";
              });
          })
          .catch((error) => {
            console.error("Error:", error);
            if (error.response.status == 400) {
              swal(
                "Warning!!",
                "Some unknown error occured, please try again.",
                "warning"
              );
            }
            if (error.response.status == 403) {
              swal("Warning!!", "Invalid updates.", "warning");
            }
            if (error.response.status == 417) {
              swal(
                "Warning!!",
                "Please enter all the required fields.",
                "warning"
              );
            }
          });
      });
    }
  );
}

document
  .querySelector("#image_uploads")
  .addEventListener("change", function () {
    uploadBlob(document.getElementById("image_uploads").files[0]);
  });

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
