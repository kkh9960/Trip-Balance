import React from "react";
import Layout from "../../components/common/Layout";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import MapBarView from "../../components/mainpage/mapBar/MapBarView";

import * as t from "./MainPageStyle";
import TestSlide from "../../components/post/TestSlide";

import GameBanner from "../../components/mainpage/GameBanner";
import HotelList from "../../components/mainpage/postBar/hotelList/HotelList";
import BlogList from "../../components/mainpage/postBar/blogList/BlogList";
import TopButton from "../../components/common/button/TopButton";



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
      <TopButton/>
    </Layout>

  );
}
