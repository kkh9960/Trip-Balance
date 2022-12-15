import React from "react";
import { useNavigate } from "react-router-dom";
import * as St from "./BalanceButtonStyle";

const BalanceButton = () => {
  const navigate = useNavigate();

  const goGame = () => {
    navigate("/start");
  };

  return (
    <St.Container>
      <St.Btnbox>
        <St.Title>밸런스 게임</St.Title>
        <St.Btn onClick={goGame}>게임 바로 가기</St.Btn>
        <St.Btn2 onClick={goGame}>밸런스게임 바로 가기</St.Btn2>
      </St.Btnbox>
    </St.Container>
  );
};

export default BalanceButton;
