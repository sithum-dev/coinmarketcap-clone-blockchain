import { useState } from 'react'
import Rate from './cmc-table/Rate'
import fire from '../assets/fire.png'
import btc from '../assets/btc.png'
import usdt from '../assets/usdt.png'
import tron from '../assets/tron.png'
import matc from '../assets/matc.png'
import near from '../assets/near.png'
import sun from '../assets/sun.png'
import apis from '../assets/apis.png'
import mland from '../assets/mland.png'

import gainers from '../assets/gainers.png'
import recent from '../assets/recent.png'
import TrendingCard from './TrendingCard'
import ReactSwitch from 'react-switch'

const Trending = () => {
  const [checked, setChecked] = useState(false)

  const trendingData = [
    {
      number: 1,
      symbol: 'BTC',
      name: 'Bitcoin',
      icon: btc,
      isIncrement: true,
      rate: '2.34%',
    },
    {
      number: 2,
      symbol: 'USDT',
      name: 'Tether',
      icon: usdt,
      isIncrement: false,
      rate: '9.32%',
    },
    {
      number: 1,
      symbol: 'BTC',
      name: 'Bitcoin',
      icon: btc,
      isIncrement: true,
      rate: '2.34%',
    },
  ]

  const bgGainers = [
    {
      number: 1,
      symbol: 'TRX',
      name: 'TRON',
      icon: tron,
      isIncrement: true,
      rate: '632.84%',
    },
    {
      number: 2,
      symbol: 'MATIC',
      name: 'Polygon',
      icon: matc,
      isIncrement: true,
      rate: '332.32%',
    },
    {
      number: 1,
      symbol: 'NEAR',
      name: 'NEAR Protocol',
      icon: near,
      isIncrement: true,
      rate: '189.34%',
    },
  ]

  const recentlyAdded = [
    {
      number: 1,
      symbol: 'SUN',
      name: 'Rising Sun',
      icon: sun,
      isIncrement: false,
      rate: '19.28%',
    },
    {
      number: 2,
      symbol: 'API',
      name: 'The APIS',
      icon: apis,
      isIncrement: true,
      rate: '1.79%',
    },
    {
      number: 1,
      symbol: 'MLAND',
      name: 'MLAND Token',
      icon: mland,
      isIncrement: false,
      rate: '21.77%',
    },
  ]

  return (
    <div className="px-3 text-white">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex justify-between">
          <h1 className="text-xl text-white md:text-3xl">
            Todays Cryptocurrency Prices by Market Cap
          </h1>
          <div className="flex items-center">
            <p className="hidden text-sm text-gray-400 md:block md:text-base">
              Highlights &nbsp;
            </p>
            <ReactSwitch
              checked={checked}
              onChange={() => {
                setChecked(!checked)
              }}
            />
          </div>
        </div>
        <br />
        <div className="md:flex">
          <p>The global crypto market cap is $1.27T, &nbsp;</p>
          <p className="flex">
            a{' '}
            <span className="flex">
              <Rate isIncrement={true} rate="0.53%" />
            </span>
            &nbsp; decrease over the last day.&nbsp;
            <span className="cursor-pointer underline">Read More</span>
          </p>
        </div>
        <br />
        <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-3">
          <TrendingCard
            title="Trending"
            icon={fire}
            trendingData={trendingData}
          />
          <TrendingCard
            title="Biggest Gainers"
            icon={gainers}
            trendingData={bgGainers}
          />
          <TrendingCard
            title="Recently Added"
            icon={recent}
            trendingData={recentlyAdded}
          />
        </div>
      </div>
    </div>
  )
}

export default Trending
