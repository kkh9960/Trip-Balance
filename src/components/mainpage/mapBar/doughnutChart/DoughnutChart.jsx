import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import * as t from "./DoughnutChartStyle";
import WeatherBar from "../weatherBar/WeatherBar";
import { useEffect, useState } from "react";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
);

export default function DoughnutChart() {
  const peopleData = useSelector((state) => state.MapSlice?.data?.cnt);
  const [doughnutSize, setDoughnutSize] = useState(40);
  useEffect(() => {
    if (window.matchMedia("screen and (max-width: 480px)").matches) {
      return setDoughnutSize(20);
    } else {
      return setDoughnutSize(40);
    }
  }, [setDoughnutSize]);
  const chartData = {
    people: {
      labels: ["여성", "남성"],
      datasets: [
        {
          data: [peopleData[0]?.peopleCnt, peopleData[1]?.peopleCnt],
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
          ],
          borderColor: ["rgba(255, 99, 132, 0.7)", "rgba(54, 162, 235, 0.7)"],
          borderWidth: 3,
          cutout: `${doughnutSize}`,
        },
      ],
    },
    age: {
      labels: ["10~20대", "30~40대", "50대 이상"],
      datasets: [
        {
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
          cutout: `${doughnutSize}`,
        },
      ],
    },
    family: {
      labels: ["가족", "연인/친구/혼자", "가족(아이동반)"],
      datasets: [
        {
          data: [
            peopleData[8]?.peopleCnt,
            peopleData[9]?.peopleCnt,
            peopleData[10]?.peopleCnt,
          ],
          backgroundColor: [
            "rgba(75, 192, 192, 0.7)",
            "rgba(153, 102, 255, 0.7)",
            "#f72121",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "#f72121",
          ],
          borderWidth: 3,
          cutout: `${doughnutSize}`,
        },
      ],
      options: {},
    },
  };

  const barData1 = {
    labels: ["여성", "남성"],
    datasets: [
      {
        data: [peopleData[0]?.peopleCnt, peopleData[1]?.peopleCnt],
        backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(53, 162, 235, 1)"],
        indexAxis: "y",
      },
    ],
  };
  const barData2 = {
    labels: ["10~20대", "30~40대", "50대이상"],
    datasets: [
      {
        data: [
          peopleData[2]?.peopleCnt + peopleData[3]?.peopleCnt,
          peopleData[4]?.peopleCnt + peopleData[5]?.peopleCnt,
          peopleData[6]?.peopleCnt + peopleData[7]?.peopleCnt,
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        indexAxis: "y",
      },
    ],
  };
  const barData3 = {
    labels: ["가족", "연인/친구/혼자", "가족(아이동반)"],
    datasets: [
      {
        fill: false,
        data: [
          peopleData[8]?.peopleCnt,
          peopleData[9]?.peopleCnt,
          peopleData[10]?.peopleCnt,
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "#f72121",
        ],
        indexAxis: "y",
      },
    ],
  };
  return (
    <t.doughnutContainer>
      <t.chartViewbox>
        <WeatherBar />
        <t.chartBox>
          <t.chartView>
            <Doughnut data={chartData.people} />
          </t.chartView>
          <t.chartNametag>성별</t.chartNametag>
        </t.chartBox>
        <t.chartBox>
          <t.chartView>
            <Doughnut data={chartData.age} />
          </t.chartView>
          <t.chartNametag>연령</t.chartNametag>
        </t.chartBox>
        <t.chartBox>
          <t.chartView>
            <Doughnut data={chartData.family} />
          </t.chartView>
          <t.chartNametag>구성원</t.chartNametag>
        </t.chartBox>

        <t.barChartView>
          <Bar data={barData1} />
        </t.barChartView>
        <t.barChartView>
          <Bar data={barData2} />
        </t.barChartView>
        <t.barChartView>
          <Bar data={barData3} />
        </t.barChartView>
      </t.chartViewbox>
    </t.doughnutContainer>
  );
}
