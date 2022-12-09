import styled from "styled-components";

export const mapBarView = styled.div`
  width: 100%;
  height: 940px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 1200px;
    display: flex;
  }
`;

export const mapBarViewText = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  margin-bottom: 57px;
  color: #333;
`;

export const mapWeatherChart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
export const mapGuide1 = styled.div`
  width: 100%;
  font-size: 20px;
  margin: 40px auto;
  text-align: center;
  color: #777;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const mapGuide2 = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    display: flex;
    width: 100%;
    font-size: 20px;
    margin: 20px auto;
    text-align: center;
    color: #777;
  }
`;

export const mapGuideBtn = styled.div``;
