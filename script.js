const button = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");
const music = document.getElementById("music");

const letterBtn = document.getElementById("letterBtn");
const loveLetter = document.getElementById("loveLetter");

button.addEventListener("click", () => {
  surprise.classList.remove("hidden");
  button.style.display = "none";

  music.play().catch(() => {
    console.log("Music could not play automatically.");
  });
});

letterBtn.addEventListener("click", () => {
  loveLetter.classList.remove("hidden");
  letterBtn.style.display = "none";
});