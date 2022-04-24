const API_KEY = 'a2e90ad86d159f4a297cc4e48bcb89fa'

function onGeoSuccess(position) {
  const lat = position.coords.latitude
  const lng = position.coords.longitude
  console.log(position, lat, lng)

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather span:first-child')
      const city = document.querySelector('#weather span:last-child')
      city.innerText = data.name
      weather.innerText = ` ${data.weather[0].main} / ${data.main.temp}℃`
    })
}

function onGeoError() {
  alert("Can't find tou. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)
