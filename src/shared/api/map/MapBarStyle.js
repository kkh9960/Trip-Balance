import styled from "styled-components";

export const mapContainer = styled.div`
  z-index: 0;
  display: flex;
  width: 445px;
  height: 530px;
  border-radius: 10px;
  border: 1px solid #000;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
