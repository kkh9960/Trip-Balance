import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getWeatherData } from "../../../../redux/modules/WeatherSlice";
import "./WeatherBarStyle.css";

export default function WeatherBar() {
  const weatherdata = useSelector((state) => state.MapSlice.data.weather);

  const POP = weatherdata[Object.keys(weatherdata)[0]]; // 강수확률
  const PTY = weatherdata[Object.keys(weatherdata)[2]]; // 강수형태
  const REH = weatherdata[Object.keys(weatherdata)[6]]; // 습도
  const TMP = weatherdata[Object.keys(weatherdata)[7]]; // 현재기온
  const WSD = weatherdata[Object.keys(weatherdata)[8]]; // 풍속
  const SKY = weatherdata[Object.keys(weatherdata)[9]]; // 하늘상태
  const PCP = weatherdata[Object.keys(weatherdata)[10]]; // 강수량

  return (
    <div>
      <div className="weather">
        <div className="top">
          <div className="iconBox">
            <img
              alt="weather"
              className="weather-icon"
              src={`icon/${weatherdata[Object.keys(weatherdata)[2]]}.gif`} //${weatherdata[Object.keys(weatherdata)[2]]}
            />
          </div>
          <div>
            <p className="temperature">{`${TMP}`}°C</p>
          </div>
        </div>
        <div className="bottom">
          <div className="details">
            <div className="parameter-row">
              <span className="parameter-label">풍속</span>
              <span className="parameter-value">{WSD}m/s</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">습도</span>
              <span className="parameter-value">{REH}%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">강수확률</span>
              <span className="parameter-value"> {POP}%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">강수량</span>
              <span className="parameter-value">
                {" "}
                {PCP === "강수없음" ? PCP : (PCP, "mm")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//- 하늘상태(SKY) 코드 : 맑음(1), 구름많음(3), 흐림(4)
//- 강수형태(PTY) 코드 : (초단기) 없음(0), 비(1), 비/눈(2), 눈(3), 빗방울(5), 빗방울눈날림(6), 눈날림(7)
//                      (단기) 없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4)
//- 강수량(PCP) 코드 :
