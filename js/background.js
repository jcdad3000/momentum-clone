const images = ['1.jpg', '2.jpg', '3.jpg']

const chosenImg = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement('img')

bgImage.src = `img/${chosenImg}`

const imageString = `img/${chosenImg}`

document.body.style.backgroundImage = `url(${imageString})`
