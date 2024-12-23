let country = document.getElementById('country').value = 'pakistan'


const searchCountry = () =>{
country = document.getElementById('country').value
let mainDiv = document.getElementById('main')
let currentDate = new Date()
let days = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let day = days[currentDate.getDay()]
let hour = currentDate.getHours()

if(hour > 12){
  hour = hour - 12
  console.log('yes', hour);
  
}else{
  null
}
let mints = +currentDate.getMinutes()
let time = hour+':' + mints
let date = day + ' ' + time 

const getData = () => {
return new Promise((resolve,reject)=>{
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=c7a75b3fc1e0f8569dcb075cee2a6a30`)
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=c7a75b3fc1e0f8569dcb075cee2a6a30&units=metric`)

.then(res => res.json())
.then(res => resolve(res))
.catch(err => reject(err))
})
}
mainDiv.innerHTML = "<p>Loading...</p>";


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
.catch(err =>  mainDiv.innerHTML = "<p>Failed to fetch data. Please try again.</p>")
}

if(country){
    searchCountry()
    console.log('country found');
}else{
    console.log('country not found');
}