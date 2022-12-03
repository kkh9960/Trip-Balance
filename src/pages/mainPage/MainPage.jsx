import React from "react";
import MapBar from "../../shared/api/map/MapBar";
import DoughnutChart from "../../components/mainpage/mapBar/DoughnutChart";
import Layout from "../../components/common/Layout";
import Header from "../../components/common/Header";

// import PostBar from "../../components/mainpage/postBar/PostBar";
import * as t from "./MainPageStyle";
import Banner from "../../components/mainpage/Banner/Banner";
import GameBanner from "../../components/mainpage/GameBanner";
import HotelList from "../../components/mainpage/postBar/hotelList/HotelList";
import BlogList from "../../components/mainpage/postBar/blogList/BlogList";
// import MainSlider from "../../components/mainpage/imageSlide/MainSlider.jsx";

export default function MainPage() {
  return (
    <>
      <Layout>
        <Header />
        <Banner />
        {/* <MainSlider /> */}
        <t.main>
          <t.mapGroup>
            <MapBar />
            <DoughnutChart />
          </t.mapGroup>
        </t.main>
        <HotelList />
        <BlogList />
        <GameBanner />
      </Layout>
    </>
  );
}
