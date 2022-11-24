import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FcLike } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import { __getBoard, __SearchBoard } from "../redux/modules/BoardSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useInView } from "react-intersection-observer";
// import useInfiniteScroll from "../hooks/useInfiniteScroll";
export const Cards = () => {
  const posts = useSelector((state) => state.BoardSlice.posts);
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const [ref, inView] = useInView();
  const search = (e) => {
    if (e.key === "Enter") {
      setUseInput(e.target.value);
    }
    console.log("key press");
  };

  const [useInput, setUseInput] = useState("");

  // const onChange = (e) => {
  //   setUseInput(e.target.value);
  // };

  const onChange = (e) => {
    const { name, value } = e.target;
    setCategory({
      ...category,
      [name]: value,
    });
  };

  console.log(category);
  // const intersectiong = useInfiniteScroll(fetchMoreEl);
  const filteredProducts = posts.filter((posts) => {
    return posts.title.toLowerCase().includes(useInput.toLowerCase());
  });

  useEffect(() => {
    if (posts.length === 0) {
      console.log("첫포스트로딩");
      dispatch(__getBoard());
    }
  }, []);

  return (
    <Layout>
      <form>
        <select name="category" className="select" id="edu" onChange={onChange}>
          <option value="1">서울</option>
          <option value="2">인천</option>
          <option value="3">가평</option>
          <option value="4">용인</option>
          <option value="5">파주</option>
          <option value="6">속초</option>
          <option value="7">강릉</option>
          <option value="8">춘천</option>
          <option value="9">양양</option>
          <option value="10">평창</option>
          <option value="11">부산</option>
          <option value="12">거제</option>
          <option value="13">통영</option>
          <option value="14">포항</option>
          <option value="15">경주</option>
          <option value="16">안동</option>
          <option value="17">여수</option>
          <option value="18">목포</option>
          <option value="19">담양</option>
          <option value="20">보성</option>
          <option value="21">해남</option>
          <option value="22">전주</option>
          <option value="23">천안</option>
          <option value="24">태안</option>
          <option value="25">보령</option>
          <option value="26">공주</option>
          <option value="27">단양</option>
          <option value="28">대구</option>
          <option value="29">대전</option>
          <option value="30">광주</option>
          <option value="31">울산</option>
          <option value="32">서귀포</option>
        </select>
      </form>
      <SearchBar
        type="text"
        onKeyPress={search}
        // onChange={onChange}
        // value={useInput}
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
      <div ref={ref}></div>
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
