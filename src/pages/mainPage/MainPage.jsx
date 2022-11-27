import React from "react";
import AddPostButton from "../../components/common/button/AddPostButton";
import ScrollTopButton from "../../components/common/button/ScrollTopButton";
import MiddleBar from "../../components/mainpage/middleBar/MiddleBar";
import MapBar from "../../shared/api/map/MapBar";
import DoughnutChart from "./mapBar/DoughnutChart";
import Layout from "../../components/common/Layout";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import PostBar from "../../components/mainpage/postBar/PostBar";
import * as t from "./MainPageStyle";
import Home from "../../components/mainpage/Banner/Home";
import GameBanner from "../../components/mainpage/GameBanner";

export default function MainPage() {
  return (
    <Layout>
      <Header />
      <t.main>
        <Home />
        <t.mapGroup>
          <MapBar />
          <DoughnutChart />
        </t.mapGroup>
        <PostBar />
        {/* <t.sideButtonGroup>
          <AddPostButton />
          <ScrollTopButton />
        </t.sideButtonGroup> */}
      </t.main>
      <GameBanner />
      <Footer />
    </Layout>
  );
}

// Infinityscroll
