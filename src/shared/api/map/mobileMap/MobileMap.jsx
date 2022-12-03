import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getMapData, __postMapData } from "../../../../redux/modules/MapSlice";
import { markerdata } from "../MarkerData";
import * as t from "./MobileMapStyle";

export default function MobileMap() {
  const dispatch = useDispatch();


  return(
    <t.mobileMapSection>
      <t.mobileMapImg>11</t.mobileMapImg>
      <t.mobileMapBtnGroup>
        <t.locationButton>수도권</t.locationButton>
        <t.locationButton>강원도</t.locationButton>
        <t.locationButton>충청도</t.locationButton>
        <t.locationButton>전라도</t.locationButton>
        <t.locationButton>경상도</t.locationButton>
        <t.locationButton>제주도</t.locationButton>
      </t.mobileMapBtnGroup>
    </t.mobileMapSection>
  )
}
