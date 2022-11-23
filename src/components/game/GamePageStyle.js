import styled from "styled-components";
// import default2 from "../../img/default2.jpg";

export const balanceButtonBH = styled.div`
  position: relative;
`;

export const balanceButton = styled.img`
  width: 500px;
  height: 600px;
  object-fit: cover;
  border-radius: 10px;
  color: white;
  margin-top: 70px;
  filter: brightness(65%);
`;

export const balanceButtonHover = styled.img`
  width: 500px;
  height: 600px;
  object-fit: cover;
  border-radius: 10px;
  color: white;
  margin-top: 70px;
  filter: brightness(65%);
  position: absolute;
  top: 0px;
  left: 0px;
  display: none;
  ${balanceButtonBH}:hover & {
    display: block;
  }
`;

export const balanceButtonRightHover = styled.img`
  width: 500px;
  height: 600px;
  object-fit: cover;
  border-radius: 10px;
  color: white;
  margin-top: 70px;
  filter: brightness(65%);
  position: absolute;
  top: 0px;
  left: 960px;
  display: none;
  ${balanceButtonBH}:hover & {
    display: block;
    z-index: 5;
  }
`;

export const balanceButtonLeftHover = styled.img`
  width: 500px;
  height: 600px;
  object-fit: cover;
  border-radius: 10px;
  color: white;
  margin-top: 70px;
  filter: brightness(65%);
  position: absolute;
  top: 0px;
  right: 960px;
  display: none;
  ${balanceButtonBH}:hover & {
    display: block;
    z-index: 5;
  }
`;

export const balanceButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const balanceText = styled.div`
  position: relative;
  width: 500px;
  text-align: center;
  color: white;
  font-size: 5.2em;
  text-shadow: 3px 3px 3px #000;
  bottom: 360px;
`;

export const balanceButtonWrapFinal = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const balanceButtonFinal = styled.button`
  width: 500px;
  height: 600px;
  margin-top: 70px;
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
  bottom: 70px;
  display: flex;
  justify-content: space-around;
`;
export const homeWrap = styled.div`
  position: relative;
  bottom: 30px;
  display: flex;
  justify-content: space-around;
`;

export const totalWrap = styled.div`
  background-image: url("../../img/backgroundimg.jpg");
  width: 100%;
  height: 930px;
`;
