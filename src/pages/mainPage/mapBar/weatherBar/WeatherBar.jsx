import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { __getWeatherData } from '../../../../redux/modules/WeatherSlice';
import './WeatherBarStyle.css'



export default function WeatherBar() {
  const dispatch = useDispatch();
  const weatherdata = useSelector((state) => state.WeatherSlice.data)
  useEffect(() => {
    dispatch(__getWeatherData())
  }, [])
  console.log(weatherdata)

  return (
    <div>WeatherBar</div>
  )
}
