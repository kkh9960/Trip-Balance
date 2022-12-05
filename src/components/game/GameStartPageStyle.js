import styled from "styled-components";

export const gameStartWrap = styled.div`
  display: flex;
  align-items: center;
  //justify-content: center;
  flex-direction: column;
  //min-width: 1903px;
  min-height: 969px;
  width: 100%;
  height: 100%;
  background-image: url("../../img/gameCommonImg/backGroundImg.webp");
  background-size: cover;
  @media screen and (max-width: 480px) {
    background-image: url("../../img/gameCommonImg/backGroundImgM.webp");
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    //min-width: 480px;
    //min-height: 924.83px;
  }
`;

export const gameStartTextWrap = styled.div`
  width: 1326px;
  height: 624.89px;
  margin-top: 162.19px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    margin-top: 105.16px;
  }
`;

export const BalanceGameTITLE = styled.div`
  width: 540px;
  height: 114px;
  background-image: url("../../img/gameCommonImg/balanceGame.webp");
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 480px) {
    background-image: url("../../img/gameCommonImg/balanceGameM.webp");
    width: 299px;
    height: 193.17px;
  }
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
  @media (max-width: 480px) {
    width: 100%;
    height: 176px;
    padding-top: 25px;
    //font-family: "JejuGothic";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 22px;
    text-align: center;
    color: #333333;
  }
`;

export const gameStartButton = styled.button`
  width: 309.28px;
  height: 35.09px;
  background-image: url("../../img/gameCommonImg/startGame.webp");
  @media (max-width: 480px) {
    margin-top: 28.77px;
  }
`;

export const gameStartIcon = styled.div`
  width: 85.51px;
  height: 95.19px;
  background-image: url("../../img/gameCommonImg/startImg.webp");
  margin-top: 54px;
  @media (max-width: 480px) {
    //margin-top: 171.56px;
    margin-top: 201.56px;
  }
`;
