import React, {useEffect, useState} from 'react'
import './MainPageStyle.css'
import AddPostButton from '../../components/common/button/AddPostButton'
import ScrollTopButton from '../../components/common/button/ScrollTopButton'
import MainPageImageSlide from './imageSlide/MainPageImageSlide'
import MiddleBar from './middleBar/MiddleBar'
import RecommendBar from './recommendBar/RecommendBar'
import SearchBar from './searchBar/SearchBar'



export default function MainPage() {

  return (
    <>
     {/* <div>헤더자리</div> */}
    <div className='MainImageBox'>
      <MainPageImageSlide/>
    </div>

      <div className='center'>
          <MiddleBar/>
          <RecommendBar/>
          <SearchBar/>
      </div>

    <div className='sideButtonGroup'>
      <AddPostButton/>
      <ScrollTopButton/>
    </div>

    {/* <div>푸터자리</div> */}
    </>
  )
}

// Infinityscroll