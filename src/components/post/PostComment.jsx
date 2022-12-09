import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
    setEditprofile(!Editprofile);
  };

  const CalcelComment = () => {
    setRecommentWrite(!RecommentWrite);
  };

  const goprofile = () => {
    navigator(`/memberpage/${item.authorId}`);
  };

  useEffect(() => {}, []);

  return (
    <>
      <St.CommentWrap>
        <St.CommentBox>
          <St.CommentUserBox>
            <div>
              <St.CommentUserImage src={UserImage} />
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
                value={Editcomment}
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
