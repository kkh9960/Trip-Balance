import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __GameInfoGet } from '../../redux/modules/GameSlice'

export default function GamePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const gameData = useSelector((state) => state.gameInfo.data)
  console.log(gameData)
  console.log(gameData.leftId)
  console.log(gameData.rightId)
  console.log(gameData.rightAnswer)
  console.log(gameData.leftAnswer)
  const goFirst = (e) => {
    e.preventDefault();
    navigate('/game/1')
  }
  const leftGo = (e) => {
    e.preventDefault();
    navigate(`/game/${gameData.leftId}`)
  }
  const rightGo = (e) => {
    e.preventDefault();
    navigate(`/game/${gameData.rightId}`)
  }

  useEffect(() => {
    dispatch(__GameInfoGet(id));
  }, [id]);

  return (
    <div>
      <p>현제 페이지의 파라미터는 {id} 입니다.</p>
      <button onClick={leftGo}>{gameData.leftAnswer}</button>
      <button onClick={rightGo}>{gameData.rightAnswer}</button>
      <button onClick={goFirst}>처음으로</button>
    </div>
  )
}