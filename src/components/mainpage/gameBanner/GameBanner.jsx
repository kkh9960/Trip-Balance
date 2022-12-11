import React from "react";
import * as t from "./GameBannerStyle";
import { useNavigate } from "react-router-dom";

export default function GameBanner() {
  const navigate = useNavigate();
  return (
    <t.GameBanner onClick={() => navigate("/start")}>
      <t.GamestartBannerImg src="img/gameBannerImg.webp" />
    </t.GameBanner>
  );
}
