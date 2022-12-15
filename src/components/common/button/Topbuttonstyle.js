import styled from "styled-components";

export const MobileBg = styled.img`
 width: 60px;
  height: 60px;
  border-radius: 50%;
  opacity: 0.9;
`
export const MobileWrite = styled.img`
 width: 60px;
  height: 60px;
  border-radius: 50%;
  opacity: 0.9;
`
export const MobileTop = styled.img`
width: 60px;
  height: 60px;
  border-radius: 50%;
  opacity: 0.9;
`
export const MobileBtnbox = styled.div`
 width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 50px;
`
export const MobileButtonWrap = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    display: block;
    width: 100%;
    height: 80px;
  }

`
export const Bgimg = styled.img`
 width: 70px;
  height: 70px;
  border-radius: 50%;
  opacity: 0.9;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    display: none;
  }

`
export const Writeimg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  opacity: 0.9;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    display: none;
  }
`
export const Topimg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  opacity: 0.9;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    display: none;
  }
`
export const ScrollContainer = styled.div`
 position: fixed;
  right: 3%;
  bottom: 10%;
  z-index: 1;

  width: 80px;
  height: 150px;
  @media screen and (max-width: 480px) {
    display: flex;
    width: 100%;
    right: 0%;
    align-items: center;
    justify-content: center;
    bottom: -35px;
  }
`