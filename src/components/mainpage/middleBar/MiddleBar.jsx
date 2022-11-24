import React, { useEffect, useState } from "react";
import "./MiddleBarStyle.css";
import { useNavigate } from "react-router-dom";
import styled, {css} from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getBestFive } from "../../../redux/modules/BsetFiveSlice";

export default function MiddleBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [bestIsOpen, setBestIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const bestFiveData = useSelector((state) => state.BestSlice.data)

  console.log(bestFiveData)
  useEffect(() => {
    dispatch(__getBestFive())
  },[])
  // const bestList = useSelector((state) => state.bestList.data);
  
  return (
    <div className="middleBarGroup">

      <div className="middleBarBox" >
            <>
              <Container>
                <button onClick={() => setBestIsOpen(true)}>BEST 5</button>
              </Container>
              <BestFiveSidebarBox isOpen={bestIsOpen}>
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
            <button onClick={() => setBestIsOpen(false)}>취소</button>
              </BestFiveSidebarBox>
            </>
      </div>

      
      <div className="middleBarBox" onClick={() => navigate("/")}>
        밸런스 게임
      </div>
      <div className="middleBarBox">
                    <>
              <Container>
                <button onClick={() => setIsOpen(true)}>추천여행지</button>
              </Container>
              <SidebarBox isOpen={isOpen}>
                <div>
                  <div>
                    내용
                  </div>
                </div>

            <button onClick={() => setIsOpen(false)}>취소</button>
          </SidebarBox>
          </>
      </div>
    </div>
  );
};


const Container = styled.div`
  margin: 0;
  background: gray;
  overflow: hidden; // translate(-100%)로 올라간 스크롤 없애줌
`;


const BestFiveSidebarBox = styled.div`
  position: absolute;
  top: 800px;
  left:0;
  margin: 0 auto;
  transform: translateX(-100%);
  width: 100%;
  height: 250px;
  padding: 15px;
  border-radius: 10px;
  background: #8ef38e;
  opacity: -1;
  transition: transform 200ms linear, opacity 200ms linear;
  pointer-events: none;

  ${props => props.isOpen && css`
    transform: translateX(0);
    opacity: 1;
    pointer-events: visible;
  `}
`;

const SidebarBox = styled.div`
z-index: 10;
  position: absolute;
  top: 800px;
  margin: 0 auto;
  transform: translateY(-100%);
  width: 1400px;
  height: 500px;
  padding: 15px;
  border-radius: 10px;
  background: #8ef38e;
  opacity: 0; // 투명도 조절하여 부드럽게 보이게하기
  transition: transform 200ms linear, opacity 200ms linear;
  pointer-events: none; // 사이드바 비활성화 일 때 클릭 안 됨

  ${props => props.isOpen && css`
    transform: translateX(0);
    opacity: 1;
    pointer-events: visible;
  `}
`;