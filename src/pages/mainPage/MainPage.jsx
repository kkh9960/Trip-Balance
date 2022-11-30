import React from "react";
import MapBar from "../../shared/api/map/MapBar";
import DoughnutChart from "../../components/mainpage/mapBar/DoughnutChart";
import Layout from "../../components/common/Layout";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import PostBar from "../../components/mainpage/postBar/PostBar";
import * as t from "./MainPageStyle";
import Home from "../../components/mainpage/Banner/Home";
import GameBanner from "../../components/mainpage/GameBanner";
// import MainSlider from "../../components/mainpage/imageSlide/MainSlider.jsx";

export default function MainPage() {
  return (
    <>
      <Header />
      <Home />
      {/* <MainSlider /> */}
      <Layout>
        <t.main>
          <t.mapGroup>
            <MapBar />
            <DoughnutChart />
          </t.mapGroup>
          <PostBar />
        </t.main>
        <GameBanner />
        <Footer />
      </Layout>
    </>
  );
}
