/* global kakao */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { __getMapData, __postMapData } from '../../../redux/modules/MapSlice'
import { markerdata } from './MarkerData'
import './MapBarStyle.css'

const { kakao } = window;

export default function MapBar() {
  
  const dispatch = useDispatch();
  const mapdata = useSelector((state) => state.MapSlice);

  useEffect(() => {
    dispatch(__getMapData())
  },[])

  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.5642135, 127.0016985),
      level: 11,
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
      kakao.maps.event.addListener(marker, 'click', function () {
        let lat = `${el.lat}`
        let lng = `${el.lng}`
        dispatch(__postMapData({ lat, lng }))
      }
      );
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
    <div>
      <div id="map" className='map'/>
    </div>
  )
}