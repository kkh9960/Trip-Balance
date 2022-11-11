/* global kakao */
import React, { useEffect } from 'react'
import './DoughnutChartStyle.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {chartData} from './DoughnutChartData'
import { __getMapData } from '../../../redux/modules/MapSlice';
import { useSelector, useDispatch } from 'react-redux';

ChartJS.register(ArcElement, Tooltip);



export default function DoughnutChart() {
  const mapdata = useSelector((state) => state.MapSlice);

  

  return (
    <div>
      <div>
        <div className='chartView'>
          <Doughnut data={chartData.people}/>
        </div>
        <div className='chartView'>
          <Doughnut data={chartData.age}/>
        </div>
      </div>
        <div className='chartView'>
          <Doughnut data={chartData.family}/>
        </div>

    </div>
  )
}
