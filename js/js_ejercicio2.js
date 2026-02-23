const button = document.getElementById("countBtn");
const counterText = document.getElementById("counter");

let clicks = 0;

button.addEventListener("click", () => {
    clicks++;
    counterText.textContent = `Clics: ${clicks}`;
});