import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  __deleteComment,
  __modifyComment,
  __postReComment,
} from "../redux/modules/CommentSlice";
import * as St from "./PostCommentStyle";

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
  console.log("댓글이미지", item.profileImg);
  return (
    <St.CommentWrap>
      <St.CommentBox>
        <St.CommentUserBox>
          <div>
            <img src="" />
          </div>
          <div>유저아이디</div>
        </St.CommentUserBox>
        <div></div>
        <div></div>
      </St.CommentBox>
    </St.CommentWrap>
  );
};

export default PostComment;
