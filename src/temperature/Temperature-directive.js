const API_KEY = 'ef220eb06ea2bca8643d0eb0fa6747fb';
const COORDS = 'coords';

const getWeather = (lat, lng) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function (response) {
        return (response.json());
    }).then(function (json) {
      console.log(json);
      const temperature = json.main.temp;
      const locale = json.name;
      const wind = json.wind.speed;
      const weather = json.weather[0].main;

      const _temperature = document.querySelector(".w-temperature");
      const _locale = document.querySelector(".w-locale");
      const _wind = document.querySelector(".w-wind");
      const _weather = document.querySelector(".w-weather");

      _temperature.innerText = `${temperature}`;
      _locale.innerText = `${locale}`;
      _wind.innerText = `${wind}m/s`
      _weather.innerText = `${weather}`;
    })
}

const saveCoords = (coordsObj) => {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

const handleGeoSuccess = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
      latitude,
      longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

const handleGeoError = () => {
    console.log('Cant access geo location');
}

const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

const loadCoords = () => {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        console.log()
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

export default function init() {
    loadCoords();
}