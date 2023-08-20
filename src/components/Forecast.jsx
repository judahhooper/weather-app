import React from 'react'

const Forecast = ({title}) => {
  return (
    <div>
        <div className='flex justify-start items-center mt-6'>
            <p className='text-white font-medium uppercase'>Hourly Forecast</p>
        </div>

        <hr className='my-2'/>

        <div className='flex flex-row items-center justify-between text-white'>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'> 4:30pm </p>
                <img src="/" alt='/' className='w-12 my-1'/>
                <p className='font-medium'>22°C</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'> 4:30pm </p>
                <img src="/" alt='/' className='w-12 my-1'/>
                <p className='font-medium'>22°C</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'> 4:30pm </p>
                <img src="/" alt='/' className='w-12 my-1'/>
                <p className='font-medium'>22°C</p>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'> 4:30pm </p>
                <img src="/" alt='/' className='w-12 my-1'/>
                <p className='font-medium'>22°C</p>
            </div>
        </div>

    </div>
  )
}

export default Forecast