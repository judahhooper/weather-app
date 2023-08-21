import { DateTime } from "luxon";

const API_KEY = '5cd6b2ccc44d12262e1fc69a464eafff';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY}
        );

    return fetch(url).then((res) => res.json().then((data)=>data));
};

const formatCurrentWeather = (data) => {
    const { 
        coord: { lat , lon },
        main: { temp, feels_like, temp_min, temp_max, humidity},
        name, 
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: {speed},
    } = data;

    const {main: details, icon} = weather[0];

    return {lat, lon, temp, feels_like, temp_min, temp_max, 
        humidity, name, dt, country, sunrise, sunset, details, icon, speed}
};

const formatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data;
    daily = daily.slice(1, 6).map(d=> {
        return {
            title:formatToLocalTime(d.dt, timezone, 'ccc')
        }
    });
};

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData
    ('weather', searchParams).then(formatCurrentWeather);
    
    const { lat, lon } = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData('onecall', { lat, lon, exclude: 'current, minutely, alerts', units: searchParams.units}).then(formatForecastWeather);
    
    return formattedCurrentWeather;
};

const formatToLocalTime = ( secs, zone, format="cccc, dd, LLL YYYY' | Local time: 'hh:mm a" ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export default getFormattedWeatherData;
