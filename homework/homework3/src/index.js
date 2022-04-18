const playButton = document.querySelector(".guess-number button");

const generateNum = document.querySelector(".generate-number input");
const guessNum = document.querySelector(".guess-number input");

const resultText = document.querySelector(".result");
const result = document.querySelector(".result-view");

function playButtonClick(event) {
  event.preventDefault();
  const generateMax = generateNum.value;
  const userGuessNum = guessNum.value;

  resultText.classList.remove("hidden");
  resultText.innerText = `You choose ${userGuessNum}, the Machine choose ${generateMax} `;
}
playButton.addEventListener("click", playButtonClick);
