import styled from "styled-components";

export const chartViewbox = styled.div`
  width: 900px;

  display: grid;
  align-items: end;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(2, minmax(140px, auto));
`;
export const chartView = styled.div`
  width: 210px;
  margin: 0 auto;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 0 10px;
`;
export const barChartView = styled.div`
  width: 250px;
`;

export const chartNametag = styled.div`
  width: 100px;
  height: 20px;
  background-color: red;
  left: 0px;
`;
