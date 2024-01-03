const sliderContainer = document.querySelector(".slider-container");
const slidRight = document.querySelector(".right-slid");
const slidLeft = document.querySelector(".left-slid");
const upButton = document.getElementById("up-btn");
const downButton = document.getElementById("down-btn");
const sliderLength = slidRight.querySelectorAll("div").length;

let activeSlideIndex = 0;
slidLeft.style.top = `-${(sliderLength - 1) * 100}vh`;

downButton.addEventListener("click", () => nextSlide("up"));
upButton.addEventListener("click", () => nextSlide("down"));

function nextSlide(params) {
  const sliderHeight = sliderContainer.clientHeight;

  if (params === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > sliderLength - 1) {
      activeSlideIndex = 0;
    }
  }

  if (params === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = sliderLength - 1;
    }
  }

  slidRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slidLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}
