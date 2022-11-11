import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";
import { __bestFive } from "../../../../redux/modules/BsetFiveSlice";

export default function BestFive({ isOpen, onCancel }) {
  const dispatch = useDispatch();
  const bestList = useSelector((state) => state);

  const handleClickCancel = () => {
    onCancel();
  };
  
  // useEffect(() => {
  //   dispatch(__bestFive());
  // }, []);

  return (
    <ReactModal isOpen={isOpen}>
      <div className="container">
        {/* 맵돌려서 순서대로 나열 */}
        {/* {bestList &&
          bestList.map((data) => {
            <div className="topList">
              <div className="List" key={data.heartnum}>
                <div className="img">이미지</div>
                <div className="nickName">{data.nickName}</div>
                <div className="title">{data.title}</div>
                <div className="local">{data.local}</div>
                <div className="comment">{data.comment}</div>
                <div className="heart">{data.heart}</div>
              </div>
            </div>;
          })} */}
        <div className="topList">
          {/* 리스트 키값을 하트로 받고 하트값이 높은 순서대로 나열 */}
          <div className="List">
            <div className="img">이미지</div>
            <div className="nickName">아이디</div>
            <div className="title">제목</div>
            <div className="local">지역</div>
            <div className="comment">내용</div>
            <div className="heart">하트</div>
          </div>
        </div>
      </div>

      <div>
        <button onClick={handleClickCancel}>취소</button>
      </div>
    </ReactModal>
  );
}
