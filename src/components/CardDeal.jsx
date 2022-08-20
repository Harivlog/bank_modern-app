import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../styles'
import Button from './Button'
const CardDeal = () => {
  return (
    <section className={`${layout.sectionInfo} gap-[6rem] ${layout.section} `}>
      <div >
        <h1 className='text-white text-[40px] font-medium  '>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h1>
        <p className={`${styles.paragraph} max-w-[420px] text-[16px] my-2`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button />
      </div>
      <div className="max-w-[500px]">
        <img src={card} alt="bill" className='w-[100%]' />
      </div>
    </section>
  )
}

export default CardDeal