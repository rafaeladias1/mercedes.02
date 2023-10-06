const container = document.querySelector(".container");
const carousel = document.querySelector(".carousel");
const slides = carousel.querySelectorAll(".slide");
const controls = document.querySelector(".controls");

let currentSlide = 0;

controls.querySelector(".prev").addEventListener("click", e => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  updateSlide();
});

controls.querySelector(".next").addEventListener("click", e => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  updateSlide();
});

function updateSlide() {
  slides[currentSlide].style.display = "block";
  slides.forEach((slide, index) => {
    if (index !== currentSlide) {
      slide.style.display = "none";
    }
  });
}

updateSlide();
