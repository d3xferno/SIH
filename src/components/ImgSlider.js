import React, { useEffect, useState } from 'react'
import { SliderData } from './images'
import './ImgSlider.css'

function ImgSlider() {
    const [cur,setCur] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setCur((cur+1)%(SliderData.length))
        },4000)
    })
  return (
    <div className='slider'>
        <img
            className='img'
            src={SliderData[cur].image}
            alt='image'
        />
    </div>
  )
}

export default ImgSlider