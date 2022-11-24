import styled from "styled-components";

export const inforChartViewbox = styled.div`
  display: flex;
  align-items: center;

  animation: 3s;
  animation-name: slideRight;
  @keyframes slideRight {
    from {
      transform: translateX(1000px);
    }
    to {
      transform: translateX(0px);
    }
  }
`;
export const inforChartView = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 5px;
  text-align: center;
  after {
    position: relative;
    content: "이름";
    top: -110px;
    left: 80px;
  }
  box-shadow: 0 0 10px;
  border-radius: 50%;
`;

export const chartNametag = styled.div`
  display: flex;
`;
export const inforChartBox = styled.div`
  display: flex;
`;
