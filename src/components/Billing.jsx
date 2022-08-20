import React from 'react'
import Button from './Button'
import styles , {layout} from '../styles'
const Billing = () => {
  return (
    <div className={`  bg-black-gradient-2  rounded-lg px-8 my-7`}>
  <div className={`flex justify-between items-center sm:flex-row w-full ${layout.section} sm:py-8 py-6`}>
  <div className="">
      <h1 className='text-white text-[40px] font-medium'>Let’s try our service now!</h1>
      <p className={`${styles.paragraph} md:max-w-[400px] text-[16px] my-2`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>
    <div className="flex  justify-between items-center">
      <Button/>
    </div>
  </div>
</div>
  )
}

export default Billing