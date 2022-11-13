import React from "react";
import Footer from "../component/Footer";

import Header from "../component/Header";

import Banner from "./Banner";
import Cards from "./Cards";
import BalanceButton from "./BalanceButton";
import styled from "styled-components";
const PostPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Layout>
        <Cards />
      </Layout>
      <BalanceButton />
      <Footer />
    </div>
  );
};

export default PostPage;

const Layout = styled.div`
  width: 1550px;

  justify-content: center;

  text-align: center;
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
`;
