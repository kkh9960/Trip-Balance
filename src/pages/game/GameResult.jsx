import React from 'react'
import Layout from '../../component/Layout'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import GameResultPage from '../../components/game/GameResultPage'

export default function Game() {
  return (
    <Layout>
      <Header/>
      <GameResultPage/>
      <Footer/>
    </Layout>
  )
}
