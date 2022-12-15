import React, { useState } from "react";
import * as t from "./MemberPageViewStyle";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "../common/Pagination";
import MemberInformation from "./memberInformation/MemberInformation";
import instance from "../../lib/instance";

export default function MemberPage() {
  const id = useParams();

  const navigate = useNavigate();
  const [nickname, setNickname] = useState([]);
  const [userGameCnt, setUserGameCnt] = useState([]);
  const [userCommentCnt, setUserCommentCnt] = useState([]);
  const [userPostCnt, setUserPostCnt] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await instance.get(`tb/memberinfo/${id.id}`);

      setUserGameCnt(result.data.data.gameCnt);
      setUserCommentCnt(result.data.data.commentCnt);
      setUserPostCnt(result.data.data.postCnt);
      setNickname(result.data.data.nickName);
    }
    fetchData();
  }, []);

  // 유저가 작성한 글목록
  const [posts, setPosts] = useState([]);
  const [writelimit, setWriteLimit] = useState(10);
  const [writepage, setWritePage] = useState(1);
  const writeoffset = (writepage - 1) * writelimit;
  useEffect(() => {
    async function fetchData() {
      const result = await instance.get(`tb/memberinfo/posts/${id.id}`);
      setPosts(result.data.data);
    }
    fetchData();
  }, []);
  // 유저가 좋아요한 글목록
  const [myPick, setMyPick] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  useEffect(() => {
    async function fetchData() {
      const result = await instance.get(`tb/memberinfo/hearts/${id.id}`);
      setMyPick(result.data.data);
    }
    fetchData();
  }, []);

  return (
    <t.myInformationWrap>
      <MemberInformation />

      <t.myTotalInfo>
        <t.myTotalInfoText>
          <span>
            게임
            <br />
            횟수
          </span>
          {"\n"}
          <span>{userGameCnt}</span>
        </t.myTotalInfoText>
        <t.textLine />
        <t.myTotalInfoText>
          <span>
            작성한
            <br />
            게시글
          </span>
          {"\n"}
          <span>{userPostCnt}</span>
        </t.myTotalInfoText>
        <t.textLine />
        <t.myTotalInfoText>
          <span>
            작성한
            <br />
            댓글
          </span>
          {"\n"}
          <span>{userCommentCnt}</span>
        </t.myTotalInfoText>
      </t.myTotalInfo>

      <t.mySelectInformation>
        <t.myPickPostWrap>
          <t.itemHeader>
            <h2>내가 좋아요한 게시물</h2>
            <t.thinLine />
          </t.itemHeader>

          <t.pickPostWrap>
            {typeof myPick === typeof "string" ? (
              <t.empty>좋아요한 글이 없습니다.</t.empty>
            ) : myPick === null ? (
              <t.empty>좋아요한 글이 없습니다.</t.empty>
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
                      <t.pickPostTitle>{idx.title}</t.pickPostTitle>
                      <t.pickPostNickname>{idx.nickName}</t.pickPostNickname>
                    </t.pickPostItem>
                  );
                }
              })
            )}
          </t.pickPostWrap>
          <t.footer>
            <t.thinLine />
            <Pagination
              total={
                typeof myPick === "string" ? myPick.length - 10 : myPick.length
              }
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
          <t.postWrap>
            {typeof posts === typeof "string" ? (
              <t.empty>작성한 글이 없습니다.</t.empty>
            ) : posts === null ? (
              <t.empty>작성한 글이 없습니다.</t.empty>
            ) : (
              posts.slice(writeoffset, writeoffset + writelimit).map((idx) => {
                if (posts.length === 0) {
                  return <h1 key={idx.postId}>작성한 글이 없습니다.</h1>;
                } else {
                  return (
                    <t.postItem
                      key={idx.postId}
                      onClick={() => navigate(`/detail/${idx.postId}`)}
                    >
                      <t.postImg src={idx.img} alt="게시글이미지" />
                      <t.postTitle>{idx.title}</t.postTitle>
                      <t.postTime>{idx.createdAt.split("T")[0]}</t.postTime>
                    </t.postItem>
                  );
                }
              })
            )}
          </t.postWrap>

          <t.footer>
            <t.thinLine />

            <Pagination
              total={
                typeof posts === "string" ? posts.length - 10 : posts.length
              }
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
