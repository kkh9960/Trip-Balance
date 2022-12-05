import styled from "styled-components";

export const top = styled.div`
  padding-top: 120px;
`;

export const localImgBox = styled.div`
  width: 1903px;
  height: 504.21px;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const resultImgBox = styled.div`
  width: 1326px;
  height: 463.93px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto 120px auto;
`;

export const localImg = styled.img`
  width: 1307.65px;
  height: 504.21px;
  object-fit: cover;
  border-radius: 20px;
  background-color: gray;
`;

export const localText = styled.div`
  width: 500px;
  color: white;
  font-size: 4.2em;
  text-shadow: 3px 3px 3px #000;
  position: absolute;
  bottom: 50%;
  left: 18%;
`;

export const localTextContent = styled.div`
  width: 500px;
  color: white;
  font-size: x-large;
  text-shadow: 3px 3px 3px #000;
  position: absolute;
  bottom: 35%;
  left: 18%;
`;

export const hotelImg = styled.img`
  width: 316.52px;
  height: 330.42px;
  object-fit: cover;
  border-radius: 20px;
`;

export const bigName = styled.div`
  width: 252.62px;
  height: 43.93px;

  //font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  color: #333333;
  margin: 0 auto 40px auto;
`;

export const hotelWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 1326px;
  justify-content: space-between;
`;

export const hotelInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 316.52px;
  height: 379.1px;
`;

export const hotelName = styled.div`
  width: 183.72px;
  height: 28.96px;

  //font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #000000;
`;
