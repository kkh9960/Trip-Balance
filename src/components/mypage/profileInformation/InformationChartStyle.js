import styled from "styled-components";

export const inforChartViewbox = styled.div`
  display: flex;
  align-items: center;

  animation: 3s;
  animation-name: slideRight;
  @keyframes slideRight {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const inforChartView = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 5px;
  text-align: center;

  box-shadow: 0 0 10px;
  border-radius: 50%;
`;

export const chartNametag = styled.div`
  display: flex;
`;
export const inforChartBox = styled.div`
  display: flex;
`;
