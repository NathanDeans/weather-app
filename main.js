(()=>{"use strict";const e=function(e){let t=document.getElementById("cityName"),n=document.getElementById("tempurature"),o=document.getElementById("feels"),a=document.getElementById("descript");t.textContent=` Location: ${e.name}`,n.textContent=` Current Tempurature: ${e.temp}°C`,o.textContent=`Feels Like: ${e.feelsLike}°C`,a.textContent=`${e.descript}`;let c=document.getElementById("button"),m=document.getElementById("weatherDisplay");c.className="farenButtonVis",m.className="weatherDisplayVis",c.addEventListener("click",(()=>{!function(e,t){const n=document.getElementById("feels"),o=document.getElementById("button"),a=document.getElementById("tempurature");if("Change to Farenheit"===o.textContent){const c=Math.floor(1.8*e+32),m=Math.floor(1.8*t+32);a.textContent=`Current Tempurature: ${c}°F`,n.textContent=`Feels Like: ${m}°F`,o.textContent="Change to Celsius"}else o.textContent="Change to Farenheit",a.textContent=`Current Tempurature: ${e}°C`,n.textContent=`Feels Like: ${t}°C`}(e.temp,e.feelsLike)})),document.getElementById("farenheit").appendChild(c)},t=document.querySelector("#submit"),n=document.querySelector("#location");t.addEventListener("click",(()=>{!function(t){!async function(t){const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&APPID=0024062e7b3472b40fcb0e8aa856ec69`,{mode:"cors"});(t=>{const n={name:t.name,temp:Math.floor(t.main.temp-273.15),feelsLike:Math.floor(t.main.feels_like-273.15),descript:t.weather[0].description};console.log(n.temp),e(n)})(await n.json())}(t.value)}(n)}))})();