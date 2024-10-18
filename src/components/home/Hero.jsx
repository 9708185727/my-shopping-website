import React from 'react'
import iphone16 from '../../assets/images/iphone16.png'
import cetaphil from '../../assets/images/cetaphil.png'
import ledtv from '../../assets/images/ledtv.png'
import laptop from '../../assets/images/asus.png'
import { Carousel } from 'react-responsive-carousel';
import Title from '../Title';
const Hero = () => {
  return (
    <div>
         <Carousel className='bg-teal-500 rounded-md' autoPlay showThumbs={false} showIndicators={false}  showArrows={false} infiniteLoop>
                <div className='grid grid-cols-2 items-center '>
                    <Title label="Cetaphil mosterizer" className="text-white"/>
                    <img src={cetaphil} className='w-32 h-36 md:w-56 lg:w-56 lg:h-56 md:h-56  rounded-full ' />
                   
                </div>
                <div  className='grid grid-cols-2 items-center' >
                <Title label="Samsung Tv"  className="text-white" />
                    <img src={ledtv} className='w-32 h-36 md:w-56 lg:w-56 lg:h-56 md:h-56  rounded-full  '/>
                  
                </div>
                <div className='grid grid-cols-2 items-center '>
                <Title label="Iphone 16 pro max"className="text-white"/>
                    <img src={iphone16} className='w-32 h-36 md:w-56 lg:w-56 lg:h-56 md:h-56  rounded-full  ' />
                  
                </div>
                <div className='grid grid-cols-2 items-center '>
                <Title label="Asus Zen book 14  " className="text-white"/>
                    <img src={laptop} className='w-32 h-36 md:w-56 lg:w-56 lg:h-56 md:h-56  rounded-full  ' />
                  
                </div>
            </Carousel>
    </div>
  )
}

export default Hero
