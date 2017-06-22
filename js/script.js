document.addEventListener("DOMContentLoaded", function() {
  /////////////////////HEADER
  /////////////////////SECTION 1
  //SLIDER (teraz już działa)
  var left = $(".slide-left");
  var right = $(".slide-right");
  var images = $(".slider > *");
  console.log(images);
  var currentPic = 0;

  images.each(function() {
    $(this).addClass("invisible");
  });
  console.log(images.eq(currentPic));
  images.eq(currentPic).removeClass("invisible");

  left.click(function() {
    images.eq(currentPic).addClass("invisible");
    currentPic--;
    images.eq(currentPic).removeClass("invisible");
  });

  right.click(function() {
    images.eq(currentPic).addClass("invisible");
    currentPic++;
    images.eq(currentPic).removeClass("invisible");
  });


/////////////////////SECTION 2
var margbox = document.querySelector(".margbox");
var clairbox = document.querySelector(".clairbox");
var boxessec2 = [margbox, clairbox];

boxessec2.forEach(function(e) {
  e.parentNode.addEventListener("mouseenter", function() {
    e.style.display = "none";
  })
  e.parentNode.addEventListener("mouseleave", function() {
    e.style.display = "block";
  })
})

/////////////////////SECTION 3
var plany = document.querySelectorAll(".planybox > *");
//console.log(plany);
plany.forEach(function(e) {
  e.addEventListener("click", function() {
    if (e.classList.contains("activeplan")) {
      e.classList.remove("activeplan")
    } else {
      e.className += " activeplan"
    }
  })
})

/////////////////////SECTION 4
//TICK NA ZGADZAM SIĘ
var agreebtn = document.querySelector(".agreebtn");
var agreeinput = document.getElementsByName("tick");

agreebtn.addEventListener("click", function() {
  if (this.style.backgroundImage == "") {
    this.style.backgroundImage = "url(\"./images/form_ok.jpg\")";
    agreeinput.forEach(function(e) {
      e.setAttribute("checked", "checked");
    })
  } else {
    this.style.backgroundImage = "";
    agreeinput.forEach(function(e) {
      e.removeAttribute("checked");
    })
  }
})

//SUBMIT NA BUTTONIE
var sendbtn = document.querySelector(".sendbtn");
var sendinput = document.getElementsByName("submit");

sendinput.forEach(function(e) {
  e.addEventListener("click", function(e) {
    e.preventDefault();
  })
})

sendbtn.addEventListener("click", function() {
  sendinput.forEach(function(e) {
    e.click();
  })
})

/////////////////////FOOTER
})
