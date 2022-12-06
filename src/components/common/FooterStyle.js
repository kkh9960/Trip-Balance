import styled from "styled-components";

export const Container = styled.div`

  background-color: gray;
 
  
  @media screen and (max-width: 746px) {
    width: 100%;
  }
`;
export const Wrap = styled.div`
  @media screen and (max-width: 550px) {
    height: 660.8px;
    width: 100%;
   
  }
`;
export const Footerlogo = styled.img`
width: 300px;
  @media screen and (max-width: 480px) {
    width: 183px;
    position: relative;
    left: 90px;
    margin-top: 30px;
  }
`;
export const Title = styled.div`
  text-align: center;
  align-items: center;
  top: -50px;
  opacity: 0.7;
  font-family: "Jalnan";
  color: white;
  position: relative;
  @media screen and (max-width: 480px) {
    left:-40px;
    margin-top: 50px;
    width: 480px;
    font-family: "Jalnan";
    color: white;
   align-items: center;
   justify-content: center;
    text-align: center;
  }
`;
export const Comment = styled.div`
  color: white;
  position: relative;
  text-align: center;
  opacity: 0.6;
  top: -30px;
  font-family: "Jalnan";
  color: white;
  @media screen and (max-width: 480px) {
    color: white;
    position: relative;
    bottom: 80px;
    opacity: 0.6;
    font-weight: lighter;
  }
`;
export const Hanhae = styled.div`
  text-align: center;
  font-family: "Jalnan";
  color: white;
  opacity: 0.5;
  position: relative;
  top:-15px;
  @media screen and (max-width: 480px) {
    position: relative;
    top: 20px;
    font-size: 20px;
    text-align: center;
    color: white;
    font-family: "Jalnan";
  }
`;
export const Front = styled.div`
  font-family: "Jalnan";
  opacity: 0.3;
  color: white;
  text-align: center;
  position: relative;
  left: 0px;
 
  @media screen and (max-width: 480px) {
    top: 50px;
    text-align: center;
    left: -3px;
    color: white;
    position: relative;
    font-family: "Jalnan";
  }
`;

export const Back = styled.div`
  text-align: center;
  position: relative;
  top: -60px;
  
  font-family: "Jalnan";
  opacity: 0.4;
  @media screen and (max-width: 480px) {
    font-family: "Jalnan";
    top: -630px;
    text-align: center;
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
  text-align: center;
  position: relative;

  font-family: "Jalnan";
  margin-top: 10px;
  opacity: 0.3;
  color: white;
  @media screen and (max-width: 480px) {
    width: 100%;
    text-align: center;
    opacity: 0.5;
    font-family: "Jalnan";
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
  opacity: 0.5;
  margin-top: 3px;
  font-family: "Jalnan";
  position: relative;

  top: 0px;
  text-align: center;
  color: white;
  opacity: 0.3;
  @media screen and (max-width: 480px) {
    text-align: center;
    font-family: "Jalnan";
    opacity: 0.5;
    top:-20px
  }
`;
export const Best = styled.div`
  text-align: center;
  position: relative;
  top: -1px;
  color: white;
  opacity: 0.6;
  @media screen and (max-width: 480px) {
    position: relative;
    top: 100px;
    color: white;
  }
`;