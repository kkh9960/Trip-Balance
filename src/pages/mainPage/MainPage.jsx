import React from "react";
import MapBar from "../../shared/api/map/MapBar";
import DoughnutChart from "../../components/mainpage/mapBar/DoughnutChart";
import Layout from "../../components/common/Layout";
import Header from "../../components/common/Header";
import * as t from "./MainPageStyle";
import TestSlide from "../../components/post/TestSlide"
import GameBanner from "../../components/mainpage/GameBanner";
import HotelList from "../../components/mainpage/postBar/hotelList/HotelList";
import BlogList from "../../components/mainpage/postBar/blogList/BlogList";
import Footer from "../../components/common/Footer";

export default function MainPage() {
  return (
    <>
      <Layout>
        <Header />
       <TestSlide/>
        
        <t.main>
          <t.mapGroup>
            <MapBar />
            <DoughnutChart />
          </t.mapGroup>
        </t.main>
        <HotelList />
        <BlogList />
        <GameBanner />
        <Footer />
      </Layout>
    </>
  );
}
