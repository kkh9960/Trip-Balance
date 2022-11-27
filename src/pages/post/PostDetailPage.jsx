import React from "react";
import Layout from "../../components/common/Layout";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import BoardPostDetail from "../../components/post/BoardPostDetail";

export default function MyPage() {
  return (
    <Layout>
      <Header />
        <BoardPostDetail/>
      <Footer />
    </Layout>
  );
}
