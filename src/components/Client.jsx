import React from 'react'
import { clients } from '../constants/navLinks'
const Client = () => {
  return (
    <div className='flex gap-[3rem] sm:gap-[7.6rem] flex-wrap justify-center my-5 items-center'>
       {clients.map((items) => (
        <img src={items.logo} key={items.id} alt="logo" className='w-[150px] ' />
       ))}
    </div>
  )
}

export default Client