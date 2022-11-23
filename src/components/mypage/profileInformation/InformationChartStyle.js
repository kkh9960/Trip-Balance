import styled from "styled-components";

export const inforChartViewbox = styled.div`
  display: flex;
  align-items: center;
`;
export const inforChartView = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 auto;
  after {
    position: relative;
    content: "이름";
    top: -110px;
    left: 80px;
  }
`;
