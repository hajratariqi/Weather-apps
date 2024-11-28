let mainDiv = document.getElementById('main')
let currentDate = new Date()
let days = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let day = days[currentDate.getDay()]
let time = currentDate.getHours()+':'+currentDate.getMinutes()
let date = day + ' ' + time 


const getData = () => {
return new Promise((resolve,reject)=>{
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=c7a75b3fc1e0f8569dcb075cee2a6a30`)
fetch('https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=c7a75b3fc1e0f8569dcb075cee2a6a30&units=metric')

.then(res => res.json())
.then(res => resolve(res))
.catch(err => console.log(err))
})
}


getData()
.then((res)=>{
    console.log(res);
    mainDiv.innerHTML = `
      <div class='weather-box'>
        <h2>Weather in ${res.name}</h2>
        <p>${date}</p>
        <div class='temp'>
        <div>
        <div class='center-row'>
        <img class='weather-icon' src='https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png' alt="Weather icon"/>
        <h1>${res.weather[0].description}</h1>
        </div>
        <h1>${res.main.temp}°C</h1>
        </div>
        <p>Humidity: ${res.main.humidity}%</p>
        <p>Wind Speed: ${res.wind.speed} m/s</p>
        </div>
      </div>
    `
})