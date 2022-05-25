import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Trending from '../components/Trending'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>CoinMarketCap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Trending />
      </main>
    </div>
  )
}

export default Home
