import React, { useEffect } from "react";
import { motion } from "framer-motion";
import BalanceButton from "./BalanceButton";
import styled from "styled-components";
import TopButton from "../common/button/TopButton";
import { useDispatch, useSelector } from "react-redux";
import { __getBoard } from "../../redux/modules/BoardSlice";
import PostItem from "./PostItem";

const PostPage = () => {
  // const data = useSelector((state) => state.BoardSlice.posts);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(__getBoard());
  // }, []);

  return (
    <>
   <PostItem/>
        {/* <InfiniteScroll data={data} /> */}
      <BalanceButton />
      <TopButton />
      </>
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
