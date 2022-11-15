import React, { useState } from "react";
import "./MiddleBarStyle.css";
import { useNavigate } from "react-router-dom";
import styled, {css} from "styled-components";

export default function MiddleBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  // const bestList = useSelector((state) => state.bestList.data);
  
  return (
    <div className="middleBarGroup">

      <div className="middleBarBox" >
            <>
              <Container>
                <button onClick={() => setIsOpen(true)}>BEST 5</button>
              </Container>
              <SidebarBox isOpen={isOpen}>
                <div className="bestFiveList">
                  <div className="bestFiveList">
                    <div className="bestFiveImg">이미지</div>
                    <div className="bestFivetitle">제목</div>
                    <div className="bestFiveComment">내용</div>
                    <div className="bestFiveheart">하트</div>
                  </div>
                </div>
                  {/* {bestList &&
                    bestList.map((data) => {
                      <div className="topList">
                        <div className="List" key={data.heartnum}>
                          <div className="img">이미지</div>
                          <div className="title">{data.title}</div>
                          <div className="comment">{data.comment}</div>
                          <div className="heart">{data.heart}</div>
                        </div>
                      </div>;
                  })} */}
            <button onClick={() => setIsOpen(false)}>취소</button>
              </SidebarBox>
            </>
      </div>

      
      <div className="middleBarBox" onClick={() => navigate("/")}>
        밸런스 게임
      </div>
      <div className="middleBarBox">게시판</div>
    </div>
  );
};


const Container = styled.div`
  background: gray;
`;

const SidebarBox = styled.div`
  position: absolute;
  top: 800px;
  left:0;
  margin: 0 auto;
  transform: translateX(-100%);
  width: 100%;
  height: 250px;
  padding: 15px;
  border-radius: 10px;
  background: green;
  opacity: 0; // 투명도 조절하여 부드럽게 보이게하기
  transition: transform 500ms linear, opacity 500ms linear;
  pointer-events: none; // 사이드바 비활성화 일 때 클릭 안 됨



  ${props => props.isOpen && css`
    transform: translateX(0);
    opacity: 1;
    pointer-events: visible;
  `}
`;