import styled from "styled-components";

export const mapContainer = styled.div`
  width: 445px;
  height: 530px;
  border-radius: 10px;
  border: 1px solid #000;
  @media screen and (max-width: 480px) {
  
    display:none;
    width:100%;
    height: 550px;
  border: 1px solid #000;
  border-radius: 0px;
  }
`;
