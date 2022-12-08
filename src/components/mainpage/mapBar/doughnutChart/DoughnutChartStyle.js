import styled from "styled-components";

export const doughnutContainer = styled.div`
  width: 820px;
  height: 535px;
  display: flex;
  transition: 0.5s;
  margin: 0px 20px;

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    margin: 0px;
    transition: 0.5s;
  }
`;
export const chartViewbox = styled.div`
  width: 660px;
  display: grid;
  align-items: end;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  @media screen and (max-width: 480px) {
    width: 100%;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(1, minmax(100px, auto));
    height: 250px;
  }
`;

export const chartBox = styled.div`
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
`;
export const chartView = styled.div`
  width: 238px;
  height: 238px;
  margin: 0 10px;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 0 10px;

  @media screen and (max-width: 480px) {
    width: 104px;
    height: 104px;
    margin: 10px auto;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0 0 10px;
  }
`;

export const chartNametag = styled.div`
  @media screen and (min-width: 481px) {
    display: none;
  }
  @media screen and (max-width: 480px) {
    width: 100px;
    height: 20px;
    text-align: center;
    margin-top: 5px;
    color: #777;
  }
`;
export const barChartView = styled.div`
  width: 195px;
  height: 125px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
