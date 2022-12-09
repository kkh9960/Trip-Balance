import styled from "styled-components";

export const mapSection = styled.div``;

export const mapContainer = styled.div`
  width: 445px;
  height: 530px;
  border-radius: 10px;
  border: 1px solid #000;
  @media screen and (max-width: 480px) {
    width: 400px;
    height: 450px;
    border: 1px solid #000;
    border-radius: 0px;
  }
  @media screen and (max-width: 360px) {
    width: 355px;
    height: 450px;
    border: 1px solid #000;
    border-radius: 0px;
  }
`;

export const mapGuide = styled.div`
  width: 100%;
  color: #333;
`;
