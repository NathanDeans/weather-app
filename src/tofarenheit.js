function tofarenheit(tempC,feelsLikeC) {
    const tempFeelsLike = document.getElementById("feels")
    const tempButton = document.getElementById("button")
    const tempurature = document.getElementById("tempurature")
    

    if(tempButton.textContent === "Change to Farenheit") {
       const farenTemp = Math.floor((tempC * 1.8) + 32);
       const feelsLikeFaren = Math.floor((feelsLikeC * 1.8) + 32);

       tempurature.textContent = `Tempurature: ${farenTemp}°F`;
       tempFeelsLike.textContent = `Feels Like: ${feelsLikeFaren}°F`;
       tempButton.textContent = "Change to Celsius";

    } else {
        tempButton.textContent = "Change to Farenheit"
        
        tempurature.textContent = `Tempurature: ${tempC}°C`;
        tempFeelsLike.textContent = `Feels Like: ${feelsLikeC}°C`;
    }

}

export default tofarenheit;