import styled from "styled-components";
import img1 from "../../../img/1.jpg";
import img2 from "../../../img/2.jpg";
import img3 from "../../../img/3.jpg";
export const Container = styled.div`
  position: relative;
  overflow: hidden;
  background-color: gray;
`;

export const SliderContainer = styled.div`
  display: flex;
  background-color: blue;
  width: 100%;
  height: 100vh;
  transform: translate(0, 0);
`;

export const Slide1 = styled.div`
  flex: 0 0 100%;
  position: relative;
  background-image: url(${img1});
  background-size: cover;
  background-position: center;
`;
export const Slide2 = styled.div`
  flex: 0 0 100%;
  position: relative;
  background-image: url(${img2});
  background-size: cover;
  background-position: center;
`;
export const Slide3 = styled.div`
  flex: 0 0 100%;
  position: relative;
  background-image: url(${img3});
  background-size: cover;
  background-position: center;
`;
export const text1 = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: red;
  left: 100px;
  top: 200px;
`;

export const text2 = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: red;
  left: 500px;
  top: 200px;
`;
export const text3 = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: green;
  left: 100px;
  top: 200px;
`;
