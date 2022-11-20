import React, { useState } from "react";
import * as t from "./MyPageViewStyle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  __getMyPick,
  __getMyInformation,
  __getMyWriteIn,
  __getMyPosts,
} from "../../redux/modules/MyPageSlice";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "./Pagination";
import img from "../../img/1.jpg";
import ProfileInformation from "./profileInfomation/ProfileInformation";

export default function MyPageView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.MyInforSlice.myinfor.memberId);
  console.log(userId);
  const userNickname = useSelector(
    (state) => state.MyInforSlice.myinfor.nickName
  );
  const introduce = useSelector((state) => state.MyInforSlice.myinfor.self);
  // const id = useParams();
  // console.log(id);
  const myInformation = useSelector((state) => state.MyInforSlice.myinfor);
  useEffect(() => {
    dispatch(__getMyInformation());
  }, []);

  // 내가 작성한 글목록
  const [mywrite, setMyWrite] = useState([]);
  const [writelimit, setWriteLimit] = useState(10);
  const [writepage, setWritePage] = useState(1);
  const writeoffset = (writepage - 1) * writelimit;

  useEffect(() => {
    dispatch(__getMyPosts());
  }, []);
  const posts = useSelector((state) => state.MyInforSlice.myposts);
  console.log(posts);
  // const myWriteIn = useSelector((state) => state.MyInforSlice.data?.data);
  // console.log(myWriteIN);

  // useEffect(() => {
  //   dispatch(__getMyPick({ id }));
  // }, [dispatch]);

  // 내가 좋아요한 글목록
  const [mypick, setMyPick] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <div>
      <t.myInformationWrap>
        <t.userName>
          {userNickname}
          <span>님의 마이페이지</span>
        </t.userName>
        <t.Line />
        <ProfileInformation
          myInformation={myInformation}
          mywirte={mywrite}
          introduce={introduce}
          userNickname={userNickname}
        />

        <t.myPickInfo>
          <span>total</span>
          <span>12회</span>
          <t.textLine />
          <span>산</span>
          <span>5회</span>
          <t.textLine />
          <span>바다</span>
          <span>4회</span>
        </t.myPickInfo>

        <t.mySelectInformation>
          <t.myInformationItem>
            <t.itemHeader>
              <h2>내가 좋아요한 게시물</h2>
              <t.thinLine />
            </t.itemHeader>
            <t.pickPostWrap>
              <t.pickPostItem>
                <t.pickPostImg src={img} alt="게시글이미지" />
                <div>
                  <t.pickPostProfile src={img} alt="프로필" />
                  <t.pickPostNickname>이곳은아이디</t.pickPostNickname>
                </div>
                {/* mypick,mywrite  p,w 대문자로 바꿀것 */}
              </t.pickPostItem>
              <t.pickPostItem>
                <t.pickPostImg src={img} alt="게시글이미지" />
                <div>
                  <t.pickPostProfile src={img} alt="프로필" />
                  <t.pickPostNickname>이곳은아이디</t.pickPostNickname>
                </div>
                {/* mypick,mywrite  p,w 대문자로 바꿀것 */}
              </t.pickPostItem>
              <t.pickPostItem>
                <t.pickPostImg src={img} alt="게시글이미지" />
                <div>
                  <t.pickPostProfile src={img} alt="프로필" />
                  <t.pickPostNickname>이곳은아이디</t.pickPostNickname>
                </div>
                {/* mypick,mywrite  p,w 대문자로 바꿀것 */}
              </t.pickPostItem>
              <t.pickPostItem>
                <t.pickPostImg src={img} alt="게시글이미지" />
                <div>
                  <t.pickPostProfile src={img} alt="프로필" />
                  <t.pickPostNickname>이곳은아이디</t.pickPostNickname>
                </div>
                {/* mypick,mywrite  p,w 대문자로 바꿀것 */}
              </t.pickPostItem>
              <t.pickPostItem>
                <t.pickPostImg src={img} alt="게시글이미지" />
                <div>
                  <t.pickPostProfile src={img} alt="프로필" />
                  <t.pickPostNickname>이곳은아이디</t.pickPostNickname>
                </div>
                {/* mypick,mywrite  p,w 대문자로 바꿀것 */}
              </t.pickPostItem>
              <t.pickPostItem>
                <t.pickPostImg src={img} alt="게시글이미지" />
                <div>
                  <t.pickPostProfile src={img} alt="프로필" />
                  <t.pickPostNickname>이곳은아이디</t.pickPostNickname>
                </div>
                {/* mypick,mywrite  p,w 대문자로 바꿀것 */}
              </t.pickPostItem>
              {mypick.slice(offset, offset + limit).map((idx) => {
                if (mypick.length === 0) {
                  <h1>좋아요한 글이 없습니다.</h1>;
                } else {
                  <t.pickPostItem key={idx.id}>
                    <h3>
                      <t.pickPostProfile src={idx.profileImgimg} alt="프로필" />
                      <t.pickPostNickname>{idx.nickName}</t.pickPostNickname>
                    </h3>
                  </t.pickPostItem>;
                }
              })}
            </t.pickPostWrap>
            <t.footer>
              <t.thinLine />
              <Pagination
                total={mypick.length}
                limit={limit}
                page={page}
                setPage={setPage}
              />
            </t.footer>
          </t.myInformationItem>
          <t.myInformationItem>
            <t.itemHeader>
              <h2>내가 작성한 글 목록</h2>
              {/* <select
                type="number"
                value={limit}
                style={{
                  margin: "auto 10px",
                }}
                onChange={({ target: { value } }) =>
                  setWriteLimit(Number(value))
                }
              >
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select> */}
              <t.thinLine />
            </t.itemHeader>
            <t.pickPostWrap>
              <t.pickPostItem>
                <t.pickPostImg src={img} alt="게시글이미지" />
                <div>
                  <t.pickPostProfile src={img} alt="프로필" />
                  <t.pickPostNickname>이곳은아이디</t.pickPostNickname>
                </div>
              </t.pickPostItem>
              {mywrite
                .slice(writeoffset, writeoffset + writelimit)
                .map((idx) => {
                  if (mywrite.length === 0) {
                    <h1>작성한 글이 없습니다.</h1>;
                  } else {
                    <t.pickPostItem key={idx.id}>
                      <t.pickPostImg src={idx.img} alt="게시글이미지" />
                      <div>{idx.title}</div>
                      <h3>{idx.createdAt}</h3>
                    </t.pickPostItem>;
                  }
                })}
            </t.pickPostWrap>

            <t.footer>
              <t.thinLine />
              <Pagination
                total={mywrite.length}
                limit={writelimit}
                page={writepage}
                setPage={setWritePage}
              />
            </t.footer>
          </t.myInformationItem>
        </t.mySelectInformation>
      </t.myInformationWrap>
    </div>
  );
}
