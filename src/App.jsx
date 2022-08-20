import React from 'react'
import styles from "./styles"
import { Navbar ,Hero , Stats ,Bussiness ,CTA ,Footer,Testimonials ,Client , CardDeal ,Billing } from './components'
const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
     
          <Navbar/>
          <Hero/>
          <Stats/>
          <Bussiness/>
          <CTA/>
          <Testimonials/> 
          <CardDeal/> 
          <Client/> 
          <Billing/>
          <Footer/> 
        </div>
      </div>
    </div>
  )
}

export default App