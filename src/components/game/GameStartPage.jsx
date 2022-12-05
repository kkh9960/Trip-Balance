import React from 'react'
import * as g from './GameStartPageStyle'
import { useNavigate } from 'react-router-dom';

export default function GameStartPage() {
  const navigate = useNavigate();

  const gameStart = (e) => {
    e.preventDefault();
    navigate("/game/start");
  };

  return (
    <g.gameStartWrap>
      <g.gameStartTextWrap>
        <g.BalanceGameTITLE/>
          <g.gameStartText>
            자신이 더 선호하는 것을 골라 최종 여행지를 가리는 게임 <br/>
            시작하면 몇번의 선택 후 당신에게 맞는 여행지를 추천해 드립니다. <br/>
            왼쪽 오른쪽 사진 중 느낌이 끌리는 쪽을 선택하세요. <br/>
            결과보기 화면을 클릭하여 자신이 선호하는 <br/>
            여행지를 확인하세요~
          </g.gameStartText>
      <g.gameStartButton aria-label="Start" onClick={gameStart}/>
      <g.gameStartIcon/>
      </g.gameStartTextWrap>
    </g.gameStartWrap>
  );
}