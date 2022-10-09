const API_KEY ="79365b1d2caff9a079b551800f8530e5";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherIcon = document.getElementById("weather-img");
            const weatherIconCode = data.weather[0].icon;
            const temp = document.getElementById("weather-temp");
            const locate = document.getElementById("weather-locate");
            weatherIcon.src = `img/weather-icon/${weatherIconCode}.png`;
            temp.innerText = `${Math.round(data.main.temp)}℃`;
            locate.innerText = data.name;
    });
};

function onGeoError() {
innerText="Can't find your location";
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);