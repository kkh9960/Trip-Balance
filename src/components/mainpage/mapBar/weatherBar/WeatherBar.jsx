import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as t from "./WeatherBarStyle";

export default function WeatherBar() {
  const weatherdata = useSelector((state) => state.MapSlice.data.weather);
  const city = useSelector((state) => state.MapSlice.data?.cnt);
  console.log(city);
  const cityName = city[0].location.split(" ")[0];
  const countyName = city[0].location.split(" ")[1];

  const POP = weatherdata[Object.keys(weatherdata)[0]]; // 강수확률
  const PTY = weatherdata[Object.keys(weatherdata)[2]]; // 강수형태
  const REH = weatherdata[Object.keys(weatherdata)[6]]; // 습도
  const TMP = weatherdata[Object.keys(weatherdata)[7]]; // 현재기온
  const WSD = weatherdata[Object.keys(weatherdata)[8]]; // 풍속
  const SKY = weatherdata[Object.keys(weatherdata)[9]]; // 하늘상태
  const PCP = weatherdata[Object.keys(weatherdata)[10]]; // 강수량

  const todayTime = () => {
    let now = new Date();
    let todayMonth = now.getMonth() + 1;
    let todayData = now.getData();
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    let dayOfWeek = week[now.getDay()];
    let hours = now.getHours();
    let minutes = now.getMinutes();

    return `${todayMonth}월${todayData}일${dayOfWeek}요일${hours}시${minutes}분`;
  };
  const now = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = week[now.getDay()];
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const [time, setTime] = useState(hours + ":" + minutes);

  return (
    <t.weather>
      <t.location>
        <t.cityName>{cityName}</t.cityName>
        <t.countyName>{countyName}</t.countyName>
      </t.location>

      <t.top>
        <t.iconBox>
          <t.weatherIcon
            src={`icon/${weatherdata[Object.keys(weatherdata)[2]]}.webp`} //${weatherdata[Object.keys(weatherdata)[2]]}
          />
        </t.iconBox>
        <t.temperatureBox>
          <t.temperature>{`${TMP}`}°C</t.temperature>
        </t.temperatureBox>
      </t.top>
      <t.bottom>
        <t.timer>
          {dayOfWeek}, {time}
        </t.timer>
        <t.details>
          <t.parameterRow>
            <t.parameterLabel>풍속</t.parameterLabel>
            <t.parameterValue>{WSD}m/s</t.parameterValue>
          </t.parameterRow>
          <t.parameterRow>
            <t.parameterLabel>습도</t.parameterLabel>
            <t.parameterValue>{REH}%</t.parameterValue>
          </t.parameterRow>
          <t.parameterRow>
            <t.parameterLabel>강수확률</t.parameterLabel>
            <t.parameterValue> {POP}%</t.parameterValue>
          </t.parameterRow>
          <t.parameterRow>
            <t.parameterLabel>강수량</t.parameterLabel>
            <t.parameterValue>
              {" "}
              {PCP === "강수없음" ? PCP : (PCP, "mm")}
            </t.parameterValue>
          </t.parameterRow>
        </t.details>
      </t.bottom>
    </t.weather>
  );
}

//- 하늘상태(SKY) 코드 : 맑음(1), 구름많음(3), 흐림(4)
//- 강수형태(PTY) 코드 : (초단기) 없음(0), 비(1), 비/눈(2), 눈(3), 빗방울(5), 빗방울눈날림(6), 눈날림(7)
//                      (단기) 없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4)
//- 강수량(PCP) 코드 :
