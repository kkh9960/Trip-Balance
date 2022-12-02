import styled from "styled-components";

export const gameStartWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 1903px;
  height: 969px;
  background-image: url("../../img/gameCommonImg/backGroundImg.webp");
  // 위 이미지는 배경이 제작되면 바뀔것
`;

export const gameStartTextWrap = styled.div`
  width: 1326px;
  height: 624.89px;
  display: flex;
  align-items: center;
  flex-direction: column;
  //글씨랑 게임이 모여있는곳
`;

export const BalanceGameTITLE = styled.div`
  width: 534px;
  height: 114px;
  background-image: url("../../img/gameCommonImg/BalanceGame.webp");
  background-repeat: no-repeat;
  background-position: center;
`;

export const gameStartText = styled.div`
  width: 572px;
  height: 176px;
  font-size: large;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  //font-family: "JejuGothic";
`;

export const gameStartButton = styled.button`
  width: 309.28px;
  height: 35.09px;
  background-image: url("../../img/gameCommonImg/startGame.webp");
`;

export const gameStartIcon = styled.div`
  width: 85.51px;
  height: 95.19px;
  background-image: url("../../img/gameCommonImg/startImg.webp");
  margin-top: 54px;
`;
