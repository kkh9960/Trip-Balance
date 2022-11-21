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
import { __getComment, __postComment } from "../redux/modules/CommentSlice";
import { useParams } from "react-router-dom";
import { __getBoardDetail } from "../redux/modules/BoardSlice";
import { __deleteBoard } from "../redux/modules/BoardSlice";
import { useNavigate } from "react-router-dom";
import { __boardlike } from "../redux/modules/BoardSlice";
import Loading from "../components/Loading/Loading";
import { __deleteComment } from "../redux/modules/CommentSlice";
import {
  __modifyComment,
  __postReComment,
  __modifyReComment,
  __deleteReComment,
} from "../redux/modules/CommentSlice";

const BoardPostDetail = () => {
  const navigate = useNavigate();
  const id = useParams();
  const [comment, setcomment] = useState("");
  const [cmtcount, setcmtcount] = useState(0);

  const imagel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [imagelength, setimegelength] = useState(imagel);
  const dispatch = useDispatch();
  const userNickname = localStorage.getItem("nickName");
  const [loading, setLoading] = useState(true);

  const ImegaURL = [
    "https://react-image-seongwoo.s3.ap-northeast-2.amazonaws.com/%EC%BD%9C%EB%A1%9C%EC%84%B8%EC%9B%80.jpg",
    "https://react-image-seongwoo.s3.ap-northeast-2.amazonaws.com/%EB%93%80%EC%98%A41.jpg",
    "https://react-image-seongwoo.s3.ap-northeast-2.amazonaws.com/EDO2.jpg",
    "https://react-image-seongwoo.s3.ap-northeast-2.amazonaws.com/456123.jpg",
  ];
  const DefaultImega = "../img/default1.jpg";
  const DefaultImega2 = "../img/default2.jpg";
  const heartsvg = "../img/heart.svg";
  const binheartsvg = "../img/binheart.svg";

  const post = useSelector((state) => state.BoardSlice.post);
  const isLoading = useSelector((state) => state.BoardSlice.isLoading);
  const comments = useSelector((state) => state.commentSlice.comments);
  const nickname = localStorage.getItem("nickName");

  console.log("응애 나 애기로딩", isLoading);

  console.log("나 댓글정보", comments);

  console.log(post);

  const [heart, setHeart] = useState(false);
  const [heartnum, setheartnum] = useState();

  console.log(post?.heartNum);
  console.log(post?.heartYn);

  useEffect(() => {
    dispatch(__getBoardDetail(id));
  }, []);
  useEffect(() => {
    dispatch(__getComment(id));
  }, []);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);
  console.log(Loading);

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

  //댓글쓰기
  const WriteComment = () => {
    dispatch(__postComment({ id, content: comment }));
    setcomment("");
  };
  const modifyPost = () => {
    navigate(`/modify/${id.id}`);
  };
  const DeletePost = () => {
    dispatch(__deleteBoard(id));
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

  const ImgHandlerTest = () => {};

  return loading ? (
    <Loading />
  ) : (
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
              {post?.mediaList[0] ? (
                post?.mediaList.map((item, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <SliderImage src={item} />
                    </SwiperSlide>
                  );
                })
              ) : (
                <SwiperSlide>
                  <SliderImage src={DefaultImega2} />
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
                  onClick={ImgHandlerTest}
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
            <CommentWriteUserBox>
              <CommentWriteImg src="../img/cmtdefault.svg" />
              <CommentWriteUser>{post?.nickName}</CommentWriteUser>
            </CommentWriteUserBox>
            <CommentTextarea
              name=""
              maxLength="200"
              id="comment"
              value={comment}
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
          {comments &&
            comments?.map((item, idx) => (
              <PostComment
                key={idx}
                item={item}
                idx={idx}
                id={id}
                post={post}
              />
            ))}
        </BoardCommentWrap>
      </BoardPostDetailWrap>
    </BoardPostDetailContainer>
  );
};
export default BoardPostDetail;

const PostComment = ({ idx, item, id, post }) => {
  const [Editcomment, setEditcomment] = useState("");
  const [Editmode, setEditmode] = useState(false);
  const [RecommentWrite, setRecommentWrite] = useState(false);
  const [recomment, setrecomment] = useState("");
  useEffect(() => {
    setEditcomment(item.content);
  }, []);

  const dispatch = useDispatch();

  const ModifyCancel = () => {
    setEditmode(!Editmode);
  };
  const ModifyComment = () => {
    setEditmode(!Editmode);
  };
  const DeleteComment = () => {
    console.log("저아이템이요", item.commentId);
    dispatch(__deleteComment(item.commentId));
  };

  const ReCommentHandler = (e) => {
    setrecomment(e.target.value);
  };

  const ModifyComplete = () => {
    dispatch(
      __modifyComment({
        id: item.commentId,
        postId: id.id,
        content: Editcomment,
      })
    );
    setEditmode(!Editmode);
  };

  const ReWriteHandler = () => {
    setRecommentWrite(!RecommentWrite);
    console.log(RecommentWrite);
  };

  const ChangeEdit = (e) => {
    setEditcomment(e.target.value);
  };

  const WriteReComment = () => {
    dispatch(
      __postReComment({
        commentId: item.commentId,
        content: recomment,
      })
    );
    setRecommentWrite(!RecommentWrite);
  };
  console.log("확인욤", item);
  return (
    <CommentWrap>
      <CommentListBox key={idx}>
        <CommentTitlebox>
          <CommentUserBox>
            <CommentImg src="../img/cmtdefault.svg" />
            <Commentuser>{item?.author}</Commentuser>
          </CommentUserBox>
          <CommentBtnWrap>
            {Editmode ? (
              <CommentButton onClick={ModifyCancel}>취소</CommentButton>
            ) : (
              <CommentButton onClick={ModifyComment}>수정</CommentButton>
            )}
            {Editmode ? (
              <CommentButton onClick={ModifyComplete}>완료</CommentButton>
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
            <Commentdesc onClick={ReWriteHandler}>{item?.content}</Commentdesc>
          )}
        </Commentbody>
      </CommentListBox>
      {RecommentWrite ? (
        <BoardReCommentBox>
          <CommentWriteUserBox>
            <CommentWriteImg src="../img/cmtdefault.svg" />
            <CommentWriteUser>{post?.nickName}</CommentWriteUser>
          </CommentWriteUserBox>
          <ReCommentTextarea
            name=""
            maxLength="50"
            value={recomment}
            onChange={ReCommentHandler}
          />
          <CommentButtonBox>
            <CommentWriteButton onClick={WriteReComment}>
              댓글 등록
            </CommentWriteButton>
          </CommentButtonBox>
        </BoardReCommentBox>
      ) : null}
      {item.reComments?.map((el, idx) => (
        <Recomment key={idx} item={el} cmtid={item.commentId} />
      ))}
    </CommentWrap>
  );
};

const Recomment = ({ item, cmtid }) => {
  const dispatch = useDispatch();

  const [Editmode, setEditmode] = useState(false);
  const [EditRecomment, setEditRecomment] = useState("");
  useEffect(() => {
    setEditRecomment(item.content);
  }, []);

  const ModifyCancel = () => {
    setEditmode(!Editmode);
  };
  const ModifyComment = () => {
    setEditmode(!Editmode);
  };

  const ModifyComplete = () => {
    dispatch(
      __modifyReComment({
        recommentId: item.recommentId,
        content: EditRecomment,
        commentId: cmtid,
      })
    );
    setEditmode(!Editmode);
  };
  console.log("너는왜", cmtid);

  const DeleteComment = () => {
    dispatch(__deleteReComment(item.recommentId));
  };

  const ChangeEdit = (e) => {
    setEditRecomment(e.target.value);
  };

  console.log("나리코아이템", item);
  return (
    <RecommentContainer key={item.recommentId}>
      <CommentTitlebox>
        <CommentUserBox>
          <CommentImg src="../img/cmtdefault.svg" />
          <Commentuser>{item?.author}</Commentuser>
        </CommentUserBox>
        <CommentBtnWrap>
          {Editmode ? (
            <CommentButton onClick={ModifyCancel}>취소</CommentButton>
          ) : (
            <CommentButton onClick={ModifyComment}>수정</CommentButton>
          )}
          {Editmode ? (
            <CommentButton onClick={ModifyComplete}>완료</CommentButton>
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
            value={EditRecomment}
          />
        ) : (
          <Commentdesc>{item?.content}</Commentdesc>
        )}
      </Commentbody>
    </RecommentContainer>
  );
};

const ReCommentTextarea = styled.textarea`
  height: 50px;
  width: 100%;
  resize: none;
  border: none;
  font-size: 16px;
  border-bottom: 1px solid #b0b0b0;
  outline: none;
  font-size: 16px;
  margin-top: 10px;
`;

const BoardReCommentBox = styled.div`
  width: auto;
  padding: 1rem 0 0 6rem;
`;

const RecommentContainer = styled.div`
  padding: 1rem 0 1rem 6rem;
`;

const CommentWrap = styled.div``;

const CommentWriteUserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CommentWriteUser = styled.div``;

const CommentWriteImg = styled.img``;

const CommentUserBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  text-align: center;
`;

const CommentImg = styled.img``;

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

const Commentuser = styled.div`
  width: 100%;
  max-width: 600px;
`;

const CommentButton = styled.button`
  background-color: #333;
  color: white;
  padding: 5px 20px;
  margin-left: 20px;
`;

const CommentTitlebox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Commentbody = styled.div`
  margin-top: 20px;
  padding-left: 20px;
`;

const Commentdesc = styled.div`
  cursor: pointer;
  display: inline;
`;

const CommentListBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-bottom: 1px dotted #cdcdcd;
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
  margin-top: 10px;
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
