//access the images
let slideImages = document.querySelectorAll("img");

//acess next and previous button
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

//access the indicators

var counter = 0;

// code for next button
next.addEventListener("click", slideNext);
function slideNext() {
  slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
  if (counter >= slideImages.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
  indicators();
}

//code for previous button
prev.addEventListener("click", slidePrev);
function slidePrev() {
  slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
  if (counter == 0) {
    counter = slideImages.length - 1;
  } else {
    counter--;
  }
  slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
  indicators();
}

//auto sliding

function autoSliding() {
  deletInterval = setInterval(timer, 2000);
  function timer() {
    slideNext();
    indicators();
  }
}
autoSliding();

//stop auto sliding when mouse is over
const container = document.querySelector(".slider_container");
container.addEventListener("mouseover", function () {
  clearInterval(deletInterval);
});

//resume sliding when mouse is out
container.addEventListener("mouseout", autoSliding);

//add click event to indicator
function switchImage(currentIamage) {
  currentIamage.classList.add("active");
  var imageID = currentIamage.getAttribute("attr");
  if (imageID > counter) {
    slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
    counter = imageID;
    slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
  } else if (imageID == counter) {
    return;
  } else {
    slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
    counter = imageID;
    slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
  }
  indicators();
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal); // Ensure it runs on page load

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", checkCards);
checkCards(); // Run once on page load

function checkCards() {
  const triggerBottom = window.innerHeight * 0.8; // Adjusted trigger point

  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
}
