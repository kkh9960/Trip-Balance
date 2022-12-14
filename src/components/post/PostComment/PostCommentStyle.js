import styled from "styled-components";

export const CommentWrap = styled.div`
  width: 100%;
  max-width: 1280px;
  border: 1px solid #d9d9d9;
  margin-top: 40px;
  border-radius: 50px;
  @media screen and (max-width: 480px) {
    border: 1px solid #f2f2f2;
    background-color: #f2f2f2;
  }
`;
export const CommentBox = styled.div`
  padding: 30px;
  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`;
export const CommentUserBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const UserMypagego = styled.div`
  position: absolute;
  color: #fff;
  background-color: #333;
  padding: 10px 20px;
  top: 30px;
  left: 40px;
  cursor: pointer;
`;
export const CommentUserImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  object-fit: cover;
  @media screen and (max-width: 480px) {
    width: 20px;
    height: 20px;
    border-radius: 10px;
  }
`;

export const CommentUser = styled.div`
  margin-left: 10px;
  font-size: 18px;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
export const Commentbody = styled.div`
  width: 100%;
  margin: 20px;
`;
export const CommentModifyinput = styled.input`
  padding: 2px;
  font-size: 18px;
  width: 90%;
`;
export const Commentdesc = styled.div`
  font-size: 18px;
  word-wrap: break-word;
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
export const CommentButtonBox = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid #d9d9d9;
`;
export const CommentButton = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    color: #cdcdcd;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const BoardReCommentBox = styled.div`
  width: 100%;
  max-width: 1130px;
  margin: 30px 0 0 0px;
  height: auto;
  border: 1px solid #b0b0b0;
  border-radius: 50px;
  @media screen and (max-width: 480px) {
    margin: 20px 0 0 0px;
  }
`;

export const CommentWriteUserBox = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 0 20px;
`;
export const CommentWriteImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  object-fit: cover;
  @media screen and (max-width: 480px) {
    width: 20px;
    height: 20px;
    border-radius: 10px;
  }
`;
export const CommentWriteUser = styled.div`
  font-size: 18px;
  margin-left: 10px;
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
export const ReCommentTextarea = styled.textarea`
  margin: 20px 0 0 40px;
  height: 50px;
  width: 95%;
  resize: none;
  border: none;
  font-size: 16px;
  outline: none;
  font-size: 16px;
  margin-top: 10px;
  border-bottom: 1px solid #d9d9d9;
  @media screen and (max-width: 480px) {
    font-size: 15px;
    margin: 0 0 0 15px;
    width: 90%;
  }
`;
export const CommentBtnBox = styled.div`
  margin: 10px 0 10px 40px;
  width: 100%;
  display: flex;
`;

export const CommentBtn = styled.div`
  display: inline;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  margin-right: 20px;
  &:hover {
    opacity: 0.5;
  }
  @media screen and (max-width: 480px) {
    padding: 5px 10px;
    font-size: 14px;
  }
`;
