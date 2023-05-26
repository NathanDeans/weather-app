import tofarenheit from "./tofarenheit";

function displayWeather(object) {
    let cityName = document.getElementById("cityName")
    let tempurature = document.getElementById("tempurature")
    let tempFeelsLike = document.getElementById("feels")
    let weatherDescript = document.getElementById("descript")


    cityName.textContent = ` Location: ${object.name}`;
    tempurature.textContent = `Tempurature: ${object.temp}°C`;
    tempFeelsLike.textContent = `Feels Like: ${object.feelsLike}°C`;
    weatherDescript.textContent = `${object.descript}`;
    

    let tempButton = document.getElementById("button")
    let weatherDisplay = document.getElementById("weatherDisplay")

    tempButton.className = "farenButtonVis";
    weatherDisplay.className = "weatherDisplayVis"
    
    tempButton.addEventListener("click", () => {
        tofarenheit(object.temp, object.feelsLike);
    } )

    const farenDiv = document.getElementById("farenheit");
    
    farenDiv.appendChild(tempButton);


}

export default displayWeather;