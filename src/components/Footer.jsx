import React from 'react'
import { copywrite } from "../assets"
import styles, { layout } from '../styles'
import { socialMedia, footerLinks } from '../constants/navLinks'
import { logo } from '../assets'
const Footer = () => {
  return (
    <footer className='mt-[6rem]'>
      <div className="flex justify-between items-center flex-wrap gap-3">
        <div className="">
          <img src={logo} alt="" />
          <p className={`${styles.paragraph} md:max-w-[400px] text-[16px] my-2`}>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className="">
          <p className='text-white mb-5'>{footerLinks[0].title}</p>

          {footerLinks[0].links.map((item, index) => (
            <li key={index} className="list-none">
              <a className={`${styles.paragraph} md:max-w-[400px] text-[16px] my-2`} href={item.link}>{item.name}</a>
            </li>
          ))}
        </div>
        <div className="">
          <p className='text-white mb-5'>{footerLinks[2].title}</p>

          {footerLinks[1].links.map((item, index) => (
            <li key={index} className="list-none">
              <a className={`${styles.paragraph} md:max-w-[400px] text-[16px] my-2`} href={item.link}>{item.name}</a>
            </li>
          ))}
        </div>
        <div className="">
          <p className='text-white mb-5'>{footerLinks[2].title}</p>

          {footerLinks[2].links.map((item, index) => (
            <li key={index} className="list-none">
              <a className={`${styles.paragraph} md:max-w-[400px] text-[16px] my-2`} href={item.link}>{item.name}</a>
            </li>
          ))}
        </div>
      </div>
      <div className={`flex-row sm:flex justify-between items-center `}>
        <div className="">
          <p className={`flex justify-center items-center ${styles.paragraph} md:max-w-[400px] text-[10px] sm:text-[16px] my-2`}>Copyright <span><img src={copywrite} alt="copywrite" className='mx-2' /></span> 2021 HooBank. All Rights Reserved.</p>
        </div>
        <div className="flex justify-center items-center ">
          {
            socialMedia.map((items) => (
              <img src={items.icon} className="mx-3 cursor-pointer" key={items.id} />
            ))
          }

        </div>
      </div>
    </footer>
  )
}

export default Footer