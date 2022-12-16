import styled from "styled-components";
//common
export const thinLine = styled.div`
  width: 70%;
  height: 1px;
  margin: 0 auto 15px;
  background-color: black;
`;
export const textLine = styled.div`
  @media screen and (min-width: 481px) {
    width: 2px;
    height: 54.6px;
    margin: 25px;
    transform: (rotate: 90deg);
    background-color: #555;
  }

  @media screen and (max-width: 480px) {
    width: 2px;
    height: 54.6px;
    margin: 15px;
    transform: (rotate: 90deg);
    background-color: #555;
  }
`;
export const empty = styled.div`
  width: 100%;
  text-align: center;
  margin: auto;
  font-size: 28px;
  @media screen and (max-width: 480px) {
    width: 100%;
    text-align: center;
    margin: auto;
    font-size: 18px;
  }
`;

//pageview
export const myInformationWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 130px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    padding-top: 90px;
  }
`;
export const myTotalInfo = styled.div`
  height: 150px;
  background-color: #4cd8eb;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    background-color: #4cd8eb;
    width: 100%;
    display: flex;
    gap: 10px;
  }
`;
export const myTotalInfoText = styled.div`
  @media screen and (min-width: 481px) {
    font-size: 30px;
    letter-spacing: 1px;
    text-align: center;
    color: #555;
    br {
      display: none;
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #555;
    justify-content: space-evenly;
    gap: 10px;
  }
`;

//내가작성한글목록
export const myPostWrap = styled.div`
  @media screen and (min-width: 481px) {
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 6px;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500px;
  }
`;
export const postWrap = styled.div`
  @media screen and (min-width: 481px) {
    margin: 10px auto;
    width: 1000px;
    height: 560px;
    display: inline flex;
    flex-flow: row wrap;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 300px;
    display: flex;
    overflow: auto;
    white-space: nowrap;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
export const postItem = styled.div`
  position: relative;
  width: 180px;
  height: 240px;
  border: 0 solid black;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 10px;
  cursor: pointer;
`;
export const postImg = styled.img`
  width: 180px;
  height: 160px;
  margin: 0 0 6px;
  object-fit: cover;
  @media screen and (max-width: 480px) {
    border-radius: 10px;
    width: 180px;
    height: 150px;
    margin: 0 0 7px;
    object-fit: cover;
  }
`;
export const postTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  padding: 5px 5px;
  margin: 0 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const postTime = styled.div`
  position: absolute;
  bottom: 0px;
  font-size: 18px;
  color: #787878;
  margin-left: 5px;
  margin-bottom: 10px;
`;
//좋아요한 게시글
export const myPickPostWrap = styled.div`
  @media screen and (min-width: 481px) {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 6px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    float: left;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500px;
    margin: 10px 0 20px 0;
  }
`;

export const itemHeader = styled.div`
  @media screen and (min-width: 481px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
export const pickPostWrap = styled.div`
  @media screen and (min-width: 481px) {
    margin: 10px auto;
    width: 1000px;
    height: 560px;
    display: inline flex;
    flex-flow: row wrap;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 300px;
    display: flex;
    overflow: auto;
    white-space: nowrap;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
export const pickPostItem = styled.div`
  position: relative;
  width: 180px;
  height: 260px;
  border: 0 solid black;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 10px;
  cursor: pointer;
`;
export const pickPostImg = styled.img`
  width: 180px;
  height: 190px;
  margin: 0 0 6px;
  object-fit: cover;
  @media screen and (max-width: 480px) {
    border-radius: 10px;
    width: 180px;
    height: 150px;
    margin: 0 0 7px;
    object-fit: cover;
  }
`;

export const pickPostTitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media screen and (max-width: 480px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 15px;
  }
`;
export const pickPostNickname = styled.div`
  position: absolute;
  bottom: 0px;
  font-size: 18px;
  color: #787878;
  margin-left: 5px;
  margin-bottom: 10px;
`;

export const footer = styled.div`
  @media screen and (min-width: 481px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const mySelectInformation = styled.div`
  @media screen and (min-width: 481px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 30px 0 30px 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
