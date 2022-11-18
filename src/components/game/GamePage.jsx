import React from 'react'
import * as g from './GamePageStyle'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __GameInfoGet, __GameFirstGet, __GameLastPost } from '../../redux/modules/GameSlice'

export default function GamePage() {
  const id = useParams();
  console.log(id)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const gameData = useSelector((state) => state.gameInfo.data)
  // console.log(gameData)
  // console.log(gameData.data)
  // console.log(gameData.data[0])
  // console.log(gameData.data[0].id)
  // console.log(gameData.data[0].leftId)
  // console.log(gameData.data[0].rightId)
  // console.log(gameData.data[1])
  const goFirst = (e) => {
    e.preventDefault();
    navigate('/game/start')
  }
  const leftGo = (e) => {
    e.preventDefault();
    navigate(`/game/${GameID}/${gameData.data[0].leftId}`)
  }
  const rightGo = (e) => {
    e.preventDefault();
    navigate(`/game/${GameID}/${gameData.data[0].rightId}`)
  }
  const resultGo = (e) => {
    e.preventDefault();
    dispatch(__GameLastPost({GameID, QID}));
    navigate(`/gameResult/${GameID}/${QID}`)
    window.location.reload();
  }

  useEffect(() => {
    id.id == "start" ? dispatch(__GameFirstGet()) : dispatch(__GameInfoGet({GameID, QID}));
  }, [id]);
  
  const leftimg = `../../img/gameImg/${gameData.data[0].leftId == null ? (2) : (gameData.data[0].leftId)}.jpg`         
  const rightimg = `../../img/gameImg/${gameData.data[0].rightId == null ? (2) : (gameData.data[0].rightId)}.jpg`
  const GameID = (gameData.data[1]?.gameId === null ? ("1") : gameData.data[1]?.gameId)
  const QID = parseInt(id.id)

  return (
    <div>
      {/* <p>현제 페이지의 파라미터는 {id} 입니다!</p>
      {leftnum}
      {rightnum} */}
      <div>
      {QID >= 32 ? (
        <g.balanceButtonWrapFinal>
          <g.balanceButtonFinal onClick={resultGo}>
            결과페이지 보러가기
          </g.balanceButtonFinal>          
        </g.balanceButtonWrapFinal>
      ) : (
         <div>
          <g.balanceButtonWrap>
            <g.balanceButton src={leftimg} onClick={leftGo}/>
            <g.balanceButton src={rightimg} onClick={rightGo}/>
          </g.balanceButtonWrap>
          <g.balanceTextWrap>
            <g.balanceText onClick={leftGo}>{gameData.data[0].leftAnswer}</g.balanceText>
            <g.balanceText onClick={rightGo}>{gameData.data[0].rightAnswer}</g.balanceText>
          </g.balanceTextWrap>  
          <g.firstWrap>
            <g.balanceFirst onClick={goFirst}>처음으로</g.balanceFirst>
          </g.firstWrap>
         </div>
      )}
      </div>
    </div>
  )
}