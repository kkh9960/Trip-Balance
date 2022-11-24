import React from "react";
import AddPostButton from "../../components/common/button/AddPostButton";
import ScrollTopButton from "../../components/common/button/ScrollTopButton";
import MiddleBar from "../../components/mainpage/middleBar/MiddleBar";
import MapBar from "../../shared/api/map/MapBar";
import DoughnutChart from "./mapBar/DoughnutChart";
import Layout from "../../component/Layout";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import PostBar from "../../components/mainpage/postBar/PostBar";
import * as t from "./MainPageStyle";
import Home from "../../Banner/Home";
import GameBanner from "../../component/GameBanner";

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
      <GameBanner/>
      <Footer />
    </Layout>
  );
}

// Infinityscroll
