import styled from "styled-components";

export const chartViewbox = styled.div`
  width: 900px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 200px 1fr 1fr 1fr;
  grid-template-rows: repeat(2, minmax(220px, auto));
  grid-auto-flow: dense;
`;
export const chartView = styled.div`
  width: 210px;
  margin: 0 auto;
  text-align: center;
  after {
    position: relative;
    content: "이름";
    top: -110px;
    left: 80px;
  }
`;
