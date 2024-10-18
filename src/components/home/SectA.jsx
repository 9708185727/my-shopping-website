import React from 'react'
import Iphone from '../../assets/images/iphone.png'

const SectA = () => {
  return (
    <>
      <div className='ms-12  rounded-full bg-teal-500  p-4 w-36 h-36 md:w-60 lg:w-60 relative  md:h-60 lg:60   me-24 '>
      <p className="float right absolute top-5 right-[-70px]  md:left-[-56px] lg:left-[-60px]  p-1 bg-white shadow-sm rounded-lg text-sm max-w-36">
            के किन्नुहुन्छ हजुर ?
          </p>
        <img src={Iphone} alt="eroor" className='w-32 h-32 md:w-56 lg:w-56 lg:h-56 md:h-56  rounded-full p-2 '/>
      </div>
    </>
  )
}

export default SectA
