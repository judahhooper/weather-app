const apiKey = '065c75edbe6e40dcb3723fa311578a92';
const baseURL = 'https://api.openweathermap.org/data/2.5'


//https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}


/* logic for api call */
const weatherDataGetter =  async (infoType, searchParams) => {
        const newURL = new URL(baseURL + '/' + infoType);
        newURL.search = new URLSearchParams({...searchParams,  appid:apiKey});
        return fetch(newURL).then((response) => response.json())
        .then((data) => data);
};

/* logic for formatting using object destructuring */
const formatCurrentWeatherData = (data) => {
        const {
                coord:{lat,lon},
                main:{temp,feels_like,temp_min,temp_max,humidity},
                name,
                dt,
                sys:{country,sunrise,sunset},
                weather,
                wind:{speed}
        } = data;

        const {main: details, icon} = weather[0];

        return {lat,lon,temp,feels_like,temp_min,temp_max,humidity,name,dt,country,sunrise,sunset,details,icon,speed}
}


const formatForecastWeatherData = (data) => {
        let { timezone, daily, hourly } = data;
        daily = daily.slice(1,6).map()
}


/* logic for pulling formatted data through */
const getFormattedWeatherData = async (searchParams) => {
        const formattedCurrentWeatherData = await weatherDataGetter('weather', searchParams).then(formatCurrentWeatherData);

        const {lat,lon} = formattedCurrentWeather;

        const formattedForecastData = await weatherDataGetter('onecall', {
                lat,lon, exclude:'current,minutely,alerts', units: searchParams.units
        }).then(formatForecastWeatherData);

        return formattedCurrentWeatherData;
}


export default getFormattedWeatherData