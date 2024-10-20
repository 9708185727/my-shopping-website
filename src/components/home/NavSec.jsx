import React from 'react'

const NavSec = ({ filterData, categories }) => {
  return (
    <>
    {
      categories.map((curElem)=>{
        return(
       
          <button  key={curElem} type="button"  onClick={()=>{filterData(curElem)}} className='bg-teal-500 text-white rounded-lg shadow-sm px-4 mx-1 my-2  hover:bg-teal-500'>{curElem}</button>
        
        )
      })
    }
     
    </>
  )
}

export default NavSec
