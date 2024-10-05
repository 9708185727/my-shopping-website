import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {
  const {count}=useSelector((state)=>state.counter)
  return (
    <div>
    {count}
      <h1>this is About page</h1>
    </div>
  )
}

export default About
