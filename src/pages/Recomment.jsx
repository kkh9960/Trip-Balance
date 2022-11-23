import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  __deleteReComment,
  __modifyReComment,
} from "../redux/modules/CommentSlice";
import "./Recomment.js";

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

  const DeleteComment = () => {
    dispatch(__deleteReComment(item.recommentId));
  };

  const ChangeEdit = (e) => {
    setEditRecomment(e.target.value);
  };

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

export default Recomment;
