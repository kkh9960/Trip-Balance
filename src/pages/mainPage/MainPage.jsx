/* global kakao */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './MainPageStyle.css'
import AddPostButton from '../../components/common/button/AddPostButton'
import ScrollTopButton from '../../components/common/button/ScrollTopButton'
import MainPageImageSlide from './imageSlide/MainPageImageSlide'
import MiddleBar from './middleBar/MiddleBar'
import RecommendBar from './recommendBar/RecommendBar'
import SearchBar from './searchBar/SearchBar'
import { __getMapData } from '../../redux/modules/MapSlice'
import MapBar from '../../shared/api/map/MapBar'
import DoughnutChart from './mapBar/DoughnutChart'
import WeatherBar from './mapBar/weatherBar/WeatherBar'


export default function MainPage() {

  return (
    <>
     {/* <div>헤더자리</div> */}
    <div className='MainImageBox'>
      <MainPageImageSlide/>
    </div>

    <div className='center'>
      <MiddleBar />
        <div className='mapGroup'>
          <MapBar />
          <DoughnutChart />
          <WeatherBar/>
        </div>
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