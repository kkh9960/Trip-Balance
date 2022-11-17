import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FcLike } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import { __getBoard, __SearchBoard } from "../redux/modules/BoardSlice";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Cards = () => {
  const posts = useSelector((state) => state.BoardSlice.posts);
  // console.log(posts[0].image[0].imgURL);

  const dispatch = useDispatch();
  // const [query, setQuery] = useSearchParams();
  // const getProducts = () => {
  //   //q=서치퀄리 넣어줌 알아서 찾아준다
  //   let searchQuery = query.get("q") || "";
  //   dispatch(__SearchBoard(searchQuery)); ///검색햇을경우 미리세팅 test해봐야됨
  // };

  const [useInput, setUseInput] = useState("");
  console.log(useInput);
  const onChange = (e) => {
    setUseInput(e.target.value);
  };

  const filteredProducts = posts.filter((posts) => {
    return posts.title.toLowerCase().includes(useInput.toLowerCase());
  });

  useEffect(() => {
    dispatch(__getBoard());
  }, []);

  // useEffect(() => {
  //   getProducts();
  // }, [query]);

  return (
    <Layout>
      {posts &&
        posts.map((element, index) => (
          <CardWrap key={element.postId} element={element} index={index} />
        ))}

      <SearchBar
        type="text"
        onChange={onChange}
        value={useInput}
        placeholder=" 검색어를 입력하세요 20글자이내."
      />
      {filteredProducts.map((element, index) => (
        <CardWrap
          key={element.postId}
          element={element}
          index={index}
          search={filteredProducts}
        />
      ))}

      <Line></Line>
    </Layout>
  );
};
export default Cards;

const CardWrap = ({ element, index, search }) => {
  const carddefaultimg = "../../img/default3.jpg";
  const navigator = useNavigate();
  const DatailPageMove = () => {
    navigator(`/detail/${element.postId}`);
  };
  console.log(search);
  return (
    <CardBox key={element.postId} onClick={DatailPageMove}>
      <div>
        <ImgBox
          src={
            element.image[0]?.imgURL ? element.image[0]?.imgURL : carddefaultimg
          }
        />
        <TextBox>
          <Title>
            개수
            <FcLike />
          </Title>
          <Name>{element.title}</Name>
        </TextBox>
      </div>
    </CardBox>
  );
};
{
  /* <InfiniteScroll
    pageStart={0}
    loadMore={loadFunc}
    hasMore={true || false}
    loader={<div className="loader" key={0}>Loading ...</div>}
>
    {items} // <-- This is the content you want to load
</InfiniteScroll> */
}

const SearchBar = styled.input`
  opacity: 0.5;
  border: 1px solid white;
  background-color: #744aaa;
  color: white;
  width: 710px;
  height: 60px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 280px;
  position: absolute;
  bottom: -15px;
  font-family: NotoSans;
  font-size: 16px;
  top: 330px;
  left: 350px;

  :hover {
    opacity: 1;
  }
`;

const Layout = styled.div`
  justify-content: center;
  text-align: center;
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Line = styled.div`
  border: 1px solid #9a9797;
  width: 1333.1px;
  margin: 20.9px 110.8px 61.6px 2px;
  margin-bottom: 20px;
`;
const ImgBox = styled.img`
  background-position: center;
  background-size: cover;
  align-items: center;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  width: 345px;
  height: 414px;
  border-radius: 10%;
`;
const CardBox = styled.div`
  font-family: "Gowun Dodum", sans-serif;
  display: flex;
  border: none;
  margin-bottom: 30px;
  margin: 20px;
  width: 344px;
  border-radius: 10%;
  transition: 1.1s;
  :hover {
    transform: scale(1.1);
  }
`;
const TextBox = styled.div`
  width: 300px;
  overflow: hidden;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  z-index: 2;
`;
const Title = styled.div`
  font-size: 20px;
  display: block;
  text-decoration: none;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-family: "KakaoBigRegular";
  cursor: pointer;
  line-height: 23px;
  word-break: normal;
  margin-left: 30px;
  z-index: 1;
`;
const Name = styled.div`
  font-family: "KakaoBigRegular";
  font-size: 20px;
  line-height: 20px;
  margin-left: -180px;
`;
