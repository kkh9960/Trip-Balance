import BalanceButton from "./BalanceButton";
import styled from "styled-components";
import TopButton from "../common/button/TopButton";
import PostItem from "./PostItem";

const PostPage = () => {
  // const data = useSelector((state) => state.BoardSlice.posts);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(__getBoard());
  // }, []);

  return (
    <PostContainer>
      <PostItem />
      {/* <InfiniteScroll data={data} /> */}
      <BalanceButton />
      <TopButton />
    </PostContainer>
  );
};

export default PostPage;

const PostContainer = styled.div`
  padding-top: 120px;
`;

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
