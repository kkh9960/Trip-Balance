import React from 'react'
import Layout from '../../component/Layout'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import GamePage from '../../components/game/GamePage'

export default function Game() {
  return (
    <Layout>
      <Header/>
      <GamePage/>
      <Footer/>
    </Layout>
  )
}
