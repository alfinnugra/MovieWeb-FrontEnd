import React from 'react'
import ImgExample from '../../assets/example.jpg'

function HeroSection() {
  return (
    <div className="heroSection px-5">
        <img src={ImgExample} className='rounded-3xl' />
    </div>
  )
}

export default HeroSection