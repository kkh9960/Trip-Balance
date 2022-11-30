import styled from "styled-components";

export const weather = styled.div`
  width: 200px;
  height: 550px;
  margin: 0 auto 0;
  padding: 0 20px 20px 20px;
  border-radius: 10px;
`;

export const cityName = styled.div`
  width: 400px;
  font-weight: 500;
  font-size: 70px;
  line-height: 100px;
`;

export const countyName = styled.div`
  font-weight: 400;
  font-size: 30px;
  line-height: 24px;
  text-align: left;
  margin-bottom: 30px;
`;

export const iconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const top = styled.div`
  display: flex;
`;
export const bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const weatherDescription = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  margin: 0;
`;
export const weatherIcon = styled.img`
  width: 170px;
  margin-right: -0px;
`;

export const temperatureBox = styled.div``;

export const temperature = styled.div`
  display: flex;
  align-items: end;
  width: 100%;
  height: 100%;
  font-weight: 600;
  font-size: 50px;
  color: #000;
  margin-left: -20px;
  letter-spacing: -5px;
  text-shadow: 2px 2px 0 #232323, -2px -2px 0 #eaeaea;
`;

export const details = styled.div`
  width: 100%;
  padding-left: 20px;
`;

export const parameterRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const parameterLabel = styled.div`
  text-align: left;
  font-weight: 400;
  font-size: 12px;
`;

export const parameterValue = styled.div`
  text-align: right;
  font-weight: 600;
  font-size: 12px;
`;

// export const parameterLabeltop = styled.div`
//  border-bottom: 1px solid #fff;
// `;
