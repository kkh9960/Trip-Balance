import styled from "styled-components";

export const Container = styled.div`
  background-color: gray;
  width: 100%;
//
  @media screen and (max-width: 746px) {
    width: 100%;
  }
`;
export const Wrap = styled.div`
  height: 290px;
  @media screen and (max-width: 550px) {
    height: 370px;
    width: 100%;
  }
`;
export const DesignWrap = styled.div`
margin-top: 10px;
`



export const Design = styled.div`
  text-align: center;
  font-family: "Jalnan";
  color: white;
  opacity: 0.5;
  position: relative;
  top: -7px;
  @media screen and (max-width: 550px) {
    text-align: center;
    top: 120px;
    position: relative;
    font-family: "Jalnan";
    color: white;
    opacity: 0.5;
  }
`;
export const Name = styled.div`
  text-align: center;
  font-family: "Jalnan";
  color: white;
  opacity: 0.5;
  @media screen and (max-width: 550px) {
    text-align: center;
    position: relative;
    font-family: "Jalnan";
    color: white;
    top: 150px;
    opacity: 0.5;
  }
`;
export const GitWrap = styled.a`
  text-decoration: none;
  color: white;
`;
export const Gitimg = styled.img`
  width: 30px;
  position: relative;
  top: 10px;
  margin: 2px;
 @media screen and (max-width: 480px) {
  width: 25px;
 }
`;
export const Footerlogo = styled.img`
  position: relative;
  top: 40px;
  width: 20vw;
  @media screen and (max-width: 480px) {
    width: 183px;
    position: relative;
    top: -20px;
    justify-content: center;
    align-items: center;
    left: 100px;
    margin-top: 30px;
  }
`;
export const Title = styled.div`
  text-align: center;
  align-items: center;
  top: -100px;
  opacity: 0.7;
  font-family: "Jalnan";
  color: white;
  position: relative;
  @media screen and (max-width: 480px) {
    left: -40px;
    margin-top: 90px;
    width: 100%;
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
  top: -70px;
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
  top: -35px;
  @media screen and (max-width: 480px) {
    position: relative;
    top: -20px;
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

  top: -5px;
  color: white;

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
  position: relative;
  top: -30px;
  @media screen and (max-width: 480px) {
    width: 400px;
    position: relative;
    top: -10px;
    color: white;
    align-items: center;
  }
`;
export const FrontWrap = styled.div`
  text-align: center;
  position: relative;
  top: -15px;
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
  position: relative;
  top: -55px;

  @media screen and (max-width: 480px) {
    position: relative;
    top: -20px;
    color: white;
    margin-top: 10px;
  }
`;
//
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
    top: -20px;
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
