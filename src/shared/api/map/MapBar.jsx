/* global kakao */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getMapData, __postMapData } from "../../../redux/modules/MapSlice";
import { markerdata } from "./MarkerData";
import * as t from "./MapBarStyle";

const { kakao } = window;

export default function MapBar() {
  const dispatch = useDispatch();

  useEffect(() => {
    mapscript();
    dispatch(__getMapData());
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(36.470412, 127.690716),
      level: 13,
    };

    const map = new kakao.maps.Map(container, options);

    markerdata.forEach((el) => {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(el.lat, el.lng),
      });
      let infowindow = new kakao.maps.InfoWindow({
        content: el.title,
      });
      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );
      kakao.maps.event.addListener(marker, "click", function () {
        let lat = `${el.lat}`;
        let lng = `${el.lng}`;
        let location = `${el.title}`;
        dispatch(__postMapData({ lat, lng, location }));
      });
    });

    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }
  };

  return (
    <t.mapSection>
      <t.mapContainer id="map" />
    </t.mapSection>
  );
}
