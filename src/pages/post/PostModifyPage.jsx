import React from "react";
import Layout from "../../components/common/Layout";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import BoardPostModify from '../../components/post/BoardPostModify'
import { motion } from "framer-motion";

export default function PostViewPage() {
  return (
    <motion.div
      className="loginPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
    <Layout>
      <Header />
      <BoardPostModify/>
      <Footer />
    </Layout>
    </motion.div>
  );
}
