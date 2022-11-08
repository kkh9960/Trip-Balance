import React from 'react'
import './MiddleBarStyle.css'
import { useNavigate } from 'react-router-dom'

export default function MiddleBar() {
  const navigate = useNavigate( console.log('hi'));




  return (
    <div className='middleBarGroup'>
      <div className='middleBarBox' onClick={() => navigate('/')}>
        좋아요 가장 많은 곳
      </div>
      <div className='middleBarBox' onClick={() => navigate('/')}>
        밸런스 게임
      </div>
      <div className='middleBarBox'>
        게시판
      </div>
    </div>
  )
}
