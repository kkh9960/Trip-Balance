import styled from "styled-components";

export const totalWrap = styled.div`
  background-image: url("../../img/gameCommonImg/backGroundImg.webp");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 480px) {
    background-image: url("../../img/gameCommonImg/backGroundImgM.webp");
    background-repeat: no-repeat;
  }
`;

export const balanceBlackWrap = styled.div`
  position: absolute;
  background-color: black;
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
`;

export const balanceViewWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const balanceButtonWrap = styled.div`
  display: flex;
  width: 1326px;
  margin-top: 162.45px;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    width: 90%;
    height: 300px;
    margin-top: 18%;
    //margin-top: 133.94px;
  }
`;

export const balanceButtonBH = styled.div`
  position: relative;
  width: 483.68px;
  height: 511.51px;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    width: 48%;
    height: 300px;
    justify-content: center;
  }
`;

export const balanceButton = styled.img`
  width: 483.68px;
  height: 511.51px;
  object-fit: cover;
  border-radius: 30px;
  color: white;
  cursor: pointer;
  filter: brightness(65%);
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 300px;
  }
`;

export const balanceButtonHover = styled.img`
  width: 100px;
  height: 118.47px;
  object-fit: cover;
  position: absolute;
  top: 544.51px;
  left: 191.84px;
  display: none;
  ${balanceButtonBH}:hover & {
    display: block;
    z-index: 5;
  }
  @media screen and (max-width: 480px) {
    width: 70.42px;
    height: 83.43px;
    position: absolute;
    top: 313.39px;
    left: 30%;
  }
`;

export const balanceButtonRightHover = styled.img`
  width: 111.86px;
  height: 80px;
  object-fit: cover;
  position: absolute;
  top: 544.51px;
  left: 1022.3px;
  display: none;
  ${balanceButtonBH}:hover & {
    display: block;
    z-index: 5;
  }
  @media screen and (max-width: 480px) {
    width: 90.42px;
    height: 83.43px;
    position: absolute;
    top: 313.39px;
    left: 140%;
  }
`;

export const balanceButtonLeftHover = styled.img`
  width: 111.86px;
  height: 80px;
  object-fit: cover;
  position: absolute;
  top: 544.51px;

  right: 1022.3px;

  display: none;
  ${balanceButtonBH}:hover & {
    display: block;
    z-index: 5;
  }
  @media screen and (max-width: 480px) {
    width: 90.42px;
    height: 83.43px;
    position: absolute;
    top: 313.39px;
    right: 140%;
  }
`;
export const balanceText = styled.div`
  position: absolute;
  width: 483.68px;
  height: 200px;
  text-align: center;
  color: white;
  font-family: "DungGeunMo";
  font-size: 3.2em;
  text-shadow: 3px 3px 3px #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    position: absolute;
    width: 70%;
    height: 200px;
    font-size: 1.2em;
  }
`;

export const vsLogo = styled.div`
  background-image: url("../../img/gameCommonImg/vs.webp");
  position: absolute;
  width: 188.41px;
  height: 175.55px;
  top: 381.68px;
  @media screen and (max-width: 480px) {
    width: 75.87px;
    height: 70.69px;
    top: 248.6px;
    background-size: cover;
  }
`;

export const moving = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 150px;
  justify-content: space-between;
  top: 10%;
  @media screen and (max-width: 480px) {
    top: 20%;
  }
`;

export const firstWrap = styled.div`
  position: relative;
  width: 55px;
  height: 55px;
  opacity: 80%;
  background-repeat: no-repeat;
  background-image: url("../../img/gameCommonImg/goFirst.webp");
  justify-content: space-around;
  cursor: pointer;
`;

export const wrapDiv = styled.div`
  position: relative;
  width: 10px;
  height: 55px;
  opacity: 80%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../../img/gameCommonImg/line.webp");
`;

export const homeWrap = styled.div`
  position: relative;
  width: 55px;
  height: 55px;
  opacity: 80%;
  background-repeat: no-repeat;
  background-image: url("../../img/gameCommonImg/goHome.webp");
  justify-content: space-around;
  cursor: pointer;
`;

export const balanceButtonWrapFinal = styled.div`
  width: 1326px;
  height: 624.89px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  //글씨랑 게임이 모여있는곳
  @media screen and (max-width: 480px) {
    height: 100%;
    width: 100%;
  }
`;

export const gameResultIcon = styled.div`
  width: 122.49px;
  height: 133.59px;
  margin: 212.71px auto 0 auto;
  background-image: url("../../img/gameCommonImg/resultImg.webp");
  @media screen and (max-width: 480px) {
    margin: 166.05px auto 0 auto;
  }
`;

export const gameResultText = styled.div`
  width: 596px;
  height: 120px;
  font-family: "DungGeunMo";
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 60px;
  /* or 94% */
  text-align: center;
  color: #333333;
  margin-top: 20.26px;
  @media screen and (max-width: 480px) {
    /* width: 423px;
    height: 123px; */
    width: 94%;
    font-family: "DungGeunMo";
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 60px;
    /* or 94% */

    text-align: center;

    color: #333333;
  }
`;

export const balanceButtonFinal = styled.button`
  width: 360px;
  height: 72px;
  margin-top: 40px;
  background-color: #e44c4c;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-family: "DungGeunMo";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #ffffff;
  @media screen and (max-width: 480px) {
    width: 90%;
    height: 72px;
    margin-top: 124.03px;
  }
`;
