import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __bestFive } from "../../../../redux/modules/BsetFiveSlice";

export default function BestFive() {
  const dispatch = useDispatch();
  const bestList = useSelector((state) => state.BestSlice.data);
  console.log(bestList)
  useEffect(() => {
    dispatch(__bestFive());
  }, []);

  return (
    
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
    </div>
    
  );
}
