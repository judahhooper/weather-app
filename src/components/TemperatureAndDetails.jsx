import React from 'react';
import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset} from "@iconscout/react-unicons";

const TemperatureAndDetails = () => {
  return ( <div>
    <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        <p>from temp component</p>
    </div>

    <div className='flex flex-row items-center justify-between text-white py-3'>
        <img src="/" alt='/' className='w-20'/> 
        <p className='text-5xl'>34°C</p>
        <div className='flex flex-col space-y-2'>

            <div className='flex font-light text-sm items-center justify-center'>
            <UilTemperature  size={18} className='mr-1'/> Feels Like: <span className='font-medium ml-1'>21°C</span>
            </div>

            <div className='flex font-light text-sm items-center justify-center'>
            <UilTear  size={18} className='mr-1'/> Humidity: <span className='font-medium ml-1'>15%</span>
            </div>

            <div className='flex font-light text-sm items-center justify-center'>
            <UilWind  size={18} className='mr-1'/> Wind Speed: <span className='font-medium ml-1'>11km/h</span>
            </div>

        </div>
    </div>

    <div className='flex flex-row items-center justify-center text-sm py-3'>
    <UilSun />
    <p className='font-light mx-1'>Rise: <span className='font-medium mr-1'>6:31am</span></p>
    <p className='font-light'>|</p>

    <UilSunset />
    <p className='font-light mx-1'>Set: <span className='font-medium mr-1'>9:56pm</span></p>
    <p className='font-light'>|</p>

    <UilSun />
    <p className='font-light mx-1'>High: <span className='font-medium mr-1'>25°C</span></p>
    <p className='font-light'>|</p>

    <UilSun />
    <p className='font-light mx-1'>Lo: <span className='font-medium mr-1'>19°C</span></p>
    <p className='font-light'></p>

    </div>

    
</div>
  )
  } 
export default TemperatureAndDetails