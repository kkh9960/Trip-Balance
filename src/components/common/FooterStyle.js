import styled from "styled-components";

export const Container = styled.div`
  background-color: gray;
  height: 660.8px;
  border: 1px solid red;
  @media screen and (max-width: 480px) {
  }
`;
export const Wrap = styled.div`
  @media screen and (max-width: 480px) {
    height: 660.8px;
    border: 1px solid red;
  }
`;
export const Footerlogo = styled.img`
  @media screen and (max-width: 480px) {
    width: 183px;
    position: relative;
    left: 90px;
    margin-top: 30px;
  }
`;
export const Title = styled.div`
  @media screen and (max-width: 480px) {
    margin-top:50px;
   width: 480px;
  
  color: white;
 
  text-align: left;
  }
  
`;
export const Comment = styled.div`
  @media screen and (max-width: 480px) {
    color: white;
    position: relative;
    bottom: -10px;
  }
`;
export const Hanhae = styled.div`
  @media screen and (max-width: 480px) {
    position: relative;
    top: 20px;
    left: -10px;
    font-size: 20px;
    text-align: center;
    color: white;
    font-weight: bold;
  }
`;
export const Front = styled.div`
  @media screen and (max-width: 480px) {
    top: 50px;
    text-align: center;
    left: -3px;
    color: white;
    position: relative;
  }
`;

export const Back = styled.div`
  @media screen and (max-width: 480px) {
    top: -630px;
    text-align: center;
    left: -3px;
    top: 80px;
    color: white;
    position: relative;
  }
`;
export const Fronts = styled.div`
  @media screen and (max-width: 480px) {
    position: relative;
    top: 60px;
    color: white;
    align-items: center;
  }
`;
export const FrontWrap = styled.div`
@media screen and (max-width: 480px) {
  text-align: center;
}
`;
export const Backs = styled.div`
  @media screen and (max-width: 480px) {
    position: relative;
    top: 100px;
    color: white;
  }
`;

export const BackWrap = styled.div`
  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;
export const Best = styled.div`
  @media screen and (max-width: 480px) {
    position: relative;
    top:150px;
    color: white;
  }
`;