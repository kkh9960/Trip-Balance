import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return <LayoutBox>{props.children}</LayoutBox>;
};

export default Layout;

const LayoutBox = styled.div`
  margin: 0 auto;
  width: 1326px;
  background-color: gray;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
