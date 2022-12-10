import styled from "styled-components";

export const mapSection = styled.div`
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const mapContainer = styled.div`
  width: 445px;
  height: 530px;
  border-radius: 10px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 390px;

    border-right: 0px solid #000;
    border-left: 0px solid #000;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    border-radius: 0px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 360px) {
    width: 100%;
    height: 350px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    border-radius: 0px;
  }
`;
