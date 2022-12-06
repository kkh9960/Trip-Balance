import BalanceButton from "./BalanceButton";
import styled from "styled-components";
import TopButton from "../common/button/TopButton";
import PostItem from "./PostItem";

const PostPage = () => {
  return (
    <PostContainer>
      <PostItem />
      <BalanceButton />
      <TopButton />
    </PostContainer>
  );
};

export default PostPage;

const PostContainer = styled.div`
  padding-top: 120px;
`;
