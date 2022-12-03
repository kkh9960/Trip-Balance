import styled from "styled-components";

export const weather = styled.div`
  width: 100%;
  height: 134px;
  display: flex;
  margin: auto;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  @media screen and (max-width: 480px) {
    position: relative;
    width: 100%;
    height: 300px;
    padding: 0;
    border-radius: 10px;
  }
`;

export const location = styled.div``;

export const cityName = styled.div`
  width: 280px;
  font-weight: 400;
  font-size: 56px;
  line-height: 67px;
  @media screen and (max-width: 480px) {
    position: absolute;
    font-size: 30px;
    width: 200px;
    top: 100px;
    left: 40px;
    z-index: 1;
  }
`;

export const countyName = styled.div`
  font-weight: 400;
  font-size: 30px;
  line-height: 24px;
  text-align: left;
  margin-bottom: 30px;
  @media screen and (max-width: 480px) {
    position: absolute;
    font-size: 30px;
    width: 200px;
    top: 170px;
    left: 40px;
  }
`;
export const timer = styled.div`
  @media screen and (max-width: 480px) {
    position: absolute;
    font-size: 20px;
    width: 50px;
    bottom: 30px;
    left: 40px;
  }
`;

export const top = styled.div`
  display: flex;
  background:color;
`;
export const iconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    position: absolute;
    justify-content: end;
    top: 20px;
    right: 25px;
    font-size: 30px;
    width: 100%;
  }
`;
export const weatherIcon = styled.img`
  width: 130px;
  margin-right: -0px;
  @media screen and (max-width: 480px) {
    width: 200px;
  }
`;
export const temperatureBox = styled.div`
  @media screen and (max-width: 480px) {
    position: absolute;
    left: 20px;
    width: 200px;
    height: 150px;
  }
`;
export const temperature = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  text-align: right;
  color: #777;
span{
  font-weight: 400;
  font-size: 60px;
  line-height: 73px;
}
  p {
  font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 80px;
    color: #000;
    margin: 0;
    letter-spacing: -5px;
    text-shadow: 2px 2px 0 #232323, -2px -2px 0 #eaeaea;
  }
`;
export const bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 480px) {
    position: absolute;
    bottom: 30px;
    left: 90px;
  }
`;

export const weatherDescription = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  margin: 0;
`;

export const details = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const parameterRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const parameterLabel = styled.div`
  font-weight: 200;
  font-size: 20px;
  line-height: 24.2px;
`;

export const parameterValue = styled.div`
  text-align: right;
  font-size: 36px;
  font-weight: 400;
  line-height: 44px
  p{
    font-size: 20px;
    font-weight: 400;
    line-height: 44px
  }
`;

// export const parameterLabeltop = styled.div`
//  border-bottom: 1px solid #fff;
// `;

export const mobile = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 300px;
    font-size: 30px;
  }
`;
export const mobileTemper = styled.div`
  @media screen and (max-width: 480px) {
    width: 150px;
    height: 150px;
    font-size: 75px;
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const mobileCityName = styled.div`
  @media screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 40px;
    background-color: green;
  }
`;
export const mobileCountyName = styled.div`
  @media screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 40px;
    background-color: green;
  }
`;
