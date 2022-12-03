import React from "react";
import Layout from "../../components/common/Layout";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import MapBarView from "../../components/mainpage/mapBar/MapBarView";
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
        {/* <t.mapGroup>
        </t.mapGroup> */}
        <MapBarView />

        <HotelList />
        <BlogList />
        <GameBanner />
        <Footer />
      </Layout>
    </>
  );
}
