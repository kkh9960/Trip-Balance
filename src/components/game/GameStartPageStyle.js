import styled from "styled-components";

export const gameStartWrap = styled.div`
  display: flex;
  align-items: center;

  //justify-content: center;
  flex-direction: column;
  min-width: 1903px;
  min-height: 969px;
  width: 100%;
  height: 100%;
  background-image: url("../../img/gameCommonImg/backGroundImg.webp");
  @media (max-width: 480px) {
    background-image: url("../../img/gameCommonImg/backGroundImg.webp");
  }

`;

export const gameStartTextWrap = styled.div`
  width: 1326px;
  height: 624.89px;

  margin-top: 162.19px;

  display: flex;
  align-items: center;
  flex-direction: column;
  //글씨랑 게임이 모여있는곳
`;

export const BalanceGameTITLE = styled.div`

  width: 540px;

  height: 114px;
  background-image: url("../../img/gameCommonImg/BalanceGame.webp");
  background-repeat: no-repeat;
  background-position: center;
`;

export const gameStartText = styled.div`
  width: 572px;
  height: 176px;

  padding-top: 25px;
  //font-family: "JejuGothic";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  color: #333333;

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
