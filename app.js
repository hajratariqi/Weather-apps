let mainDiv = document.getElementById('main')

const getData = () => {
return new Promise((resolve,reject)=>{
fetch(`https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=c7a75b3fc1e0f8569dcb075cee2a6a30`)
.then(res => res.json())
.then(res => resolve(res))
.catch(err => console.log(err))
})
}


getData()
.then((res)=>{
    console.log(res);
    mainDiv.innerHTML = `
      <div>
        <h1>Weather in ${res.name}, ${res.sys.country}</h1>
        <p>Temperature: ${res.main.temp - 273.15}°C</p>
        <p>Weather: ${res.weather[0].description}</p>
        <p>Humidity: ${res.main.humidity}%</p>
        <p>Wind Speed: ${res.wind.speed} m/s</p>
        <img class='weather-icon' src='https://cdn-icons-png.flaticon.com/512/252/252035.png' alt="Weather icon"/>
      </div>
    `
})