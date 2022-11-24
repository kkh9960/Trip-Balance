/* global kakao */
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import * as t from "./DoughnutChartStyle";
import WeatherBar from "./weatherBar/WeatherBar";
import instance from "../../../lib/instance";

ChartJS.register(ArcElement, Tooltip);

export default function DoughnutChart() {
  const peopleData = useSelector((state) => state.MapSlice.data?.cnt);

  const chartData = {
    people: {
      labels: ["여성", "남성"],
      datasets: [
        {
          label: "# of Votes",
          data: [peopleData[0]?.peopleCnt, peopleData[1]?.peopleCnt],
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
          ],
          borderColor: ["rgba(255, 99, 132, 0.7)", "rgba(54, 162, 235, 0.7)"],
          borderWidth: 3,
        },
      ],
    },
    age: {
      labels: ["10~20대", "30~40대", "50대 이상"],
      datasets: [
        {
          label: "# of Votes",
          data: [
            peopleData[2]?.peopleCnt + peopleData[3]?.peopleCnt,
            peopleData[4]?.peopleCnt + peopleData[5]?.peopleCnt,
            peopleData[6]?.peopleCnt + peopleData[7]?.peopleCnt,
          ],
          backgroundColor: [
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
          ],
          borderColor: [
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
          ],
          borderWidth: 3,
        },
      ],
    },
    family: {
      labels: ["가족", "연인/친구/혼자", "가족(아이동반)"],
      datasets: [
        {
          label: "# of Votes",
          data: [
            peopleData[8]?.peopleCnt,
            peopleData[9]?.peopleCnt,
            peopleData[10]?.peopleCnt,
          ],
          backgroundColor: [
            "rgba(255, 206, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(153, 102, 255, 0.7)",
            "rgba(255, 159, 64, 0.7)",
          ],
          borderColor: [
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 3,
        },
      ],
    },
  };

  return (
    <t.chartViewbox>
      <WeatherBar />
      <t.chartView>
        <Doughnut data={chartData.people} />
        성별
      </t.chartView>
      <t.chartView>
        <Doughnut data={chartData.age} />
        연령별
      </t.chartView>
      <t.chartView>
        <Doughnut data={chartData.family} />
        구성원
      </t.chartView>
      <div>dkdk</div>
      <div>dkdk</div>
      <div>dkdk</div>
    </t.chartViewbox>
  );
}
