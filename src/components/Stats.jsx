import React from 'react'
import styles from '../styles'
import { stats } from '../constants/navLinks'
const Stats = () =>  (
    <div className={`flex-row flex-wrap ${styles.flexCenter} `}>
         {
          stats.map((item)=> (
            <div key={item.id} className={`flex mx-5 ${styles.flexCenter} text-[20px] text-white `}>
              <h3 className='text-[20px] my-2 sm:my-0 sm:text-[35px] font-semibold '>{item.value}</h3>
              <p className='mx-2 text-gradient'>{item.title}</p>
            </div>
          ))
         }
    </div>
  )


export default Stats