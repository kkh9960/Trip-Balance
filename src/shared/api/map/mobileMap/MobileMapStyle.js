import styled from "styled-components";

export const mobileMapSection = styled.div`
    width:458px;
    height:729px;
  @media screen and (max-width: 480px) {
    width:458px;
    height:729px;
    background-color:gray;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }`;

export const mobileMapImg = styled.div`
    width:458px;
    height:550px;
  @media screen and (max-width: 480px) {
    width:458px;
    height:550px;
  }`;

export const mobileMapBtnGroup = styled.div`
  
@media screen and (max-width: 480px) {
  width:100%;
  height:200px;
  display:flex;
    flex-wrap:wrap;
    gap:21px;
}`;
export const locationButton = styled.div`
@media screen and (max-width: 480px) {
    font-weight: 400;
font-size: 20px;
line-height: 24px;
color: #777;
  width:136px;
  height:72px;
  border: 1px solid #777;
  border-radius: 10px;
  display:flex;
  align-items:center;
  justify-content:center;
}
`;

