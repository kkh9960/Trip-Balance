import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BalanceButton = () => {
  const navigate = useNavigate();

  const goGame = () => {
    navigate("/start");
  };

  return (
    <Container>
      <Btnbox>
        <Title>밸런스 게임</Title>
        <Btn onClick={goGame}>게임 바로 가기</Btn>
        <Btn2 onClick={goGame}>밸런스게임 바로 가기</Btn2>
      </Btnbox>
    </Container>
  );
};

export default BalanceButton;

const Container = styled.div`
  background-color: #5502cf;
  height: 100px;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
const Btnbox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 auto;
`;

const Title = styled.div`
  font-family: "NexonLv2Gothic";
  font-weight: 700;
  font-size: 50px;
  color: #ffff;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const Btn = styled.button`
  background-color: #ea3d6e;
  color: #fff;
  font-size: 20px;
  margin-left: 3rem;
  padding: 5px 20px;
  border-radius: 10px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const Btn2 = styled.button`
  display: none;
  @media screen and (max-width: 480px) {
    background-color: #ea3d6e;
    color: #fff;
    font-size: 20px;
    display: block;
    padding: 5px 20px;
    border-radius: 10px;
  }
`;
