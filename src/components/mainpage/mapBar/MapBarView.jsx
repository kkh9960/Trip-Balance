import React from "react";
import MapBar from "../../../shared/api/map/MapBar";
import MobileMap from "../../../shared/api/map/mobileMap/MobileMap";
import DoughnutChart from "./doughnutChart/DoughnutChart";
import * as t from "./MapBarViewStyle";

export default function mapBarView() {
  return (
    <t.mapBarView>
      <t.mapBarViewText>여행지 정보</t.mapBarViewText>
      <MobileMap/>
      <t.mapWeatherChart>
        <MapBar />
        <DoughnutChart />
      </t.mapWeatherChart>
    </t.mapBarView>
  );
}
