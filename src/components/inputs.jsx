import React from 'react';
import { UilSearch } from '@iconscout/react-unicons';

const Inputs = () => {
  return (
    <div className='flex flex-row justify-center my-6 '>
        <div className='flex flex-row width-3/4 items-center space-x-4'>
            <input placeholder='Start typing...'type='text' className='text-xl font-light p-2 focus:outline-none capitalize placeholder:lowercase'></input>
            <UilSearch size={20} className="text-white cursor-pointer transition ease-out hover:scale-125"/>

        </div>
    </div>
  )
}

export default Inputs