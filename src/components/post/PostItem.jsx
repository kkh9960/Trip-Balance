import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  __getbestfive,
  __getBoard,
  __getcategory,
  __getcatenormal,
} from "../../redux/modules/BoardSlice";
import { useNavigate } from "react-router-dom";
import PostBestfive from "./PostBestfive";
import { useInView } from "react-intersection-observer";
import { Loading2 } from "../Loading/Loading2";
import { motion } from "framer-motion";
const PostItem = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.BoardSlice.posts);
  const best = useSelector((state) => state.BoardSlice.bestpost);
  const [page, setpage] = useState(1);
  const [useInput, setUseInput] = useState("");
  const NICK = sessionStorage.getItem("nickName");
  const [Cate, setCate] = useState("");
  const email = sessionStorage.getItem("email");
  const filteredProducts = posts.filter((posts) => {
    return posts.title.toLowerCase().includes(useInput.toLowerCase());
  });

  const profiledefaultImg = "/img/default3.jpg";
  const [ref, inView] = useInView();
  console.log("데이터", posts);
  // const search = (e) => {
  //   if (e.key === "Enter") {
  //     setUseInput(e.target.value);
  //   }
  //   console.log("key press");
  // };
  const [test, settest] = useState(true);
  console.log(test);
  useEffect(() => {
    setTimeout(() => {
      settest(true);
    }, 3000);
  }, []);
  const onChange = (e) => {
    setUseInput(e.target.value);
  };

  useEffect(() => {
    if (posts == 0) {
      dispatch(__getBoard(0));
    }
    if (best == 0) {
    }
    dispatch(__getbestfive());
  }, []);
  useEffect(() => {
    if (posts.length !== 0 && inView) {
      dispatch(__getBoard(page)).then((res) => {
        console.log(res.last);
      });
      setpage(page + 1);
    }
  }, [inView]);
  const goPosrWrite = () => {
    if (NICK) {
      navigator("/write");
    } else {
      alert("글쓰기는 로그인후에 가능합니다.");
    }
  };
  const goDetail = (id) => {
    console.log(id);
    if (email) {
      navigator(`/detail/${id}`);
    } else {
      alert("로그인을 해주세요!");
    }
  };
  const getCategory = (e) => {
    // console.log(e.target?.value);
    // if (e.target?.value == 0) {
    //   dispatch(__getcatenormal());
    // } else {
    //   dispatch(__getcategory(e.target?.value));
    // }
  };

  return (
    <motion.div
      className="loginPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PostPageContainer>
        <TodayTitle>오늘의 여행지 검색</TodayTitle>
        <SearchBox>
          <CategorySearch onChange={getCategory}>
            <option value="0">기본</option>
            <option value="1">수도권</option>
            <option value="2">강원도 + 경상도</option>
            <option value="3">충청도 + 전라도</option>
            <option value="4">제주도</option>
            <option value="5">기타</option>
          </CategorySearch>
          <TitleSearchbox>
            <TitleSearch
              type="text"
              placeholder="오늘의 핫한 여행지 검색하기"
              value={useInput}
              onChange={onChange}
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
            {filteredProducts.map((item, idx) => (
              <CardWrap
                search={filteredProducts}
                onClick={() => {
                  goDetail(item.postId);
                }}
              >
                <CardImgbox>
                  <CardImg src={item.image[0].imgURL} />
                </CardImgbox>
                <CardTextbox>
                  <CardTitle>{item.title}</CardTitle>
                  <Cardbody>
                    <Userinfo>
                      <UserImg
                        src={
                          item.profileImg ? item.profileImg : profiledefaultImg
                        }
                      />
                      <CardUserName>{item.author}</CardUserName>
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
          {test ? (
            <div ref={ref}>
              <Loading2 />
            </div>
          ) : null}
        </Viewbox>
      </PostPageContainer>
    </motion.div>
  );
};
export default PostItem;

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
  cursor: pointer;
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
