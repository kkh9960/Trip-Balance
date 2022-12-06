import React from "react";
import Layout from "../../components/common/Layout";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import MemberPageView from "../../components/memberPage/MemberPageView";

export default function MyPage() {
  return (
    <Layout>
      <Header />
      <MemberPageView />
      <Footer />
    </Layout>
  );
}
