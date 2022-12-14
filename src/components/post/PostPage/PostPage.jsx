import BalanceButton from "../BalanceButton/BalanceButton";
import * as St from "./PostPageStyle";
import TopButton from "../../common/button/TopButton";
import PostItem from "../PostItem/PostItem";

const PostPage = () => {
  return (
    <St.PostContainer>
      <PostItem />
      <BalanceButton />
      <TopButton />
    </St.PostContainer>
  );
};

export default PostPage;
