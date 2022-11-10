import React, {useState} from 'react'
import SimpleImageSlider from 'react-simple-image-slider'
import bg from '../../../img/bg.jpg'
import bg1 from '../../../img/bg1.jpg'
import bg2 from '../../../img/bg2.jpg'
import './MainPageImageSlideStyle.css'

export default function ImageSlide() {
  // const [resizedImage, setResizedImage] = useState(undefined) 리사이즈 필요

  const images = [
    bg,
    bg1,
    bg2
  ]

  return (
      <SimpleImageSlider
        style={{objectFit:'cover', position:'relative'}}
        width='100%'
        height='880px'
        images={images}
        navMargin={10}
        navSize={70}
        navStyle={1}
        showBullets={true}
        showNavs={true}
        slideDuration={0.5}
        autoPlay={true}
        autoPlayDelay={4.0}
      />
  )
}

