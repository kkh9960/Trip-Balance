import React from 'react'
import Layout from '../../components/common/Layout'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import GameResultPage from '../../components/game/GameResultPage'
import TopButton from '../../components/common/button/TopButton'

export default function Game() {
  return (
    <Layout>
      <Header/>
      <GameResultPage/>
      <TopButton/>
      <Footer/>
    </Layout>
  )
}
