import displayWeather from "./displayWeather";



const submitButton = document.querySelector("#submit")
const input = document.querySelector("#location");

submitButton.addEventListener("click", () => {
    getLocation(input)
})

function getLocation(input) {
    const location = input.value;
    getData(location)
}

async function getData(input) {
    
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=0024062e7b3472b40fcb0e8aa856ec69`, {mode:"cors"}
    );
    
    const weatherData = await response.json();
   
    
    
    
    const filterData = (data) => {
        const weatherObj = {
            name: data.name,
            temp: Math.floor((data.main.temp - 273.15)),
            feelsLike: Math.floor((data.main.feels_like - 273.15)),
            descript: data.weather[0].description,
    
        }
       console.log(weatherObj.temp)
        displayWeather(weatherObj)
    }
    
    filterData(weatherData)
    
    }