import React from 'react'
import {bill} from "../assets"
import styles , {layout} from '../styles'
import { apple , google } from '../assets'
const CTA = () => {
  return (
    <section className={`${layout.section} justify-around`} id='cta'>
      <div className="max-w-[600px]">
        <img src={bill} alt="bill" className='w-[100%]' />
      </div>
      <div className="flex flex-col  justify-center">
          <h2 className='text-white  text-[40px] font-medium'>Easily control your <br className="md:block hidden "/> billing & invoicing.</h2>
          <p className={`${styles.paragraph} md:max-w-[400px] text-[16px] my-2`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
          <div className="flex my-4">
            <img src={google} alt="google" />
            <img src={apple} alt="apple" className='cursor-pointer ml-2 object-contain' />

          </div>
      </div>
    </section>
  )
}

export default CTA