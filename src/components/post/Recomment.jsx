import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  __deleteReComment,
  __modifyReComment,
} from "../../redux/modules/CommentSlice";
import * as St from "./RecommentStyle";
import { useNavigate } from "react-router-dom";

const Recomment = ({ item, cmtid }) => {
  const navigator = useNavigate();

  const Profilebtn = useSelector(
    (state) => state.rootReducer.profilebtn.profile
  );
  const lender = useSelector((state) => state.rootReducer.profilebtn.lender);

  const nickname = sessionStorage.getItem("nickName");
  const cmtnick = item.author;

  const dispatch = useDispatch();
  const UserDefaultImage = "/img/tb.jpg";
  const [Editmode, setEditmode] = useState(false);
  const [EditRecomment, setEditRecomment] = useState("");
  const [ReUserImage, setReUserImage] = useState("");
  const [Editprofile, setEditprofile] = useState(Profilebtn);
  const [Editprofile2, setEditprofile2] = useState(false);

  const [time, settime] = useState();

  useEffect(() => {
    setEditRecomment(item?.content);
  }, [item]);

  useEffect(() => {
    if (item.profileImg == null) {
      setReUserImage(UserDefaultImage);
    } else {
      setReUserImage(item.profileImg);
    }
  }, []);

  const ModifyCancel = () => {
    setEditmode(!Editmode);
  };
  const ModifyComment = () => {
    setEditmode(!Editmode);
  };

  const test = () => {};

  useEffect(() => {}, [lender]);

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

  const DeleteComment = () => {
    dispatch(__deleteReComment(item.recommentId));
  };

  const ChangeEdit = (e) => {
    setEditRecomment(e.target.value);
  };

  const goprofile = () => {
    navigator(`/memberpage/${item.authorId}`);
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

  const INJECTIONRegex = /[%=*><]/g;
  const RegexTest = (e) => {
    if (INJECTIONRegex.test(e.target.value)) {
      alert("보안 : 특수문자(<,>,*,=,%)는 입력이 제한됩니다.");
      e.target.value = e.target.value.replace(/[%=*><]/g, "");
    }
  };

  // const profile = () => {
  //   setEditprofile2(!Editprofile2);
  //   console.log(Editprofile2, "어흥");
  //   dispatch({ type: "BTN_TOGGLE" });
  // };

  // useEffect(() => {
  //   if (Editprofile && Editprofile2) {
  //     setEdittest(true);
  //     console.log("둘다참");
  //   } else {
  //     setEdittest(false);
  //     console.log("둘다안참");
  //   }
  // }, [Editprofile2]);

  const profile = () => {
    setEditprofile2(!Editprofile2);
    dispatch({ type: "BTN_TOGGLE" });
    settime(new Date());
  };

  return (
    <St.RecommentContainer>
      <St.CommentBox>
        <St.CommentUserBox>
          <div>
            <St.CommentUserImage src={ReUserImage} />
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
              value={EditRecomment}
              onKeyUp={RegexTest}
            />
          ) : (
            <St.Commentdesc onClick={test}>{item?.content}</St.Commentdesc>
          )}
        </St.Commentbody>
        <St.CommentButtonBox>
          {cmtnick == nickname && (
            <>
              {Editmode ? (
                <St.CommentButton onClick={ModifyCancel}>취소</St.CommentButton>
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
    </St.RecommentContainer>
  );
};

export default Recomment;
