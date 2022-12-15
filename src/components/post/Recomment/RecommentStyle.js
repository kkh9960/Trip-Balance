import styled from "styled-components";

export const RecommentContainer = styled.div`
  width: 100%;
  max-width: 1130px;
  border: 1px solid #d9d9d9;
  margin: 40px 0 0 150px;
  border-radius: 50px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background-image: url(../img/board/cmtarrow.svg);
    width: 27px;
    height: 27px;
    top: 50%;
    left: -75px;
    @media screen and (max-width: 480px) {
      left: -35px;
      border: 1px solid #fafafa;
      background-color: #fafafa;
    }
  }
  @media screen and (max-width: 480px) {
    margin: 20px 0 0 50px;
    max-width: 85%;
    box-sizing: border-box;
  }
`;

export const CommentBox = styled.div`
  padding: 30px;
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
  @media screen and (max-width: 480px) {
    font-size: 15px;
    outline: none;
    border: none;
  }
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
