import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as t from "./WeatherBarStyle";

export default function WeatherBar() {
  const weatherdata = useSelector((state) => state.MapSlice.data.weather);
  const city = useSelector((state) => state.MapSlice.data?.cnt);
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
    let week = ["일", "월", "화", "수", "목", "금", "토"];
    let curWeek = week[now.getDay()];
    let hours = now.getHours();
    let minutes = now.getMinutes();

    setHours(hours);
    setMinutes(minutes);
    setDayOfWeek(curWeek);
  };

  const startTime = () => {
    setInterval(todayTime, 1000);
  };
  startTime();

  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");

  return (
    <t.weather>
      <t.location>
        <t.cityName>{cityName}</t.cityName>
        <t.mobileCityName>{cityName.slice(0, 2)}</t.mobileCityName>
        <t.countyName>{countyName}</t.countyName>
      </t.location>

      <t.top>
        <t.iconBox>
          <t.weatherIcon
            src={`icon/${weatherdata[Object.keys(weatherdata)[2]]}.gif`}
            alt="weatherIcon"
          />
        </t.iconBox>
        <t.temperatureBox>
          <t.timer>
            {dayOfWeek}
            <br />
            {hours < 10 ? "0" + hours : hours}:
            {minutes < 10 ? "0" + minutes : minutes}
          </t.timer>
          <t.temperature>
            <span>{`${TMP}`}</span>
            <p>°C</p>
          </t.temperature>
        </t.temperatureBox>
      </t.top>

      <t.bottom>
        <t.details>
          <t.parameterRow>
            <t.parameterLabel>강수확률</t.parameterLabel>
            <t.parameterValue>
              {" "}
              {POP}
              <p>%</p>
            </t.parameterValue>
          </t.parameterRow>
          <t.parameterRow>
            <t.parameterLabel>습도</t.parameterLabel>
            <t.parameterValue>
              {REH}
              <p>%</p>
            </t.parameterValue>
          </t.parameterRow>
          <t.parameterRow>
            <t.parameterLabel>풍속</t.parameterLabel>
            <t.parameterValue>
              {WSD}
              <p>m/s</p>
            </t.parameterValue>
          </t.parameterRow>
        </t.details>
      </t.bottom>
    </t.weather>
  );
}
