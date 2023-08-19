import React from 'react'

const TopButtons = () => {

    const cities = [
        {
            id:"1",
            name:"london"
        },
        {
            id:"2",
            name:"los angeles"
        },
        {
            id:"3",
            name:"vienna"
        },
        {
            id:"4",
            name:"beirut"
        },
        {
            id:"5",
            name:"marrakesh"
        }
    ]
  return (
    <div className='flex items-center justify-center my-6'>
        {cities.map((city) => (
            <button className='text-white text-lg font-medium'>{city.title}</button>
        ))}
    </div>
  )
}

export default TopButtons