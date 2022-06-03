import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Trending from '../components/Trending'
import CmcTable from '../components/cmc-table/CmcTable'
import SwapModal from '../components/SwapModal'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>CoinMarketCap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className="mx-6">
          <div className="mt-4 " />
          <Trending />
          <div className="mt-10 " />
          <CmcTable />
          <SwapModal />
        </div>
      </main>
    </div>
  )
}

export default Home
