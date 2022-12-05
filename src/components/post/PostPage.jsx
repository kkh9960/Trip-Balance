import BalanceButton from "./BalanceButton";
import styled from "styled-components";
import TopButton from "../common/button/TopButton";

import PostItem from "./PostItem";

const PostPage = () => {

  return (
    <>
      <PostItem />
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
