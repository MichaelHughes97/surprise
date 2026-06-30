// MUDA A SENHA AQUI
const correctPassword = "maracuja";


// PASSWORD
const passwordScreen = document.getElementById("passwordScreen");
const mainContent = document.getElementById("mainContent");

const passwordInput = document.getElementById("passwordInput");
const passwordBtn = document.getElementById("passwordBtn");

const wrongPassword = document.getElementById("wrongPassword");

passwordBtn.addEventListener("click", () => {

    if (passwordInput.value === correctPassword) {

        passwordScreen.style.display = "none";

        mainContent.classList.remove("hidden");

    } else {

        wrongPassword.classList.remove("hidden");

    }

});

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
