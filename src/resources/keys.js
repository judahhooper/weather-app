const apiKey = '065c75edbe6e40dcb3723fa311578a92';
const baseURL = 'https://api.openweathermap.org/data/2.5'


//https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}


const weatherDataGetter = (infoType, searchParams) => {
        const newURL = new URL(baseURL + '/' + infoType);
        newURL.search = new URLSearchParams({...searchParams,  appid:apiKey});

        return fetch(newURL).then((response) => response.json())
        .then((data) => data);
}

export default weatherDataGetter