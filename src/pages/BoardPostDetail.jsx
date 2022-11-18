import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "./BoardPostDetail.css";
import { __postComment } from "../redux/modules/BoardSlice";
import { useParams } from "react-router-dom";
import { __getBoardDetail } from "../redux/modules/BoardSlice";
import { __deleteBoard } from "../redux/modules/BoardSlice";
import { useNavigate } from "react-router-dom";
import { __boardlike } from "../redux/modules/BoardSlice";
import { CloudHSM } from "aws-sdk";

const BoardPostDetail = () => {
  const navigate = useNavigate();
  const id = useParams();
  const [comment, setcomment] = useState("");
  const [cmtcount, setcmtcount] = useState(0);
  const [Editmode, setEditmode] = useState(false);
  const [Editcomment, setEditcomment] = useState("");
  const imagel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [imagelength, setimegelength] = useState(imagel);
  const dispatch = useDispatch();
  const userNickname = localStorage.getItem("nickName");

  const ImegaURL = [
    "https://react-image-seongwoo.s3.ap-northeast-2.amazonaws.com/%EC%BD%9C%EB%A1%9C%EC%84%B8%EC%9B%80.jpg",
    "https://react-image-seongwoo.s3.ap-northeast-2.amazonaws.com/%EB%93%80%EC%98%A41.jpg",
    "https://react-image-seongwoo.s3.ap-northeast-2.amazonaws.com/EDO2.jpg",
    "https://react-image-seongwoo.s3.ap-northeast-2.amazonaws.com/456123.jpg",
  ];
  const DefaultImega = "../img/default1.jpg";
  const heartsvg = "../img/heart.svg";
  const binheartsvg = "../img/binheart.svg";

  const post = useSelector((state) => state.BoardSlice.post);
  const isLoading = useSelector((state) => state.BoardSlice.isLoading);
  const nickname = localStorage.getItem("nickName");

  console.log(post);

  const [heart, setHeart] = useState(false);
  const [heartnum, setheartnum] = useState();

  console.log(post?.heartNum);
  console.log(post?.heartYn);

  useEffect(() => {
    dispatch(__getBoardDetail(id));
  }, []);

  useEffect(() => {
    setHeart(post?.heartYn);
    setheartnum(post?.heartNum);
  }, [post]);

  const CheckLength = (e) => {
    let text = e.target.value;
    let Cmtlength = text.length;
    let max_length = 200;

    if (Cmtlength > max_length) {
      alert(max_length + "자 이상 작성할수 없습니다.");
      text = text.substr(0, max_length);
      e.target.value = text;
      e.target.focus();
      setcmtcount(text);
    }

    setcmtcount(Cmtlength);
  };

  const CommentHandler = (e) => {
    setcomment(e.target.value);
  };

  console.log(comment);

  const WriteComment = () => {
    dispatch(__postComment({ id, content: comment }));
  };
  const modifyPost = () => {
    navigate(`/modify/${id.id}`);
  };
  const DeletePost = () => {
    dispatch(__deleteBoard(id));
  };
  const DeleteComment = () => {};

  const ModifyCancel = () => {
    setEditmode(!Editmode);
    //조회값 다시 적용
  };

  const ModifyComment = () => {
    setEditmode(!Editmode);
    setEditcomment("코멘트내용");
  };

  const ChangeEdit = (e) => {
    setEditcomment(e.target.value);
  };

  //트러블슈팅## 좋아요 갯수 실시간 변환
  //setState에 바로 연산자를 먹이면 예상결괏값으로 출력되지않는다. update 함수를 넣어줘야한다. 어흥
  const Boardpostlike = () => {
    setHeart(!heart);
    dispatch(__boardlike(id.id));
    console.log(heart);
    if (heart) {
      setheartnum((prevstate) => prevstate - 1);
    } else {
      setheartnum((prevstate) => prevstate + 1);
    }
  };

  const goProfile = () => {
    navigate(``);
  };

  console.log(heart);

  return (
    <BoardPostDetailContainer>
      <BoardPostDetailWrap>
        <Postnickname>{post?.author} 님의 여행이야기</Postnickname>
        <ImegeWrap>
          <ImegeSlide>
            <Swiper
              effect={"fade"}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, EffectFade, Pagination, Autoplay]}
              className="mySwiper"
              loop={true}
            >
              {!post?.mediaList.length === 0 ? (
                post?.mediaList.map((item, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <SliderImage src={item} />
                    </SwiperSlide>
                  );
                })
              ) : (
                <SwiperSlide>
                  <SliderImage src="../img/default2.jpg" />
                </SwiperSlide>
              )}
            </Swiper>
          </ImegeSlide>
          <ImegePreview>
            {post &&
              imagelength.map((el, idx) => (
                <PreviewItem
                  key={idx}
                  src={
                    post?.mediaList[idx] ? post?.mediaList[idx] : DefaultImega
                  }
                  alt=""
                />
              ))}
          </ImegePreview>
        </ImegeWrap>
        <BoardTitleWrap>
          <BoardTitle>{post?.title}</BoardTitle>
          <TitleButtonWarp>
            {userNickname == post?.author ? (
              <>
                <ModifyButton onClick={modifyPost}>수정</ModifyButton>
                <DeleteButton onClick={DeletePost}>삭제</DeleteButton>
              </>
            ) : (
              <UserProfile onClick={goProfile}>글쓴이 프로필</UserProfile>
            )}
          </TitleButtonWarp>
        </BoardTitleWrap>
        <UserNameBox>
          <BoardCateGory>
            <CateLocal>지역 : {post?.local}</CateLocal>
            <CateDetail>도시 : {post?.localdetail}</CateDetail>
          </BoardCateGory>
        </UserNameBox>
        <BoardBody>{post?.content}</BoardBody>
        <BoardLike onClick={Boardpostlike}>
          <BoardLikeImage src={post && heart ? heartsvg : binheartsvg} alt="" />
          <BoardLikeCount>{heartnum}</BoardLikeCount>
        </BoardLike>
        <BoardCommentWrap>
          <BoardCommentBox>
            <CommentWriteUser>{post?.nickName}</CommentWriteUser>
            <CommentTextarea
              name=""
              maxLength="200"
              id="comment"
              onKeyUp={CheckLength}
              onChange={CommentHandler}
            />
            <CommentButtonBox>
              <CommentCount>{cmtcount}</CommentCount>
              <CommentCount>/200</CommentCount>
              <CommentWriteButton onClick={WriteComment}>
                댓글 등록
              </CommentWriteButton>
            </CommentButtonBox>
          </BoardCommentBox>
          <CommentListBox>
            <CommentTitlebox>
              <div>
                <img src="" />
                <Commentuser>작성자 이름</Commentuser>
              </div>
              <CommentBtnWrap>
                {Editmode ? (
                  <CommentButton onClick={ModifyCancel}>취소</CommentButton>
                ) : (
                  <CommentButton onClick={ModifyComment}>수정</CommentButton>
                )}
                {Editmode ? (
                  <CommentButton onClick={ModifyComment}>완료</CommentButton>
                ) : (
                  <CommentButton onClick={DeleteComment}>삭제</CommentButton>
                )}
              </CommentBtnWrap>
            </CommentTitlebox>
            <Commentbody>
              {Editmode ? (
                <CommentModifyinput
                  type="text"
                  maxLength="200"
                  onChange={ChangeEdit}
                  value={Editcomment}
                />
              ) : (
                "댓글내용 입니다"
              )}
            </Commentbody>
          </CommentListBox>
        </BoardCommentWrap>
      </BoardPostDetailWrap>
    </BoardPostDetailContainer>
  );
};

