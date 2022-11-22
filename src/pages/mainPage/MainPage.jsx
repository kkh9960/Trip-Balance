import React from "react";
import AddPostButton from "../../components/common/button/AddPostButton";
import ScrollTopButton from "../../components/common/button/ScrollTopButton";
import MiddleBar from "./middleBar/MiddleBar";
import MapBar from "../../shared/api/map/MapBar";
import DoughnutChart from "./mapBar/DoughnutChart";
import MainSlider from "./imageSlide/MainSlider";
import Layout from "../../component/Layout";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import * as t from "./MainPageStyle";

export default function MainPage() {
  return (
    <Layout>
      <Header />
      <t.main>
        <t.mainImageBox>
          <MainSlider />
        </t.mainImageBox>

        <t.mapGroup>
          <MapBar />
          <DoughnutChart />
        </t.mapGroup>

        <t.sideButtonGroup>
          <AddPostButton />
          <ScrollTopButton />
        </t.sideButtonGroup>

        <Footer />
      </t.main>
    </Layout>
  );
}

// Infinityscroll
