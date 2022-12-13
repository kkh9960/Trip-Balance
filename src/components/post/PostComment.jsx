import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  __deleteComment,
  __modifyComment,
  __postReComment,
} from "../../redux/modules/CommentSlice";
import * as St from "./PostCommentStyle";
import Recomment from "./Recomment.jsx";
import { useNavigate } from "react-router-dom";

const PostComment = ({ idx, item, id, post }) => {
  const navigator = useNavigate();

  const Profilebtn = useSelector(
    (state) => state.rootReducer.profilebtn.profile
  );
  const lender = useSelector((state) => state.rootReducer.profilebtn.lender);

  const nickname = sessionStorage.getItem("nickName");
  const cmtnick = item.author;

  const UserDefaultImage = "../img/tb.jpg";

  const [Editcomment, setEditcomment] = useState("");
  const [Editmode, setEditmode] = useState(false);
  const [RecommentWrite, setRecommentWrite] = useState(false);
  const [recomment, setrecomment] = useState("");
  const [UserImage, setUserImage] = useState("");
  const [Editprofile, setEditprofile] = useState(false);
  const [CommentImg, setCommentImg] = useState("");
  const [Editprofile2, setEditprofile2] = useState(false);
  const [time, settime] = useState();

  useEffect(() => {
    if (item.profileImg == null) {
      setUserImage(UserDefaultImage);
    } else {
      setUserImage(item.profileImg);
    }
  }, []);

  useEffect(() => {
    if (post.profileImg == null) {
      setCommentImg(UserDefaultImage);
    } else {
      setCommentImg(post.profileImg);
    }
  }, []);

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
  };

  const ChangeEdit = (e) => {
    setEditcomment(e.target.value);
  };

  const Reg = /^\s+|\s+$/g;

  const WriteReComment = () => {
    if (Reg.test(recomment) || recomment == "") {
      alert("댓글은 빈칸으로 시작하거나 빈칸으로 끝날수 없습니다.");
    } else {
      dispatch(
        __postReComment({
          commentId: item.commentId,
          content: recomment,
        })
      );
      setRecommentWrite(!RecommentWrite);
      setrecomment("");
    }
  };

  const profile = () => {
    setEditprofile2(!Editprofile2);
    dispatch({ type: "BTN_TOGGLE" });
    settime(new Date());
  };

  const CalcelComment = () => {
    setRecommentWrite(!RecommentWrite);
  };

  const goprofile = () => {
    navigator(`/memberpage/${item.authorId}`);
  };
  const INJECTIONRegex = /[%=*><]/g;
  const RegexTest = (e) => {
    if (INJECTIONRegex.test(e.target.value)) {
      alert("보안 : 특수문자(<,>,*,=,%)는 입력이 제한됩니다.");
      e.target.value = e.target.value.replace(/[%=*><]/g, "");
    }
  };

  useEffect(() => {
    //현재시간
    var now = new Date();
    //기준시간
    var writeDay = new Date(time);

    //현재 시간과 기준시간의 차이를 getTime을 통해 구한다
    var difference = now.getTime() - writeDay.getTime();
    //초로 바꿔준다
    // difference = Math.trunc(difference / 1000);

    // 초
    const seconds = 1;
    // 분
    const minute = seconds * 60;
    // 시
    const hour = minute * 60;
    // 일
    const day = hour * 24;
    // 달
    const mon = day * 30;
    // 년
    const year = mon * 12;

    let ResultTime = "";

    if (difference < seconds) {
      ResultTime = "바로"; // 1초보다 작으면 바로 전
    } else if (difference < minute) {
      ResultTime = Math.trunc(difference / seconds) + "초 ";
      //분보다 작으면 몇초전인지
    } else if (difference < hour) {
      ResultTime = Math.trunc(difference / minute) + "분 ";
      //시보다 작으면 몇분전인지
    } else if (difference < day) {
      ResultTime = Math.trunc(difference / hour) + "시 ";
      //일보다 작으면 몇시간전인지
    } else if (difference < mon) {
      ResultTime = Math.trunc(difference / day) + "일 ";
      //달보다 작으면 몇일 전인지
    } else if (difference < year) {
      ResultTime = Math.trunc(difference / mon) + "달 ";
      //년보다 작으면 몇달전인지
    } else {
      ResultTime = Math.trunc(difference / year) + "년 ";
    }

    if (difference > 15) {
      setEditprofile2(false);
    }
  }, [lender]);

  return (
    <>
      <St.CommentWrap>
        <St.CommentBox>
          <St.CommentUserBox>
            <div>
              <St.CommentUserImage src={UserImage} />
            </div>
            <St.CommentUser onClick={profile}>{item.author}</St.CommentUser>
            {Editprofile2 ? (
              <St.UserMypagego onClick={goprofile}>프로필보기</St.UserMypagego>
            ) : null}
          </St.CommentUserBox>
          <St.Commentbody>
            {Editmode ? (
              <St.CommentModifyinput
                type="text"
                maxLength="200"
                onChange={ChangeEdit}
                value={Editcomment}
                onKeyUp={RegexTest}
              />
            ) : (
              <St.Commentdesc>{item?.content}</St.Commentdesc>
            )}
          </St.Commentbody>
          <St.CommentButtonBox>
            <St.CommentButton onClick={ReWriteHandler}>댓글</St.CommentButton>
            {cmtnick == nickname && (
              <>
                {Editmode ? (
                  <St.CommentButton onClick={ModifyCancel}>
                    취소
                  </St.CommentButton>
                ) : (
                  <St.CommentButton onClick={ModifyComment}>
                    수정
                  </St.CommentButton>
                )}
                {Editmode ? (
                  <St.CommentButton onClick={ModifyComplete}>
                    완료
                  </St.CommentButton>
                ) : (
                  <St.CommentButton onClick={DeleteComment}>
                    삭제
                  </St.CommentButton>
                )}
              </>
            )}
          </St.CommentButtonBox>
        </St.CommentBox>
      </St.CommentWrap>
      {RecommentWrite ? (
        <St.BoardReCommentBox>
          <St.CommentWriteUserBox>
            <St.CommentWriteImg src={CommentImg} />
            <St.CommentWriteUser>{post?.nickName}</St.CommentWriteUser>
          </St.CommentWriteUserBox>
          <St.ReCommentTextarea
            name=""
            maxLength="50"
            value={recomment}
            onChange={ReCommentHandler}
            onKeyUp={RegexTest}
          />
          <St.CommentBtnBox>
            <St.CommentBtn onClick={CalcelComment}>취소</St.CommentBtn>
            <St.CommentBtn onClick={WriteReComment}>등록</St.CommentBtn>
          </St.CommentBtnBox>
        </St.BoardReCommentBox>
      ) : null}
      {item.reComments?.map((el, idx) => (
        <Recomment key={idx} item={el} cmtid={item.commentId} />
      ))}
    </>
  );
};

export default PostComment;
