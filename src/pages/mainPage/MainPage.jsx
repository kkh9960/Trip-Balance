import React from "react";
import "./MainPageStyle.css";
import AddPostButton from "../../components/common/button/AddPostButton";
import ScrollTopButton from "../../components/common/button/ScrollTopButton";
import MiddleBar from "./middleBar/MiddleBar";
import PostBar from "./postBar/PostBar";
import MapBar from "../../shared/api/map/MapBar";
import DoughnutChart from "./mapBar/DoughnutChart";
import WeatherBar from "./mapBar/weatherBar/WeatherBar";
import MainSlider from "./imageSlide/MainSlider";
import Layout from "../../component/Layout";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

export default function MainPage() {
  return (
    <Layout>
      <Header />
      <div className="main">
        <div className="mainImageBox">
          <MainSlider />
        </div>

        <div className="mapGroup">
          <MapBar />
          <DoughnutChart />
          <WeatherBar />
        </div>
        <PostBar />

        <div className="sideButtonGroup">
          <AddPostButton />
          <ScrollTopButton />
        </div>

        <Footer />
      </div>
    </Layout>
  );
}

// Infinityscroll
