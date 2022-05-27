import CMCpriceConverter from '../../components/PriceConverter'

import Header from '../../components/Header'
import solana from '../../assets/solana.png'
import Usd from '../../assets/svg/usd'
import { useEffect, useState } from 'react'
import Graph from '../../components/Graph'
// import Chat from '../../components/chat'

const Currencies = () => {
  const [coinName, setCoinName] = useState('')
  const [coinSymbol, setCoinSymbol] = useState('')
  const [price, setPrice] = useState('')

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)

    setCoinName(urlParams.get('coin'))
    setPrice(Number(urlParams.get('price')).toLocaleString())
    setCoinSymbol(urlParams.get('symbol'))
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-6 max-w-screen-2xl text-white">
        <div className="grid grid-cols-1 items-start md:grid-cols-3">
          <div className="p-10 pl-0 pr-0 md:col-span-2">
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div className="flex items-center justify-between rounded-xl border border-gray-500/10 bg-[#222531] p-2 text-sm">
                <p className="mr-2 rounded-lg bg-[#171924] p-1 px-2">Price</p>
                <p className="px-2">Market Cap</p>
                <p className="px-2">Trading View</p>
                <p className="px-2">History</p>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-gray-500/10 bg-[#222531] p-2 text-sm">
                <p className="mr-2 rounded-lg bg-[#171924] p-1 px-2">1D</p>
                <p className="px-2">2D</p>
                <p className="px-2">1M</p>
                <p className="px-2">3M</p>
                <p className="px-2">1Y</p>
                <p className="px-2">YTD</p>
                <p className="px-2">ALL</p>
                <p className="px-2">LOG</p>
              </div>
            </div>
            <br />
            <Graph />
            <br />
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="flex items-center">
                  <input className="outline-none" type="checkbox" /> &nbsp; USD
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="flex items-center">
                  <input type="checkbox" /> &nbsp; BTC
                </div>
              </div>

              <p>
                Want more data?{' '}
                <span className="text-[#6188FF]">Check out our API</span>
              </p>
            </div>
            <br />
            <br />
            <CMCpriceConverter
              from={coinName}
              fromSymbol={coinSymbol}
              fromLogo={solana}
              toLogo={<Usd />}
              price={price}
              to="United States Dollars"
              toSymbol="USD"
            />
          </div>

          <div className="ml-5 pt-10">{/* <Chat /> */}chat</div>
        </div>
      </main>
    </div>
  )
}

export default Currencies
