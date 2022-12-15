import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import * as t from "./MemberInformationChartStyle";
import instance from "../../../lib/instance";
import { useParams } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip);

export default function MemberInformationChart() {
  const id = useParams();
  const [totalData, setTotalData] = useState();
  const [mypickData, setMyPickData] = useState();
  useEffect(() => {
    async function fetchData() {
      const result = await instance.get("/tb/mypage/totaldb");
      if (result.data?.data === "" || undefined) {
        setTotalData(result.data.data.push("지역: 빈값, 값: 0"));
      } else {
        setTotalData(result);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const result = await instance.get(`/tb/memberinfo/tripdb/${id.id}`);
      if (result.data?.data === "회원이 실행한 게임이 없습니다.") {
        setMyPickData(result.data.data.push("지역: 빈값, 값: 0"));
      } else {
        setMyPickData(result);
      }
    }
    fetchData();
  }, []);
  const chartData = {
    total: {
      option: [],
      labels: [
        mypickData?.data?.data[0]?.slice(7, 9),
        mypickData?.data?.data[1]?.slice(7, 9),
        mypickData?.data?.data[2]?.slice(7, 9),
        mypickData?.data?.data[3]?.slice(7, 9),
        mypickData?.data?.data[4]?.slice(7, 9),
        mypickData?.data?.data[5]?.slice(7, 9),
        mypickData?.data?.data[6]?.slice(7, 9),
        mypickData?.data?.data[7]?.slice(7, 9),
        mypickData?.data?.data[8]?.slice(7, 9),
        mypickData?.data?.data[9]?.slice(7, 9),
      ],
      datasets: [
        {
          data: [
            mypickData?.data?.data[0]?.match(/\d+/g)[0],
            mypickData?.data?.data[1]?.match(/\d+/g)[0],
            mypickData?.data?.data[2]?.match(/\d+/g)[0],
            mypickData?.data?.data[3]?.match(/\d+/g)[0],
            mypickData?.data?.data[4]?.match(/\d+/g)[0],
            mypickData?.data?.data[5]?.match(/\d+/g)[0],
            mypickData?.data?.data[6]?.match(/\d+/g)[0],
            mypickData?.data?.data[7]?.match(/\d+/g)[0],
            mypickData?.data?.data[8]?.match(/\d+/g)[0],
            mypickData?.data?.data[9]?.match(/\d+/g)[0],
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
    pick: {
      labels: [
        totalData?.data?.data[0]?.slice(7, 9),
        totalData?.data?.data[1]?.slice(7, 9),
        totalData?.data?.data[2]?.slice(7, 9),
        totalData?.data?.data[3]?.slice(7, 9),
        totalData?.data?.data[4]?.slice(7, 9),
        totalData?.data?.data[5]?.slice(7, 9),
        totalData?.data?.data[6]?.slice(7, 9),
        totalData?.data?.data[7]?.slice(7, 9),
        totalData?.data?.data[8]?.slice(7, 9),
        totalData?.data?.data[9]?.slice(7, 9),
      ],
      datasets: [
        {
          data: [
            totalData?.data?.data[0]?.match(/\d+/g)[0],
            totalData?.data?.data[1]?.match(/\d+/g)[0],
            totalData?.data?.data[2]?.match(/\d+/g)[0],
            totalData?.data?.data[3]?.match(/\d+/g)[0],
            totalData?.data?.data[4]?.match(/\d+/g)[0],
            totalData?.data?.data[5]?.match(/\d+/g)[0],
            totalData?.data?.data[6]?.match(/\d+/g)[0],
            totalData?.data?.data[7]?.match(/\d+/g)[0],
            totalData?.data?.data[8]?.match(/\d+/g)[0],
            totalData?.data?.data[9]?.match(/\d+/g)[0],
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
      <t.chartNametag>TOP10</t.chartNametag>
      <t.inforChartBox>
        <t.inforChartBoxWrap>
          <t.chartName>나의 통계</t.chartName>
          <t.inforChartView>
            <Pie data={chartData.total} />
          </t.inforChartView>
        </t.inforChartBoxWrap>
        <t.inforChartBoxWrap>
          <t.chartName>전체 통계</t.chartName>
          <t.inforChartView>
            <Pie data={chartData.pick} />
          </t.inforChartView>
        </t.inforChartBoxWrap>
      </t.inforChartBox>
    </t.inforChartViewbox>
  );
}
