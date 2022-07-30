// Basic Imports 
import { useEffect, useRef, useState } from 'react'


//Import Components and styles
import styles from '../styles/HomeBanner.module.css'
import Carousel from '../components/Carousel'


const HomeBanner = () => {

    

  return (
    <> 
    <div
    className={styles.bannerbg}
    
    >
    <div className="container h-100 flex flex-col pt-8 justify-around mx-auto">
        <div className="text-7xl font-bold mb-5 font-montserrat" as="h2"> Crypto Watchex</div>
    <div className="font-montserrat text-xl pl-4"> Get info about your Crypto Currencies</div>
    </div>

    {/* Carousel  */}
    
    <Carousel></Carousel>

    </div>
    </>
  
)}

export default HomeBanner