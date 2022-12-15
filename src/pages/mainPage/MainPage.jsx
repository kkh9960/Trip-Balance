import React from "react";
import Layout from "../../components/common/Layout";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import TopButton from "../../components/common/button/TopButton";
import TestSlide from "../../components/mainpage/sliderBanner/TestSlide";
import MapBarView from "../../components/mainpage/mapBar/MapBarView";
import BlogList from "../../components/mainpage/postBar/blogList/BlogList";
import HotelList from "../../components/mainpage/postBar/hotelList/HotelList";
import GameBanner from "../../components/mainpage/gameBanner/GameBanner";

export default function MainPage() {
  return (
    <Layout>
      <Header />
      <TestSlide />
      <MapBarView />
      <HotelList />
      <BlogList />
      <GameBanner />
      <Footer />
      <TopButton />
    </Layout>
  );
}
