import React from 'react'
import * as g from './GameResultPageStyle'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __GameResultInfoGet, __GameResultIHotelGet } from '../../redux/modules/GameResultSlice';

export default function GameResultPage() {
  const id = useParams();
  const dispatch = useDispatch();
  console.log(id.aa)
  console.log(id.id)
  const resultId = id.aa
  
  useEffect(() => {
    dispatch(__GameResultInfoGet(resultId));
  }, [id]);
  useEffect(() => {
    dispatch(__GameResultIHotelGet(resultId));
  }, [id]);

  const game = useSelector((state) => state.gameResult)
  console.log(game.data.data)
  const gameHotel = useSelector((state) => state.gameResult)
  console.log(gameHotel.hotel)
  
  // if (game.data == "") {
  //   console.log("null")
  // } else {
  //   console.log("data")
  // }

  return (
    <div>
      결과
      {game.data.data =="" ? ("로딩중입니다") : (game.data.data)}
      <div>추천 블로그</div>
      <div>추천 숙소</div>
    </div>
  )
}