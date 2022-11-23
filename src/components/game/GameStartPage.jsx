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
    <g.gameStartButtonWrap>
      <g.gameStartTextWrap>
      <g.gameStartText>밸런스 게임</g.gameStartText>
      <g.gameStartText>
        자신이 더 선호하는 것을 골라 나에게 맞는 여행지를 찾아보세요
      </g.gameStartText>
      <g.gameStartText>
        게임을 시작하면 몇번의 선택 후 당신에게 맞는 여행지를 추천해드립니다!
      </g.gameStartText>
      </g.gameStartTextWrap>
    <g.gameStartButton onClick={gameStart}>Game Start</g.gameStartButton>
    </g.gameStartButtonWrap>
  );
}