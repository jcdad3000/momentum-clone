const body = document.querySelector('body')
const h1 = document.querySelector('h1')

body.style.backgroundColor = 'purple'
h1.style.color = 'white'
function handleResize() {
  if (window.innerWidth <= 600) {
    body.style.backgroundColor = 'blue'
  } else if (window.innerWidth <= 800) {
    body.style.backgroundColor = 'purple'
  } else {
    body.style.backgroundColor = 'yellow'
  }
}

window.addEventListener('resize', handleResize)
