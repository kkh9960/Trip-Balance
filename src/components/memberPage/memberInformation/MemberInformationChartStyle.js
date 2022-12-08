import styled from "styled-components";

export const inforChartViewbox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const inforChartView = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 5px;
  text-align: center;

  box-shadow: 0 0 10px;
  border-radius: 50%;
  @media screen and (max-width: 480px) {
    width: 290px;
    height: 290px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }
`;

export const chartNametag = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #333;
  margin-bottom: 25px;
`;
export const chartName = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
`;

export const inforChartBox = styled.div`
  display: flex;
  @media screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const inforChartBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
