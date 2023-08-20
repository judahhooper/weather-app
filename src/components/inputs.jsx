import React from 'react';
import { UilSearch } from '@iconscout/react-unicons';

const Inputs = () => {
  return (
    <div className='flex flex-row justify-center my-6 '>
        
        {/* search bar and icon */}
        <div className='flex flex-row width-3/4 items-center space-x-4'>
            <input placeholder='Start typing...'type='text' className='text-xl font-light p-2 focus:outline-none capitalize'></input>
            <UilSearch size={20} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
        </div>

        {/* celsius and farenheit */}
        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name='metric' className='text-xl text-white font-light'>°C</button>
            <p className='text-xl text-white mx-2'>|</p>
            <button name='imperial' className='text-xl text-white font-light'>°F</button>
        </div>
    </div>
  )
}

export default Inputs