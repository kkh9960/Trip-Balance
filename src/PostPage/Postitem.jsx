import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { __getbestfive, __getBoard } from "../redux/modules/BoardSlice";
import { useNavigate } from "react-router-dom";
import PostBestfive from "./PostBestfive";

const Postitem = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.BoardSlice.posts);
  const best = useSelector((state) => state.BoardSlice.bestpost);
  const [page, setpage] = useState(1);
  const NICK = sessionStorage.getItem("nickName");

  useEffect(() => {
    if (posts == 0) {
      dispatch(__getBoard(0));
    }
    if (best == 0) {
    }
    dispatch(__getbestfive());
  }, []);

  const goPosrWrite = () => {
    if (NICK) {
      navigator("/write");
    } else {
      alert("글쓰기는 로그인후에 가능합니다.");
    }
  };

  const GetPost = () => {
    dispatch(__getBoard(page));
    setpage(page + 1);
  };

  console.log(posts);
  console.log(best);

  return (
    <PostPageContainer>
      <TodayTitle>오늘의 여행지 검색</TodayTitle>
      <SearchBox>
        <CategorySearch>
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
        </CategorySearch>
        <TitleSearchbox>
          <TitleSearch
            type="text"
            placeholder="오늘의 핫한 여행지 검색하기"
          ></TitleSearch>
          <SearchIcon></SearchIcon>
        </TitleSearchbox>
        <PostgoWrite onClick={goPosrWrite}>게시글 작성</PostgoWrite>
      </SearchBox>
      <PostLikeBestbox>
        <PostBestfive best={best} />
      </PostLikeBestbox>
      <PostListWrap>
        <PostListTitle>TB 추천여행지</PostListTitle>
        <PostCardList>
          {posts &&
            posts.map((item, idx) => (
              <CardWrap>
                <CardImgbox>
                  <CardImg src={item.image[0].imgURL} />
                </CardImgbox>
                <CardTextbox>
                  <CardTitle>{item.title}</CardTitle>
                  <Cardbody>
                    <Userinfo>
                      <UserImg src="/img/default3.jpg" />
                      <CardUserName>작성자</CardUserName>
                    </Userinfo>
                    <Likeinfo>
                      <LikeCount>{item.heartNum}</LikeCount>
                      <LikeImg src="img/heart.svg" />
                    </Likeinfo>
                  </Cardbody>
                </CardTextbox>
              </CardWrap>
            ))}
        </PostCardList>
      </PostListWrap>
      <Viewbox>
        <Viewmore onClick={GetPost}>더 보기</Viewmore>
      </Viewbox>
    </PostPageContainer>
  );
};

export default Postitem;

const Viewbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Viewmore = styled.button`
  margin-bottom: 150px;
  background-color: #49b2d3;
  color: #fff;
  font-size: 26px;
  padding: 10px 50px;
  transition: all 0.4s;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.9);
  }
`;

const LikeImg = styled.img``;
const LikeCount = styled.div`
  margin-right: 10px;
`;

const UserImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 15px;
`;

const Likeinfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
const Userinfo = styled.div`
  display: flex;
  align-items: center;
`;

const CardUserName = styled.div`
  margin-left: 10px;
`;
const Cardbody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 10px;
`;
const CardTitle = styled.div`
  margin: 20px 20px 5px 20px;
  font-size: 18px;
  white-space: normal;
`;

const CardTextbox = styled.div`
  width: 100%;
  height: 135px;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CardImgbox = styled.div`
  width: 100%;
  height: 365px;
`;
const CardWrap = styled.div`
  width: 344px;
  height: 500px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
  &:hover {
    transform: translate(0, -5px);
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  }
`;

const PostCardList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
`;

const PostListWrap = styled.div`
  margin: 60px auto 50px;
  width: 100%;
  height: auto;
`;
const PostListTitle = styled.div`
  text-align: center;
  font-size: 36px;
  margin-bottom: 70px;
`;

const PostPageContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  height: auto;
  margin: 0 auto;
  margin-top: 100px;
`;
const TodayTitle = styled.div`
  font-size: 30px;
  text-align: center;
`;
const SearchBox = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;
  gap: 20px;
`;
const CategorySearch = styled.select`
  width: 344px;
  height: 60px;
  border-radius: 30px;
  font-size: 20px;
  text-align: center;
`;
const TitleSearchbox = styled.div`
  width: 690px;
  height: 60px;
  border-radius: 30px;
`;
const TitleSearch = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  border-width: 0;
  font-size: 16px;
  border-radius: 30px;
  outline: none;
  border: 1px solid #d9d9d9;
`;
const SearchIcon = styled.div``;

const PostgoWrite = styled.button`
  width: 344px;
  height: 60px;
  text-align: center;
  border-radius: 30px;
  font-size: 22px;
  background-color: #ffa314;
  color: #fff;
  margin-left: 20px;
  &:hover {
    opacity: 0.8;
  }
`;

const PostLikeBestbox = styled.div`
  width: 100%;
  height: auto;
`;
