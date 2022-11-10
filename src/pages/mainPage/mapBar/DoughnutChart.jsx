/* global kakao */
import React from 'react'
import './DoughnutChartStyle.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {chartData} from './DoughnutChartData'

ChartJS.register(ArcElement, Tooltip);



export default function DoughnutChart() {

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
