import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import * as t from "./InformationChartStyle";
import instance from "../../../lib/instance";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip);

export default function InformationChart() {
  const [totalData, setTotalData] = useState();
  const [mpData, setMyPickData] = useState();
  useEffect(() => {
    async function fetchData() {
      const result = await instance.get("/tb/mypage/totaldb");
      setTotalData(result);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const result = await instance.get("/tb/mypage/tripdb");
      console.log(result);
      if (result.data.data === undefined) {
        setMyPickData(result.data.data.push("지역: 빈값, 값: 0"));
      } else {
        setMyPickData(result.data);
      }
    }
    fetchData();
  }, []);
  console.log(mpData?.data[0]);
  const chartData = {
    people: {
      labels: [
        mpData?.data[0]?.slice(4, 6),
        mpData?.data[1]?.slice(4, 6),
        mpData?.data[2]?.slice(4, 6),
        mpData?.data[3]?.slice(4, 6),
        mpData?.data[4]?.slice(4, 6),
        mpData?.data[5]?.slice(4, 6),
        mpData?.data[6]?.slice(4, 6),
        mpData?.data[7]?.slice(4, 6),
        mpData?.data[8]?.slice(4, 6),
        mpData?.data[9]?.slice(4, 6),
      ],
      datasets: [
        {
          label: "# of Votes",
          data: [
            mpData?.data[0]?.match(/\d+/g)[0],
            mpData?.data[1]?.match(/\d+/g)[0],
            mpData?.data[2]?.match(/\d+/g)[0],
            mpData?.data[3]?.match(/\d+/g)[0],
            mpData?.data[4]?.match(/\d+/g)[0],
            mpData?.data[5]?.match(/\d+/g)[0],
            mpData?.data[6]?.match(/\d+/g)[0],
            mpData?.data[7]?.match(/\d+/g)[0],
            mpData?.data[8]?.match(/\d+/g)[0],
            mpData?.data[9]?.match(/\d+/g)[0],
          ],
          backgroundColor: [
            "#C3F7EC",
            "#89D6AB",
            "#6AEB76",
            "#68D63A",
            "#BDFA1F",
            "#BAF7BB",
            "#BAD67A",
            "#EBE75A",
            "#D6BC2B",
            "#FAB80C",
          ],
          borderColor: [
            "#C3F7EC",
            "#89D6AB",
            "#6AEB76",
            "#68D63A",
            "#BDFA1F",
            "#BAF7BB",
            "#BAD67A",
            "#EBE75A",
            "#D6BC2B",
            "#FAB80C",
          ],
          borderWidth: 1,
        },
      ],
    },
    age: {
      labels: [
        totalData?.data.data[0].slice(4, 6),
        totalData?.data.data[1].slice(4, 6),
        totalData?.data.data[2].slice(4, 6),
        totalData?.data.data[3].slice(4, 6),
        totalData?.data.data[4].slice(4, 6),
        totalData?.data.data[5].slice(4, 6),
        totalData?.data.data[6].slice(4, 6),
        totalData?.data.data[7].slice(4, 6),
        totalData?.data.data[8].slice(4, 6),
        totalData?.data.data[9].slice(4, 6),
      ],
      datasets: [
        {
          label: "# of Votes",
          data: [
            totalData?.data.data[0].match(/\d+/g)[0],
            totalData?.data.data[1].match(/\d+/g)[0],
            totalData?.data.data[2].match(/\d+/g)[0],
            totalData?.data.data[3].match(/\d+/g)[0],
            totalData?.data.data[4].match(/\d+/g)[0],
            totalData?.data.data[5].match(/\d+/g)[0],
            totalData?.data.data[6].match(/\d+/g)[0],
            totalData?.data.data[7].match(/\d+/g)[0],
            totalData?.data.data[8].match(/\d+/g)[0],
            totalData?.data.data[9].match(/\d+/g)[0],
          ],
          backgroundColor: [
            "#B9DBFA",
            "#83D5D6",
            "#5EEBA6",
            "#2FD633",
            "#9FFA20",
            "#0CFAA4",
            "#1EBFD6",
            "#4C8FEB",
            "#7672D6",
            "#D1A5FA",
          ],
          borderColor: [
            "#B9DBFA",
            "#83D5D6",
            "#5EEBA6",
            "#2FD633",
            "#9FFA20",
            "#0CFAA4",
            "#1EBFD6",
            "#4C8FEB",
            "#7672D6",
            "#D1A5FA",
          ],
          borderWidth: 1,
        },
      ],
    },
  };
  return (
    <t.inforChartViewbox>
      <t.inforChartView>
        <Pie data={chartData.people} />
        나의 통계
      </t.inforChartView>
      <t.inforChartView>
        <Pie data={chartData.age} />
        전체 통계
      </t.inforChartView>
    </t.inforChartViewbox>
  );
}
