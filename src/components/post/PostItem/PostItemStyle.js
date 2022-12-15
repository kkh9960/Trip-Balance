import styled from "styled-components";

export const Viewbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Viewmore = styled.button`
  margin-bottom: 150px;
  background-color: #49b2d3;
  color: #fff;
  font-size: 26px;
  padding: 10px 50px;
  transition: all 0.4s;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const LikeImg = styled.img`
  @media screen and (max-width: 480px) {
    width: 20px;
    height: 20px;
    border-radius: 10px;
  }
`;
export const LikeCount = styled.div`
  margin-right: 10px;
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const UserImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 15px;
  @media screen and (max-width: 480px) {
    width: 20px;
    height: 20px;
    border-radius: 10px;
  }
`;

export const Likeinfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
export const Userinfo = styled.div`
  display: flex;
  align-items: center;
`;

export const CardUserName = styled.div`
  margin-left: 10px;
  @media screen and (max-width: 480px) {
    margin-left: 5px;
    font-size: 14px;
  }
`;
export const Cardbody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 10px;
  @media screen and (max-width: 480px) {
    margin-top: 5px;
    margin-left: 5px;
  }
`;
export const CardTitle = styled.div`
  margin: 20px 20px 5px 20px;
  font-size: 18px;
  white-space: normal;
  overflow: hidden;
  width: 300px;
  text-overflow: ellipsis;
  @media screen and (max-width: 480px) {
    margin: 5px;
    font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
    width: 140px;
    text-overflow: ellipsis;
  }
`;

export const CardTextbox = styled.div`
  width: 100%;
  height: 135px;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 60px;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
export const CardImgbox = styled.div`
  width: 100%;
  height: 365px;
  border-radius: 20px;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 140px;
  }
`;
export const CardWrap = styled.div`
  width: 344px;
  height: 500px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    transform: translate(0, -5px);
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 480px) {
    width: 95%;
    height: 200px;
  }
`;

export const PostCardList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 0 auto;
    width: 95%;
  }
`;

export const PostListWrap = styled.div`
  margin: 60px auto 50px;
  width: 100%;
  height: auto;
  @media screen and (max-width: 480px) {
    margin: 10px auto 30px;
  }
`;

export const PostListTitle = styled.div`
  text-align: center;
  font-size: 36px;
  margin-bottom: 70px;
  @media screen and (max-width: 480px) {
    margin-bottom: 30px;
    font-size: 30px;
  }
`;

export const PostPageContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  height: auto;
  margin: 0 auto;
  margin-top: 100px;
  @media screen and (max-width: 480px) {
    margin-top: 50px;
    box-sizing: border-box;
  }
`;
export const TodayTitle = styled.div`
  font-size: 30px;
  text-align: center;
`;
export const SearchBox = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;
export const SearchBoxForm = styled.form`
  display: flex;
  align-items: center;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
`;
export const CategorySearch = styled.select`
  width: 344px;
  height: 60px;
  border-radius: 30px;
  font-size: 20px;
  text-align: center;
  margin-right: 20px;
  @media screen and (max-width: 480px) {
    margin-right: 0px;
    width: 90%;
    height: 50px;
  }
`;
export const TitleSearchbox = styled.div`
  width: 690px;
  height: 60px;
  //margin-left: 20px;
  border-radius: 30px;
  position: relative;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 50px;
  }
`;
export const TitleSearch = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  border-width: 0;
  font-size: 16px;
  border-radius: 30px;
  outline: none;
  border: 1px solid #d9d9d9;
  @media screen and (max-width: 480px) {
    width: 90%;
    box-sizing: border-box;
    margin-left: 5%;
  }
`;
export const SearchIcon = styled.button`
  position: absolute;
  top: 5px;
  right: -10px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-image: url("img/board/search.svg");
  @media screen and (max-width: 480px) {
    background-image: url("img/board/mobilesearch.svg");
    width: 30px;
    height: 30px;
    right: 40px;
    top: 10px;
  }
`;

export const PostgoWrite = styled.button`
  width: 344px;
  height: 60px;
  text-align: center;
  border-radius: 30px;
  font-size: 22px;
  background-color: #ffa314;
  color: #fff;
  margin-left: 20px;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
    height: 50px;
    margin-left: 0px;
  }
`;

export const PostLikeBestbox = styled.div`
  height: 600px;
  @media screen and (max-width: 480px) {
    height: 420px;
  }
`;
