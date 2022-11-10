import React, { useState } from "react";
import "./MiddleBarStyle.css";
import { useNavigate } from "react-router-dom";
import BestFive from "./bestFive/BestFive";

const MiddleBar = () => {
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  
  const handleCancel = () => setOpen(false);
  // false값으로 바뀌지가 않음
  // 데이터 값이 안넘어감.

  return (
    <div className="middleBarGroup">

      <div className="middleBarBox" onClick={handleClick}>
        BEST 5
        <BestFive isOpen={isOpen} onCancel={handleCancel} />
      </div>

      <div className="middleBarBox" onClick={() => navigate("/")}>
        밸런스 게임
      </div>
      <div className="middleBarBox">게시판</div>
    </div>
  );
};

export default MiddleBar;
