import styled from "styled-components";

export const totalWrap = styled.div`
  background-image: url("../../img/gameCommonImg/backGroundImg.webp");
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 1903px;
  min-height: 969px;
  width: 100%;
  height: 100%;
`;

export const balanceBlackWrap = styled.div`
  position: absolute;
  background-color: black;
  opacity: 0.5;
  min-width: 1903px;
  min-height: 969px;
  width: 100%;
  height: 100%;
`;

export const balanceViewWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const balanceButtonWrap = styled.div`
  display: flex;
  width: 1326px;
  justify-content: space-between;
`;
export const balanceButtonBH = styled.div`
  position: relative;
  width: 483.68px;
  height: 511.51px;
  margin-top: 159.77px;
  display: flex;
  align-items: center;
`;

export const balanceButton = styled.img`
  width: 483.68px;
  height: 511.51px;
  object-fit: cover;
  border-radius: 30px;
  color: white;
  filter: brightness(65%);
`;

export const balanceButtonHover = styled.img`
  width: 100px;
  height: 118.47px;
  object-fit: cover;
  //filter: brightness(65%);
  position: absolute;
  top: 544.51px;
  left: 191.84px;
  display: none;
  ${balanceButtonBH}:hover & {
    display: block;
    z-index: 5;
  }
`;

export const balanceButtonRightHover = styled.img`
  width: 111.86px;
  height: 80px;
  object-fit: cover;
  //filter: brightness(65%);
  position: absolute;
  top: 544.51px;
  left: 1022.3px;
  display: none;
  ${balanceButtonBH}:hover & {
    display: block;
    z-index: 5;
  }
`;

export const balanceButtonLeftHover = styled.img`
  width: 111.86px;
  height: 80px;
  object-fit: cover;
  //filter: brightness(65%);
  position: absolute;
  top: 544.51px;
  right: 1022.3px;
  display: none;
  ${balanceButtonBH}:hover & {
    display: block;
    z-index: 5;
  }
`;

export const balanceText = styled.div`
  position: absolute;
  width: 483.68px;
  height: 200px;
  text-align: center;
  color: white;
  font-size: 3.2em;
  text-shadow: 3px 3px 3px #000;
  display: flex;
  align-items: center;
`;

export const vsLogo = styled.div`
  background-image: url("../../img/gameCommonImg/vs.webp");
  position: absolute;
  width: 188.41px;
  height: 175.55px;
`;

export const balanceFirst = styled.button`
  width: 300px;
  height: 70px;
  background-color: gray;
  border-radius: 10px;
  color: white;
  font-size: 1.4em;
  text-shadow: 3px 3px 3px #000;
`;

export const firstWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
`;
export const homeWrap = styled.div`
  position: relative;
  top: 30px;
  display: flex;
  justify-content: space-around;
`;

export const balanceButtonWrapFinal = styled.div`
  width: 1326px;
  height: 624.89px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  //글씨랑 게임이 모여있는곳
`;

export const gameResultBox = styled.div`
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
`;

export const gameResultIcon = styled.div`
  width: 122.49px;
  height: 133.59px;
  margin: 212.71px auto 0 auto;
  background-image: url("../../img/gameCommonImg/resultImg.webp");
`;

export const gameResultText = styled.div`
  width: 596px;
  height: 120px;
  font-family: "Dongle";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 60px;
  /* or 94% */
  text-align: center;
  color: #333333;
  margin-top: 20.26px;
`;

export const balanceButtonFinal = styled.button`
  width: 360px;
  height: 72px;
  margin-top: 40px;
  background-color: #e44c4c;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-family: "Reem Kufi";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #ffffff;
`;
