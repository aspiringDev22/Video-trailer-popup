const btnEl = document.querySelector(".btn");
const trailerContainerEl = document.querySelector(".trailer-container");
const closeIconEl = document.querySelector(".close-icon");
const videoEL = document.querySelector("video");

btnEl.addEventListener("click", () => {
  trailerContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", () => {
  trailerContainerEl.classList.add("active");
videoEL.pause();
  videoEl.currentTime = 0;
});
