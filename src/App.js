import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import weatherDataGetter from './resources/keys';


function App() {

    const fetchWeather = async () => {
        const data = await weatherDataGetter('weather', {q: 'london'});
        console.log(data);
    };

        fetchWeather();
return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-grey-400'>
        <TopButtons />
        <Inputs />
        <TimeAndLocation />
        <TemperatureAndDetails />
        <Forecast title={"hourly forecast"}/>
        <Forecast title={"daily forecast"}/>
    </div>
)


}

export default App;
