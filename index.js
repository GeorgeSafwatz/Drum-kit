for (let i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].style.background = "url('images/tom" + (i + 1) + ".png') no-repeat center";
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    this.classList.toggle("white-text");
    this.classList.add("pressed");
    setTimeout(function () {
      document.querySelectorAll("button")[i].classList.remove("pressed");
    }, 200)
    var audio = new Audio("sounds/tom-" + (i + 1) + ".mp3");
    audio.play();
  });

  document.addEventListener("keydown", function (e) {
    if (document.querySelectorAll("button")[i].innerHTML == e.key) {
      document.querySelectorAll("button")[i].classList.toggle("white-text");
      document.querySelectorAll("button")[i].classList.add("pressed");
      setTimeout(function () {
        document.querySelectorAll("button")[i].classList.remove("pressed");
      }, 200)
      var audio = new Audio("sounds/tom-" + (i + 1) + ".mp3");
      audio.play();
    }
  });
}


function HouseKeeper(name, age, nationality) {
  this.name = name;
  this.age = age;
  this.nationality = nationality;
  this.clean = function () {
    alert("cleaning in  progress");
  }
}
