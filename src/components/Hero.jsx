import React from 'react'
import styles from '../styles'
import { robot, discount } from "../assets"
const Hero = () => (
  <section id='#home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded mb-2">
        <img src={discount} alt="" />
        <p className={`${styles.paragraph}`}>
          <span className='text-white mx-2'>20%</span>
          Discount For {" "}
          <span className='text-white mx-2'>1 Month</span>
          Account
        </p>
      </div>
      <div className="">
        <h1 className=' text-white text-[34px]  sm:text-[50px] font-bold'>The Next <br className='sm:block hidden' /> <span className='text-gradient'>Generation</span>  <br />
          Payment Method.</h1>
        <p className={`${styles.paragraph} max-w-[400px]`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
          We examine annual percentage rates, annual fees.</p>
      </div>
    </div>
    <div className="">
      <img src={robot} className="w-[500px]" alt="" />
    </div>
  </section>
)


export default Hero