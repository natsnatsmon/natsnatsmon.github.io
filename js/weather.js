const weatherCast = document.querySelector("#weatherCast");
const city = weatherCast.querySelector("p:first-child");
const weather = weatherCast.querySelector("p:last-child");
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const key = "2109dd6214f535f2c75e277a869a283e";
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric&lang=kr`;
    fetch(api).then(response => response.json()).then(data => {
        city.innerText = data.name;
        weather.innerText = Math.round(parseInt(data.main.temp)) + "℃  " + data.weather[0].main;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
