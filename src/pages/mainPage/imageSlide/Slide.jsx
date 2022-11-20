import React from "react";
import styled from "styled-components";

export default function Slide({ img }) {
  return <IMG src={img} />;
}

const IMG = styled.img`
  position: relative;
  width: 100%;
  height: 100vh;
`;
