import styled from "styled-components";

export const balanceButtonBH = styled.div`
  position: relative;
  width: 483.68px;
  height: 511.51px;
  margin-top: 162.45px;
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
  left: 960px;
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
  right: 960px;
  display: none;
  ${balanceButtonBH}:hover & {
    display: block;
    z-index: 5;
  }
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

export const balanceText = styled.div`
  position: absolute;
  width: 500px;
  height: 200px;
  text-align: center;
  color: white;
  font-size: 3.2em;
  text-shadow: 3px 3px 3px #000;
  display: flex;
  align-items: center;
`;

export const balanceButtonWrapFinal = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const balanceButtonFinal = styled.button`
  width: 500px;
  height: 600px;
  margin-top: 70px;
  margin-bottom: 70px;
  background-color: gray;
  object-fit: cover;
  border-radius: 10px;
  color: white;
  font-size: 3.2em;
  text-shadow: 3px 3px 3px #000;
  bottom: 310px;
`;

export const vsLogo = styled.div`
  position: absolute;
  width: 309.28px;
  height: 35.09px;
  left: 805.36px;
  top: 527.7px;
  text-align: center;
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
  //bottom: 70px;
  display: flex;
  justify-content: space-around;
`;
export const homeWrap = styled.div`
  position: relative;
  top: 30px;
  display: flex;
  justify-content: space-around;
`;

export const totalWrap = styled.div`
  background-image: url("../../img/gameCommonImg/backGroundImg.webp");
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 1903px;
  min-height: 969px;
  width: 100%;
  height: 100%;
`;
