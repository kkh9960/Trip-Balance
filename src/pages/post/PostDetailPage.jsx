import React, { useState, useEffect } from "react";
import Layout from "../../components/common/Layout";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import BoardPostDetail from "../../components/post/BoardPostDetail";

export default function MyPage() {
  const [test, settest] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      settest(true);
    }, 1000);
  }, []);

  return (
    <Layout>
      <Header />
      <BoardPostDetail />
      {test ? <Footer /> : null}
    </Layout>
  );
}
