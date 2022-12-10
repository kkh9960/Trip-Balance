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
    height: 1000px;
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
  font-size: 16px;
  margin: 40px auto;
  text-align: center;
  color: #777;
  font-family: sans-serif;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const mapGuide2 = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    display: flex;
    width: 90%;
    font-size: 12px;
    margin-bottom: 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: #777;
    font-family: sans-serif;
    br {
      display: none;
    }
  }
  @media screen and (max-width: 380px) {
    display: flex;
    width: 90%;
    font-size: 12px;
    margin-bottom: 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: #777;
    font-family: sans-serif;
    br {
      display: flex;
    }
  }
`;

export const mapGuideBtn1 = styled.img`
  margin-bottom: -7px;
  width: 32px;
  height: 32px;
`;
export const mapGuideBtn2 = styled.img`
  width: 22px;
  height: 22px;
`;
