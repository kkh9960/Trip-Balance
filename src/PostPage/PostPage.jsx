import React, { useEffect } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { motion } from "framer-motion";
import BalanceButton from "./BalanceButton";
import styled from "styled-components";
import TopButton from "./TopButton";
import Postitem from "./Postitem";

const PostPage = () => {
  // const data = useSelector((state) => state.BoardSlice.posts);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(__getBoard());
  // }, []);

  return (
    <motion.div
      className="loginPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <Layout>
        <Postitem />

        {/* <InfiniteScroll data={data} /> */}
      </Layout>
      <BalanceButton />
      <TopButton />
      <Footer />
    </motion.div>
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
