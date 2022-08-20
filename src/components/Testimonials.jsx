import React from 'react'
import styles from '../styles'
import { feedback } from '../constants/navLinks'
import { quotes } from '../assets'
const Testimonials = () => {
  return (
    <section className=''>
       <div className="flex justify-between items-center flex-wrap gap-3">
        <h1 className='text-white text-[40px] font-medium'>What people are <br className="md:block hidden "/>saying about us</h1>
        <p className={`${styles.paragraph} md:max-w-[400px] text-[16px] my-2`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
       </div>
       <div className="flex justify-between my-9 flex-wrap">
          {
            feedback.map((item)=> (
              <div key={item.id} className="py-9 px-5 feedback-card rounded-lg">
                <img src={quotes} alt="quotes " className='' />
               <p className='text-white max-w-[300px] my-7'>{item.content}</p>
              <div className="flex mt-2">
              <img src={item.img} alt="card"  className='w-[50px] h-[50px]'/>
              <div className='ml-3 flex-col items-center'>
              <h3 className='text-white leading-0 text-[15px]'>{item.title}</h3>
               <p className={`${styles.paragraph} leading-4 text-[12px] `}>{item.name}</p>
              </div>
              </div>
            </div>

            ))
            
          }
       </div>
    </section>
  )
}

export default Testimonials