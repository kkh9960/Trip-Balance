import styled from "styled-components";

export const GameBanner = styled.div`
  width: 100%;
  height: 260px;
  cursor: pointer;
  background: linear-gradient(25deg, #5602cc 20%, #4501d5 25%, #4402bf 35%);

  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 480px) {
    height: 140px;
  }
`;

export const GamestartBannerImg = styled.img`
  @media screen and (min-width: 481px) {
    width: 1326px;
    height: 100%;
    margin: 0 auto;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 140px;
  }
`;
