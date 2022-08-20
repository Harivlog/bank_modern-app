import React, { useState } from 'react'
import {logo ,menu ,close} from "../assets"
import {navLinks} from "../constants/navLinks"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
    <nav className="w-full flex py-6  justify-between items-center navbar">
      <img src={logo} alt="logo" className='w-[124px] h-[32px]'/>
      <ul className="flex list-none sm:flex hidden flex-1 justify-end items-center">
      {navLinks.map((navItems) => (
        <li 
        key={navItems.id}
        className="cursor-pointer  text-white sm px-2.5 text-[16px] font-poppins"
        >
          <a href={`#${navItems.id}`}>{navItems.title}</a>
        </li>
      ))}
      </ul>
      <div className="sm:hidden">
        <img 
         src={toggle ? close : menu} alt="toggle"
         className='w-[23px] h-[23px]'
         onClick={()=> setToggle((prev) => !prev)} />
         <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-width-[140px] rounded-xl sidebar`}>
         <ul className="list-none flex flex-col flex-1 justify-end items-center">
      {navLinks.map((navItems) => (
        <li 
        key={navItems.id}
        className="cursor-pointer text-white sm px-2.5 mb-3 text-[16px] font-poppins"
        >
          <a href={`/${navItems.id}`}>{navItems.title}</a>
          
        </li>
      ))}
      
      </ul>
         </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar