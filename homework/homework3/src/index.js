const playButton = document.querySelector('.submit-btn')

const generateNum = document.querySelector('.generate-number input')
const guessNum = document.querySelector('.guess-number input')

const resultText = document.querySelector('.result')
const result = document.querySelector('.result-view')

function playButtonClick(event) {
  event.preventDefault()

  const generateMax = parseInt(generateNum.value)

  if (generateMax < 0) {
    resultText.classList.remove('hidden')
    resultText.innerText = 'You entered a negative number.'
    return
  }

  const userGuessNum = parseInt(guessNum.value)

  if (userGuessNum < 0) {
    resultText.classList.remove('hidden')
    resultText.innerText = 'You entered a negative number.'
    return
  } else if (userGuessNum > generateMax) {
    resultText.classList.remove('hidden')
    resultText.innerText = 'Number range exceeded.'
    return
  }

  resultText.classList.remove('hidden')

  const randomNum = Math.floor(Math.random() * (generateMax + 1))

  resultText.innerText = `You choose ${userGuessNum}, the Machine choose ${randomNum} `
  result.classList.remove('hidden')
  if (randomNum === userGuessNum) {
    result.innerText = 'You Won!!'
  } else {
    result.innerText = 'You lost!!'
  }
}
playButton.addEventListener('click', playButtonClick)
