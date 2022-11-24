import React from "react";
import styled from "styled-components";
import { FcLike } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
const CardWrap = ({ element, search }) => {
  const navigator = useNavigate();
  const DatailPageMove = () => {
    navigator(`/detail/${element.postId}`);
  };

  return (
    <div>
      <CardBox key={element.postId} onClick={DatailPageMove}>
        <div>
          <ImgBox src={element.image[0]?.imgURL} />
          <TextBox>
            <Title>
              개수
              <FcLike />
            </Title>
            <Name>{element.title}</Name>
          </TextBox>
        </div>
      </CardBox>
    </div>
  );
};

export default CardWrap;

const ImgBox = styled.img`
  background-position: center;
  background-size: cover;
  align-items: center;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  width: 345px;
  height: 414px;
  border-radius: 10%;
`;
const CardBox = styled.div`
  font-family: "Gowun Dodum", sans-serif;
  display: flex;
  border: none;
  margin-bottom: 30px;
  margin: 20px;
  width: 344px;
  border-radius: 10%;
  transition: 1.1s;
  :hover {
    transform: scale(1.1);
  }
`;
const TextBox = styled.div`
  width: 300px;
  overflow: hidden;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  z-index: 2;
`;
const Title = styled.div`
  font-size: 20px;
  display: block;
  text-decoration: none;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-family: "KakaoBigRegular";
  cursor: pointer;
  line-height: 23px;
  word-break: normal;
  margin-left: 30px;
  z-index: 1;
`;
const Name = styled.div`
  font-family: "KakaoBigRegular";
  font-size: 20px;
  line-height: 20px;
  margin-left: -180px;
`;
