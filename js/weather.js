/* Example 1: Fetching Weather Data */

navigator.geolocation.getCurrentPosition(function (position) {
    
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;   
    displayWeather(lat ,lon)
    
});


const weatherReport = document.querySelector('.weather-report');

function displayWeather(lat, lon) {
    const apiKey = '0f6869a37d6f4d38b7d111034230912';
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=3&aqi=no&alerts=no`;

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        
        const dateDays = data.forecast.forecastday.map(day => day.date_epoch * 1000);
        const currebtData = data.current.condition.icon;

        console.log(data);

        weatherReport.innerHTML = `
        <h2>Dagens väder</h2>
        
            <div class="first">
                <img src= ${currebtData} class='weather-icon'/>
                <div class = 'weather-info'>
                    <h4>Idag</h4>  
                    <div class='current-weather'>
                        <p>${data.current.temp_c}°C</p>
                        <p>${data.current.condition.text}</p>
                    </div> 
                </div>                            
            </div>
            `;
        
        for (let i = 1; i < 3; i++) {
            let day = '';
            let titel = '';
            const datas = data.forecast.forecastday[i];
            if (i === 1) {
                day = 'second';
                titel = 'Imorgon'
            
            } else if (i === 2) {
                day = 'third';
                titel = 'Dag tre'
                
            }
            weatherReport.innerHTML += `
            <div class = ${day} >
                <img src= ${datas.day.condition.icon} class='weather-icon'/>
                <div class = 'weather-info'>            
                    <h4>${titel}</h4> 
                <div class='current-weather'>
                    <p>${datas.day.avgtemp_c}°C</p>
                    <p>${datas.day.condition.text}</p>
                </div>
                </div>
            </div>                                            
        
        `
        }
    })

    .catch(error => {
        console.error('Error:', error);
    })
}




    