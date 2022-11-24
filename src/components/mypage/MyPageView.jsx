import React, { useState } from "react";
import * as t from "./MyPageViewStyle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  __getMyPick,
  __getMyInformation,
  __getMyPosts,
  __getTotalGameData,
} from "../../redux/modules/MyPageSlice";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "./Pagination";
import ProfileInformation from "./profileInformation/ProfileInformation";
import instance from "../../lib/instance";
import InformationChart from "./profileInformation/InformationChart";
import background from "../../img/3.jpg";

export default function MyPageView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.MyInforSlice.myinfor.memberId);
  // console.log(userId);
  // 유저 정보
  // const userNickname = useSelector(
  //   (state) => state.MyInforSlice.myinfor.nickName
  // );
  // const userPostCnt = useSelector(
  //   (state) => state.MyInforSlice.myinfor.postCnt
  // );
  // const userCommentCnt = useSelector(
  //   (state) => state.MyInforSlice.myinfor.commentCnt
  // );
  // const userGameCnt = useSelector(
  //   (state) => state.MyInforSlice.myinfor.gameCnt
  // );

  const [nickname, setNickname] = useState([]);
  const [userGameCnt, setUserGameCnt] = useState([]);
  const [userCommentCnt, setUserCommentCnt] = useState([]);
  const [userPostCnt, setUserPostCnt] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await instance.get("tb/mypage/info");

      setUserGameCnt(result.data.data.gameCnt);
      setUserCommentCnt(result.data.data.commentCnt);
      setUserPostCnt(result.data.data.postCnt);
      setNickname(result.data.data.nickName);
    }
    fetchData();
  }, []);

  // 내가 작성한 글목록
  const [posts, setPosts] = useState([]);
  const [writelimit, setWriteLimit] = useState(10);
  const [writepage, setWritePage] = useState(1);
  const writeoffset = (writepage - 1) * writelimit;
  useEffect(() => {
    async function fetchData() {
      const result = await instance.get("tb/mypage/posts");
      setPosts(result.data.data);
    }
    fetchData();
  }, []);
  console.log(posts);
  // 내가 좋아요한 글목록
  const [myPick, setMyPick] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  useEffect(() => {
    async function fetchData() {
      const result = await instance.get("tb/mypage/hearts");
      setMyPick(result.data.data);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll); //clean up
  //   };
  // }, []);
  // const handleScroll = () => {
  //   console.log("scrolled");
  //   if (window.scrollY > 80) {
  //     console.log("100");
  //   }
  // };

  return (
    <t.myInformationWrap>
      <ProfileInformation />

      <t.myTotalInfo>
        <span>BalanceGame</span>
        <span>{userGameCnt}</span>
        <t.textLine />
        <span>작성한 게시글</span>
        <span>{userPostCnt}</span>
        <t.textLine />
        <span>작성한 댓글</span>
        <span>{userCommentCnt}</span>
      </t.myTotalInfo>

      <t.mySelectInformation>
        <t.myPickPostWrap>
          <t.itemHeader>
            <h2>내가 좋아요한 게시물</h2>
            <t.thinLine />
          </t.itemHeader>

          <t.pickPostWrap>
            {typeof myPick === typeof "string" ? (
              <h1>좋아요한 글이 없습니다.</h1>
            ) : (
              myPick.slice(offset, offset + limit).map((idx) => {
                if (myPick.length === 0) {
                  return <t.empty>좋아요한 글이 없습니다.</t.empty>;
                } else {
                  return (
                    <t.pickPostItem
                      key={idx.postId}
                      onClick={() => navigate(`/detail/${idx.postId}`)}
                    >
                      <t.pickPostImg src={idx.img} alt="게시글이미지" />
                      <div>{idx.title}</div>
                      <div>{idx.nickName}</div>
                    </t.pickPostItem>
                  );
                }
              })
            )}
          </t.pickPostWrap>
          <t.footer>
            <t.thinLine />
            <Pagination
              total={myPick.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </t.footer>
        </t.myPickPostWrap>
        <t.myPostWrap>
          <t.itemHeader>
            <h2>내가 작성한 글 목록</h2>

            <t.thinLine />
          </t.itemHeader>
          <t.pickPostWrap>
            {typeof posts === typeof "string" ? (
              <h1>작성한 글이 없습니다.</h1>
            ) : (
              posts.slice(writeoffset, writeoffset + writelimit).map((idx) => {
                if (posts.length === 0) {
                  return <h1 key={idx.postId}>작성한 글이 없습니다.</h1>;
                } else {
                  return (
                    <t.pickPostItem
                      key={idx.postId}
                      onClick={() => navigate(`/detail/${idx.postId}`)}
                    >
                      <t.pickPostImg src={idx.img} alt="게시글이미지" />
                      <div>{idx.title}</div>
                      <div>{idx.createdAt}</div>
                    </t.pickPostItem>
                  );
                }
              })
            )}
          </t.pickPostWrap>

          <t.footer>
            <t.thinLine />
            <Pagination
              total={posts.length}
              limit={writelimit}
              page={writepage}
              setPage={setWritePage}
            />
          </t.footer>
        </t.myPostWrap>
      </t.mySelectInformation>
    </t.myInformationWrap>
  );
}
