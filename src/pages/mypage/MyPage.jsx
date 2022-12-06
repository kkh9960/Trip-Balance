import React from "react";
import Layout from "../../components/common/Layout";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import MyPageView from "../../components/mypage/MyPageView";
import TopButton from "../../components/common/button/TopButton";

export default function MyPage() {
  return (
    <Layout>
      <Header />
      <MyPageView />
      <TopButton />
      <Footer />
    </Layout>
  );
}
