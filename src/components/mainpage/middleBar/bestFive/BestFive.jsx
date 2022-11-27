import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBestFive } from "../../../../redux/modules/BsetFiveSlice";

export default function BestFive() {
  const dispatch = useDispatch();
  const bestList = useSelector((state) => state.BestSlice.data);
  useEffect(() => {
    dispatch(__getBestFive());
  }, []);

  return (
    <div className="container">
      {bestList &&
        bestList.map((post) => {
          <div className="topList">
            <div className="List" key={post.id}>
              <div className="img">
                <img src={post.img} alt="베스트5이미지" />
              </div>
              <div className="title">{post.title}</div>
              <div className="comment">{post.comment}</div>
              <div className="heart">{post.heartnum}</div>
            </div>
          </div>;
        })}
    </div>
  );
}
