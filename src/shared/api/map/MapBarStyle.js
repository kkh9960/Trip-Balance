import styled from "styled-components";

export const mapContainer = styled.div`
  z-index: 0;
  display: flex;
  width: 480px;
  height: 580px;
  border-radius: 10px;
  border: 1px solid #000;
  transition: 2s;
  @media screen and (max-width: 500px) {
    display: none;
    transition: 2s;
  }
`;
