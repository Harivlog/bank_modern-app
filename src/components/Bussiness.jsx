import React from 'react'
import {features} from "../constants/navLinks"
import styles , {layout} from '../styles'
import Button from "./Button"
const Bussiness = () =>  (
    <section id='features' className={`${layout.section} md:justify-around `}>
       <div className={layout.sectionInfo}>
        <h1 className='text-white text-[40px] font-medium  '>You do the business,<br className='sm:block hidden'/> we’ll handle the money.</h1>
        <p className={`${styles.paragraph} max-w-[420px] text-[16px] my-2`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button/>
       </div>
       <div className="">
        {
          features.map((items) =>(
            <div className="flex  my-5 feature-card p-2 rounded-xl" key={items.id}>
               <div className="flex items-center justify-center rounded-full w-[65px] bg-dimBlue mx-3">
                <img src={items.icon} alt="icon" className='w-[40%] h-[50%] '/>
               </div>
               <div className="">
                <h4 className='text-white'>{items.title}</h4>
                <p className={`${styles.paragraph} leading-5 text-[12px] md:max-w-[450px]` }>{items.content}</p>
               </div>
            </div>
          ))
        }
       </div>
    </section>
  )


export default Bussiness