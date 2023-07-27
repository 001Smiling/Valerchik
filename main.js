const sliderContainer = document.getElementById("slider-container");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

nextButton.addEventListener("click", () => {
  sliderContainer.style.transform = "translateX(-296px)";
  sliderContainer.style.transition = "transform 0.5s ease";
  setTimeout(() => {
    sliderContainer.style.transition = "none";
    sliderContainer.appendChild(sliderContainer.firstElementChild);
    sliderContainer.style.transform = "translateX(0)";
  }, 500);
});

prevButton.addEventListener("click", () => {
  sliderContainer.insertBefore(sliderContainer.lastElementChild, sliderContainer.firstElementChild);
  sliderContainer.style.transform = "translateX(-296px)";
  sliderContainer.style.transition = "none";
  setTimeout(() => {
    sliderContainer.style.transition = "transform 0.5s ease";
    sliderContainer.style.transform = "translateX(0)";
  }, 0);
});