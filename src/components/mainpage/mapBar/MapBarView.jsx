import React from "react";
import MapBar from "../../../shared/api/map/MapBar";
import MobileMap from "../../../shared/api/map/mobileMap/MobileMap";
import DoughnutChart from "./doughnutChart/DoughnutChart";
import * as t from "./MapBarViewStyle";

export default function mapBarView() {
  const mapGuideButton1 = "../../img/mainImg/mainguidebutton1.webp";
  const mapGuideButton2 = "../../img/mainImg/mainguidebutton2.webp";

  return (
    <t.mapBarView>
      <t.mapBarViewText>지역별 여행객 정보</t.mapBarViewText>
      <t.mapGuide2>
        <t.mapGuideBtn src={mapGuideButton2} alt="guidebutton" />
        지도에서 원하는 지역의 마커를 누르고 추천 숙소/블로그를 아래에서
        확인하세요
      </t.mapGuide2>
      <t.mapWeatherChart>
        <MapBar />
        <DoughnutChart />
      </t.mapWeatherChart>
      <t.mapGuide1>
        <t.mapGuideBtn src={mapGuideButton1} alt="guidebutton" />
        지도에서 원하는 지역의 마커를 누르고 추천 숙소/블로그를 아래에서
        확인하세요
      </t.mapGuide1>
    </t.mapBarView>
  );
}