export default BoardPostDetail;

const UserProfile = styled.div`
  background-color: #333;
  color: #fff;
  padding: 8px 20px;
  cursor: pointer;
`;

const CateLocal = styled.div``;
const CateDetail = styled.div``;

const Postnickname = styled.div`
  font-size: 36px;
  margin-bottom: 25px;
`;

const PostUser = styled.div`
  font-size: 18px;
`;

const UserNameBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CommentModifyinput = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 5px;
  height: 25px;
  outline: none;
  overflow: scroll;
`;

const CommentBtnWrap = styled.div``;

const Commentuser = styled.div``;

const CommentButton = styled.button`
  background-color: #333;
  color: white;
  padding: 5px 20px;
  margin-left: 20px;
`;

const CommentTitlebox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Commentbody = styled.div`
  margin-top: 10px;
`;

const CommentListBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const CommentCount = styled.span`
  font-size: 18px;
`;
const CommentWriteButton = styled.button`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  margin-left: 20px;
`;

const CommentButtonBox = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 10px;
  align-items: center;
`;

const CommentTextarea = styled.textarea`
  height: 100px;
  width: 100%;
  resize: none;
  border: none;
  font-size: 16px;
  border-bottom: 1px solid #b0b0b0;
  outline: none;
  font-size: 16px;
`;

const CommentWriteUser = styled.div`
  margin-bottom: 10px;
  height: 50px;
  font-size: 19px;
  line-height: 40px;
`;

const BoardCommentBox = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #b0b0b0;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 10px;
`;

const BoardCommentWrap = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const BoardLikeCount = styled.div`
  margin-left: 10px;
`;
const BoardLikeImage = styled.img``;

const BoardLike = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid #cdcdcd;
  align-items: center;
`;

const BoardBody = styled.div`
  margin-top: 40px;
  width: 100%;
  min-height: 400px;
`;

const BoardCateGory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const DeleteButton = styled.button`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  margin-left: 20px;
`;
const ModifyButton = styled.button`
  background-color: #333;
  color: white;
  padding: 10px 20px;
`;

const TitleButtonWarp = styled.div``;

const BoardTitle = styled.h2`
  font-size: 30px;
`;

const BoardTitleWrap = styled.div`
  display: flex;
  margin-top: 80px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
`;

const BoardPostDetailContainer = styled.div`
  max-width: 1440px;
  width: 95%;
  margin: 150px auto;
`;
const BoardPostDetailWrap = styled.div`
  width: 100%;
`;

const ImegeWrap = styled.div`
  width: 100%;
  display: flex;

  flex-direction: column;
`;

const ImegeSlide = styled.div`
  width: 100%;
  height: 600px;
`;

const SliderImage = styled.img`
  border-radius: 50px;
  width: 100%;
  height: 100%;
`;
const ImegePreview = styled.div`
  width: 100%;
  display: flex;
  height: 150px;
  margin-top: 20px;
  gap: 10px;
`;

const PreviewItem = styled.img`
  max-width: 135px;
  width: 100%;
  flex: 1;
  height: 100%;
  border-radius: 30px;
  object-fit: cover;
`;