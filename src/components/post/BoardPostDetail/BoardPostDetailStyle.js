import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding-top: 120px;
  @media screen and (max-width: 480px) {
    padding-top: 80px;
  }
`;

export const BoardContentsbox = styled.div`
  width: 100%;
  padding: 70px;
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;
  }
`;
export const BoardcontentWrap = styled.div`
  border: 3px solid #d9d9d9;
  width: 100%;
  height: auto;
  border-radius: 50px;
  margin-top: 70px;
  @media screen and (max-width: 480px) {
    margin-top: 30px;
    border: none;
    box-sizing: border-box;
  }
`;
export const CommentWriteUserBox = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 0 20px;
  gap: 10px;
`;

export const CommentWriteUser = styled.div`
  font-size: 18px;
  font-weight: bold;
  @media screen and (max-width: 480px) {
    font-weight: normal;
    margin-left: 10px;
  }
`;

export const CommentWriteImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

export const UserProfile = styled.div`
  background-color: #333;
  color: #fff;
  padding: 8px 20px;
  cursor: pointer;
`;

export const CateLocal = styled.div`
  font-size: 22px;
  font-weight: lighter;
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
export const CateDetail = styled.div`
  font-size: 22px;
  font-weight: lighter;
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Postnickname = styled.div`
  font-size: 36px;
  margin-bottom: 25px;
  font-weight: bold;
  @media screen and (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 15px;
    font-weight: bold;
  }
`;

export const UserNameBox = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    margin-top: 50px;
  }
`;
export const CommentCount = styled.span`
  font-size: 20px;
  color: #777777;
`;
export const CommentWriteButton = styled.button`
  border-left: 1px solid #b0b0b0;
  padding: 20px 60px;
  margin-left: 20px;
  color: #777777;
  font-size: 20px;
`;

export const CommentButtonBox = styled.div`
  width: 100%;
  border-top: 1px solid #b0b0b0;
  display: flex;
  justify-content: right;
  margin-top: 10px;
  align-items: center;
`;

export const CommentTextarea = styled.textarea`
  height: 80px;
  width: 95%;
  resize: none;
  border: none;
  font-size: 16px;
  outline: none;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 20px;
  @media screen and (max-width: 480px) {
    width: 95%;
    height: 150px;
    margin: 10px;
    border: none;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 10px;
    background-color: #f2f2f2;
  }
`;

export const CommentWritebuttonmobile = styled.button`
  max-width: 100%;
  border: 1px solid #b0b0b0;
  border-radius: 20px;
  height: 50px;
  color: #777;
  font-size: 20px;
  margin: 10px;
  box-sizing: border-box;
`;

export const BoardCommentBox = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #b0b0b0;
  border-radius: 5px;
  margin-bottom: 10px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const BoardCommentBoxmobile = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    text-align: center;
  }
`;

export const CommentUserboxmobile = styled.div`
  display: flex;
  margin-left: 10px;
`;

export const CommentImgmobile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

export const BoardCommentWrap = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 50px;
`;

export const BoardLikeCount = styled.div`
  margin-left: 10px;
`;
export const BoardLikeImage = styled.img``;

export const BoardLike = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid #cdcdcd;
  align-items: center;
  margin: 0 auto 50px;
`;

export const BoardBody = styled.div`
  font-family: "NotoSansKR";
  margin-top: 40px;
  width: 90%;
  min-height: 400px;
  font-weight: lighter;
  white-space: normal;
  word-wrap: break-word;
  font-size: 24px;
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const BoardCateGory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const DeleteButton = styled.div`
  font-size: 24px;
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const ModifyButton = styled.div`
  cursor: pointer;
  font-size: 24px;
  &:hover {
    opacity: 0.5;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const TitleButtonWarp = styled.div`
  display: flex;
  margin-right: 10rem;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const TitleButtonWarpmobile = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    display: flex;
  }
`;

export const BoardTitle = styled.h2`
  font-size: 36px;
  @media screen and (max-width: 480px) {
    font-size: 1.6rem;
    margin-right: 25px;
  }
`;

export const BoardTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const BoardPostDetailContainer = styled.div`
  max-width: 1440px;
  width: 95%;
  margin: 150px auto;
  @media screen and (max-width: 480px) {
    width: 98%;
    margin: 0px auto;
  }
`;
export const BoardPostDetailWrap = styled.div`
  width: 100%;
`;

export const ImegeWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    width: 98%;
  }
`;

export const ImegeSlide = styled.div`
  width: 100%;
  height: 600px;
  @media screen and (max-width: 480px) {
    width: 98%;
    height: 250px;
  }
`;

export const ImegePreview = styled.div`
  width: 100%;
  display: flex;
  height: 150px;
  margin-top: 20px;
  gap: 10px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const PreviewItem = styled.img`
  max-width: 135px;
  width: 100%;
  flex: 1;
  height: 100%;
  border-radius: 30px;
  object-fit: cover;
`;
