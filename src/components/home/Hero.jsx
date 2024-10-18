import React from 'react'
import iphone16 from '../../assets/images/iphone16.png'
import cetaphil from '../../assets/images/cetaphil.png'
import ledtv from '../../assets/images/ledtv.png'
import laptop from '../../assets/images/asus.png'
import { Carousel } from 'react-responsive-carousel';

import Carouseltem from './Carouseltem'
const Hero = () => {
  return (
    <div>
         <Carousel className='bg-teal-500 rounded-md' autoPlay showThumbs={false} showIndicators={false}  showArrows={false} infiniteLoop>
            <Carouseltem name="Cetaphile Mosterizer" image={cetaphil}/>
            <Carouseltem name="Iphone 16 pro max" image={iphone16}/>
            <Carouseltem name="Samsung Tv" image={ledtv}/>
            <Carouseltem name="Asus Zen book 14 " image={laptop}/>
            
            </Carousel>
    </div>
  )
}

export default Hero
