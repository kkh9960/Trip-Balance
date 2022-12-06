import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  __getMapData,
  __postMapData,
} from "../../../../redux/modules/MapSlice";
import { markerdata } from "../MarkerData";
import * as t from "./MobileMapStyle";

export default function MobileMap() {
  const dispatch = useDispatch();
  const [mapimg, setMapImg] = useState(0);
  const marker = [
    {
      lat: `${markerdata[0].lat}`,
      lng: `${markerdata[0].lng}`,
      location: `${markerdata[0].title}`,
    },
    {
      lat: `${markerdata[1].lat}`,
      lng: `${markerdata[1].lng}`,
      location: `${markerdata[1].title}`,
    },
    {
      lat: `${markerdata[2].lat}`,
      lng: `${markerdata[2].lng}`,
      location: `${markerdata[2].title}`,
    },
    {
      lat: `${markerdata[3].lat}`,
      lng: `${markerdata[3].lng}`,
      location: `${markerdata[3].title}`,
    },
    {
      lat: `${markerdata[4].lat}`,
      lng: `${markerdata[4].lng}`,
      location: `${markerdata[4].title}`,
    },
    {
      lat: `${markerdata[5].lat}`,
      lng: `${markerdata[5].lng}`,
      location: `${markerdata[5].title}`,
    },
  ];

  return (
    <t.mobileMapSection>
      <t.mobileMapImg src={`map/mapimg${mapimg}.webp`} />
      <t.mobileMapBtnGroup>
        <t.locationButton
          onClick={() => dispatch(__postMapData(marker[0]), setMapImg(0))}
        >
          수도권
        </t.locationButton>
        <t.locationButton
          onClick={() =>
            dispatch(__postMapData(marker[1], setMapImg(0)), setMapImg(1))
          }
        >
          강원도
        </t.locationButton>
        <t.locationButton
          onClick={() => dispatch(__postMapData(marker[2]), setMapImg(2))}
        >
          충청도
        </t.locationButton>
        <t.locationButton
          onClick={() => dispatch(__postMapData(marker[3]), setMapImg(3))}
        >
          전라도
        </t.locationButton>
        <t.locationButton
          onClick={() => dispatch(__postMapData(marker[4]), setMapImg(4))}
        >
          경상도
        </t.locationButton>
        <t.locationButton
          onClick={() => dispatch(__postMapData(marker[5]), setMapImg(5))}
        >
          제주도
        </t.locationButton>
      </t.mobileMapBtnGroup>
    </t.mobileMapSection>
  );
}
