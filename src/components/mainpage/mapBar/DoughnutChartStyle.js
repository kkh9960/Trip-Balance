import styled from "styled-components";

export const doughnutContainer = styled.div`
  width: 820px;
  height: 535px;
  display: flex;
  transition: 0.5s;
  margin: 0px 20px;
  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    transition: 0.5s;
    border: 1px solid black;
    border-radius: 20px;
  }
`;
export const chartViewbox = styled.div`
  width: 660px;
  display: grid;
  align-items: end;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  @media screen and (max-width: 500px) {
    display: none;
    width: 100%;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(1, minmax(100px, auto));
    height: 250px;
  }
`;
export const chartView = styled.div`
  width: 238px;
  margin: 0 10px;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 0 10px;

  @media screen and (max-width: 500px) {
    width: 100px;
    margin: 0 auto;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0 0 10px;
  }
`;
export const barChartView = styled.div`
  width: 195px;
  height: 140px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const chartNametag = styled.div`
  width: 100px;
  height: 20px;
  background-color: red;
  left: 0px;
`;
