import styled from "styled-components";

export const weather = styled.div`
  width: 200px;
  height: 450px;
  border-radius: 10px;
  box-shadow: 10px -2px 20px 2px rgb(0 0 0 / 30%);
  color: rgb(0, 0, 0);
  margin: 20px auto 0 auto;
  padding: 0 20px 20px 20px;
`;
export const iconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const top = styled.div`
  display: flex;
  justify-content: end;
`;
export const bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const city = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
  margin: 0;
  letter-spacing: 1px;
`;

export const weatherDescription = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  margin: 0;
`;
export const weatherIcon = styled.img`
  width: 170px;
  margin-right: -30px;
`;

export const temperature = styled.p`
  font-weight: 600;
  font-size: 70px;
  width: auto;
  letter-spacing: -5px;
  margin: 0;
  padding-top: 30px;
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
