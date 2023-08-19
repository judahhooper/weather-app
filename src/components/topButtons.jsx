import React from 'react'

const TopButtons = () => {

    const cities = [
        {
            id:1,
            title:"London"
        },
        {
            id:2,
            title:"Los Angeles"
        },
        {
            id:3,
            title:"Vienna"
        },
        {
            id:4,
            title:"Beirut"
        },
        {
            id:5,
            title:"Marrakesh"
        }
    ]
  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city) => (
            <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
        ))} 
    </div>
  )
}

export default TopButtons