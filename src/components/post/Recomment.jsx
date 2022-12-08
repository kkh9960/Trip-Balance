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

  const nickname = sessionStorage.getItem("nickName");
  const cmtnick = item.author;

  const dispatch = useDispatch();
  const UserDefaultImage = "/img/tb.jpg";
  const [Editmode, setEditmode] = useState(false);
  const [EditRecomment, setEditRecomment] = useState("");
  const [ReUserImage, setReUserImage] = useState("");
  const [Editprofile, setEditprofile] = useState(false);

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

  const goprofile = () => {
    navigator(`/memberpage/${item.authorId}`);
  };

  return (
    <St.RecommentContainer>
      <St.CommentBox>
        <St.CommentUserBox>
          <div>
            <St.CommentUserImage src={ReUserImage} />
          </div>
          <St.CommentUser onClick={profile}>{item.author}</St.CommentUser>
          {Editprofile
            ? // <St.UserMypagego onClick={goprofile}>프로필보기</St.UserMypagego>
              null
            : null}
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
