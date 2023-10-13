const URLBase = "https://api.openweathermap.org/data/2.5/weather?";
const ApiKey = "adb20c640ac421ba1ee77292bf084d34";
const body = document.querySelector('body');

const inputCity = document.querySelector('#city');
const btnBuscar = document.querySelector('#btnBuscar');

const fetchApi = url => fetch(url).then(response => response.json());

async function getClima(lat, lon){
    const url = `${ URLBase }lat=${ lat }&lon=${ lon }&appid=${ ApiKey }`;

    const clima = await fetchApi(url);
    console.log(clima);
    document.querySelector('#left h2').innerHTML = clima.name;
    const temperatura = clima.main.temp - 273.15;
    /* */
    let tempColor = '';
    let emoji = '';
    if(temperatura >= 25.0){
      tempColor = 'orange';
      emoji = '🥵';
    } else if(temperatura >= 12.0){
      tempColor = 'yellow';
      emoji = '☀';
    } else{
      tempColor = 'blue';
      emoji = '🥶';
    }
    /* */
    document.querySelector('#left h3').innerHTML = temperatura.toFixed(2) + '°C ' + emoji;
    body.style.background = tempColor;
}

async function getClimaByCity(city){
    const url = `${ URLBase }q=${ city }&appid=${ApiKey}`;
    const clima = await fetchApi(url);
    console.log(clima);
    document.querySelector('#left h2').innerHTML = clima.name;
    const temperatura = clima.main.temp - 273.15;
    /* */
    let tempColor = '';
    let emoji = '';
    if(temperatura >= 25.0){
      tempColor = 'orange';
      emoji = '🥵';
    } else if(temperatura >= 12.0){
      tempColor = 'yellow';
      emoji = '☀';
    } else{
      tempColor = 'blue';
      emoji = '🥶';
    }
    /* */
    document.querySelector('#left h3').innerHTML = temperatura.toFixed(2) + '°C ' + emoji;
    body.style.background = tempColor;
}

navigator.geolocation.getCurrentPosition(
    position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getClima(lat, lon);
    }
);

btnBuscar.addEventListener('click', () => {
    const city = inputCity.value;
    if(city){
        getClimaByCity(city)
    }
})