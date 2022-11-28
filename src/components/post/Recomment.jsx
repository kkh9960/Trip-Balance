import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  __deleteReComment,
  __modifyReComment,
} from "../../redux/modules/CommentSlice";
import * as St from "./RecommentStyle";
import { useNavigate } from "react-router-dom";

const Recomment = ({ item, cmtid }) => {
  const navigator = useNavigate();

  const dispatch = useDispatch();
  const UserDefaultImage = "../img/cmtdefault.svg";
  const [Editcomment, setEditcomment] = useState("");
  const [Editmode, setEditmode] = useState(false);
  const [EditRecomment, setEditRecomment] = useState("");
  const [ReUserImage, setReUserImage] = useState("");
  const [Editprofile, setEditprofile] = useState(false);

  useEffect(() => {
    setEditRecomment(item?.content);
  }, [item]);

  useEffect(() => {
    if (item.profileImg == "") {
      setReUserImage(UserDefaultImage);
      console.log("나야나");
    } else {
      setReUserImage(item.profileImg);
      console.log("나야나1=22");
    }
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

  const DeleteComment = () => {
    dispatch(__deleteReComment(item.recommentId));
  };

  const ChangeEdit = (e) => {
    setEditRecomment(e.target.value);
  };
  const profile = () => {
    setEditprofile(!Editprofile);
  };

  console.log("대댓데이타", item);

  const goprofile = () => {
    navigator(`/tb/mypage/${item.authorId}`);
  };

  return (
    <St.RecommentContainer>
      <St.CommentBox>
        <St.CommentUserBox>
          <div>
            <St.CommentUserImage src={ReUserImage} />
          </div>
          <St.CommentUser onClick={profile}>{item.author}</St.CommentUser>
          {Editprofile ? (
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
            />
          ) : (
            <St.Commentdesc>{item?.content}</St.Commentdesc>
          )}
        </St.Commentbody>
        <St.CommentButtonBox>
          {Editmode ? (
            <St.CommentButton onClick={ModifyCancel}>취소</St.CommentButton>
          ) : (
            <St.CommentButton onClick={ModifyComment}>수정</St.CommentButton>
          )}
          {Editmode ? (
            <St.CommentButton onClick={ModifyComplete}>완료</St.CommentButton>
          ) : (
            <St.CommentButton onClick={DeleteComment}>삭제</St.CommentButton>
          )}
        </St.CommentButtonBox>
      </St.CommentBox>
    </St.RecommentContainer>
  );
};

export default Recomment;
