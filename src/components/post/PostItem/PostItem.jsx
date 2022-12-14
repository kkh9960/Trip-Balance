import React, { useState, useEffect } from "react";
import * as St from "./PostItemStyle";
import { useSelector, useDispatch } from "react-redux";
import {
  __getbestfive,
  __getBoard,
  __getBoardinfi,
  __getBoardLocalinfi,
  __getBoardTotalinfi,
  __getBoardTotal,
  __getBoardLocal,
} from "../../../redux/modules/BoardSlice";
import { useNavigate } from "react-router-dom";
import PostBestfive from "../PostBestfive/PostBestfive";
import { useInView } from "react-intersection-observer";
import { Loading2 } from "../../Loading/Loading2";
import LoginPage from "../../login/LoginPage";

const PostItem = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.BoardSlice.posts);
  const isLast = useSelector((state) => state.BoardSlice.isLastPage);
  const best = useSelector((state) => state.BoardSlice.bestpost);
  const [page, setpage] = useState(1);
  const [pageLocal, setPageLocal] = useState(0);
  const [useInput, setUseInput] = useState("");
  const email = sessionStorage.getItem("email");
  const [search, setsearch] = useState(1);
  const [bestview, setbestview] = useState(true);

  const profiledefaultImg = "/img/board/tb.jpg";
  const [ref, inView] = useInView();

  const [test, settest] = useState(false);
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

  //일반검색 인피니티입니다.
  useEffect(() => {
    if (posts !== 0 && inView) {
      if (isLast == false && search == 1) {
        dispatch(__getBoardinfi(page));
        setpage(page + 1);
      }
      if (isLast == false && search == 2) {
        dispatch(__getBoardTotalinfi({ useInput, page }));
        setpage(page + 1);
      }
      if (isLast == false && search == 3) {
        dispatch(__getBoardLocalinfi({ selLocal, useInput, page }));
        setpage(page + 1);
      }
    }
  }, [inView]);

  const [modal, setModal] = useState(false);

  const goPosrWrite = () => {
    if (email) {
      navigator("/write");
    } else {
      alert("글쓰기는 로그인후에 가능합니다.");
      setModal(!modal);
    }
  };
  const goDetail = (id) => {
    if (email) {
      navigator(`/detail/${id}`);
    } else {
      alert("게시글 조회는 로그인 후 가능합니다.");
      setModal(!modal);
    }
  };
  const [selLocal, setSelLocal] = useState("0");
  const getCategory = (e) => {
    setSelLocal(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    if (selLocal == "0") {
      dispatch(__getBoardTotal({ useInput, pageLocal }));
      setsearch(2);
      setbestview(false);
      if (useInput == "") {
        setbestview(true);
      } else {
        setbestview(false);
      }
    } else {
      dispatch(__getBoardLocal({ useInput, pageLocal, selLocal }));
      setsearch(3);
      console.log(55);
      setbestview(false);
    }
  };

  return (
    <>
      {modal ? (
        <>
          <LoginPage />
          <St.PostPageContainer>
            <St.TodayTitle>오늘의 여행지 검색</St.TodayTitle>
            <St.SearchBox>
              <St.SearchBoxForm onSubmit={getSearch}>
                <St.CategorySearch
                  onChange={getCategory}
                  style={{ fontFamily: "Jalnan" }}
                >
                  <option value="0">전체</option>
                  <option value="1">수도권</option>
                  <option value="2">강원도 + 경상도</option>
                  <option value="3">충청도 + 전라도</option>
                  <option value="4">제주도</option>
                  <option value="5">기타</option>
                </St.CategorySearch>
                <St.TitleSearchbox>
                  <St.TitleSearch
                    type="text"
                    placeholder="오늘의 핫한 여행지 검색하기"
                    value={useInput}
                    onChange={onChange}
                  ></St.TitleSearch>
                  <St.SearchIcon></St.SearchIcon>
                </St.TitleSearchbox>
              </St.SearchBoxForm>
              <St.PostgoWrite onClick={goPosrWrite}>게시글 작성</St.PostgoWrite>
            </St.SearchBox>
            {bestview ? (
              <St.PostLikeBestbox>
                <PostBestfive best={best} setModal={setModal} modal={modal} />
              </St.PostLikeBestbox>
            ) : null}
            <St.PostListWrap>
              <St.PostListTitle type="submit">여행 이야기</St.PostListTitle>
              <St.PostCardList>
                {posts &&
                  posts.map((item, idx) => (
                    <St.CardWrap
                      key={idx}
                      search={posts}
                      onClick={() => {
                        goDetail(item.postId);
                      }}
                    >
                      <St.CardImgbox>
                        <St.CardImg src={item.image[0].imgURL} alt="" />
                      </St.CardImgbox>
                      <St.CardTextbox>
                        <St.CardTitle>{item.title}</St.CardTitle>
                        <St.Cardbody>
                          <St.Userinfo>
                            <St.UserImg
                              src={
                                item.profileImg
                                  ? item.profileImg
                                  : profiledefaultImg
                              }
                              alt=""
                            />
                            <St.CardUserName>{item.author}</St.CardUserName>
                          </St.Userinfo>
                          <St.Likeinfo>
                            <St.LikeCount>{item.heartNum}</St.LikeCount>
                            <St.LikeImg src="img/board/heart.svg" alt="" />
                          </St.Likeinfo>
                        </St.Cardbody>
                      </St.CardTextbox>
                    </St.CardWrap>
                  ))}
              </St.PostCardList>
            </St.PostListWrap>
            <St.Viewbox>
              {test ? (
                <div ref={ref}>
                  {isLast ? "더이상 글이없습니다" : <Loading2 />}
                </div>
              ) : null}
            </St.Viewbox>
          </St.PostPageContainer>
        </>
      ) : (
        <St.PostPageContainer>
          <St.TodayTitle>오늘의 여행지 검색</St.TodayTitle>
          <St.SearchBox>
            <St.SearchBoxForm onSubmit={getSearch}>
              <St.CategorySearch
                onChange={getCategory}
                style={{ fontFamily: "Jalnan" }}
              >
                <option value="0">전체</option>
                <option value="1">수도권</option>
                <option value="2">강원도 + 경상도</option>
                <option value="3">충청도 + 전라도</option>
                <option value="4">제주도</option>
                <option value="5">기타</option>
              </St.CategorySearch>
              <St.TitleSearchbox>
                <St.TitleSearch
                  type="text"
                  placeholder="오늘의 핫한 여행지 검색하기"
                  value={useInput}
                  onChange={onChange}
                />
                <St.SearchIcon></St.SearchIcon>
              </St.TitleSearchbox>
            </St.SearchBoxForm>
            <St.PostgoWrite onClick={goPosrWrite}>게시글 작성</St.PostgoWrite>
          </St.SearchBox>
          {bestview ? (
            <St.PostLikeBestbox>
              <PostBestfive best={best} />
            </St.PostLikeBestbox>
          ) : null}
          <St.PostListWrap>
            <St.PostListTitle type="submit">여행 이야기</St.PostListTitle>
            <St.PostCardList>
              {posts &&
                posts.map((item, idx) => (
                  <St.CardWrap
                    key={idx}
                    search={posts}
                    onClick={() => {
                      goDetail(item.postId);
                    }}
                  >
                    <St.CardImgbox>
                      <St.CardImg src={item.image[0].imgURL} alt="" />
                    </St.CardImgbox>
                    <St.CardTextbox>
                      <St.CardTitle>{item.title}</St.CardTitle>
                      <St.Cardbody>
                        <St.Userinfo>
                          <St.UserImg
                            src={
                              item.profileImg
                                ? item.profileImg
                                : profiledefaultImg
                            }
                            alt=""
                          />
                          <St.CardUserName>{item.author}</St.CardUserName>
                        </St.Userinfo>
                        <St.Likeinfo>
                          <St.LikeCount>{item.heartNum}</St.LikeCount>
                          <St.LikeImg src="img/board/heart.svg" alt="" />
                        </St.Likeinfo>
                      </St.Cardbody>
                    </St.CardTextbox>
                  </St.CardWrap>
                ))}
            </St.PostCardList>
          </St.PostListWrap>
          <St.Viewbox>
            {test ? (
              <div ref={ref}>
                {isLast ? "더이상 글이없습니다" : <Loading2 />}
              </div>
            ) : null}
          </St.Viewbox>
        </St.PostPageContainer>
      )}
    </>
  );
};
export default PostItem;
