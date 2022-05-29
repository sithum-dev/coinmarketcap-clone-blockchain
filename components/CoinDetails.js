import Image from 'next/image'
import DropdownBtn from './buttons/DropDownBtn'
import Rate from './cmc-table/Rate'
import RateFilled from './buttons/RateFilled'
import btc from '../assets/btc.png'
import eth from '../assets/eth.png'
import usdc from '../assets/usdc.png'
import usdt from '../assets/usdt.png'
import xrp from '../assets/xrp.png'
import cardano from '../assets/cardano.png'
import tera from '../assets/tera.png'
import solana from '../assets/solana.png'
import avalanche from '../assets/avalanche.png'
import bnb from '../assets/bnb.png'

const CoinDetails = ({ coinName, coinSymbol, price }) => {
  const coinIcon = () => {
    switch (coinName) {
      case 'Bitcoin':
        return (
          <Image
            src={btc}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        )

      case 'Ethereum':
        return (
          <Image
            src={eth}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        )

      case 'Tether':
        return (
          <Image
            src={usdt}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        )

      case 'BNB':
        return (
          <Image
            src={bnb}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        )

      case 'USD Coin':
        return (
          <Image
            src={usdc}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        )

      case 'XRP':
        return (
          <Image
            src={xrp}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        )

      case 'Cardano':
        return (
          <Image
            src={cardano}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        )

      case 'Terra':
        return (
          <Image
            src={tera}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        )

      case 'Solana':
        return (
          <Image
            src={solana}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        )

      case 'Avalanche':
        return (
          <Image
            src={avalanche}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        )

      default:
        return (
          <Image
            src={btc}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        )
    }
  }

  return (
    <main className="min-h-screen text-white">
      <div>
        <div className="coin-details m-auto flex max-w-screen-2xl pt-20">
          <div className="flex w-fit flex-col">
            <div className="flex items-center">
              {coinIcon()}
              &nbsp; &nbsp;
              <div>
                <div className="flex">
                  <p className="text-3xl">{coinName}</p>
                  &nbsp; &nbsp;&nbsp; &nbsp;
                  <p className="flex items-center rounded-xl bg-slate-800 px-2">
                    {coinSymbol}
                  </p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="mt-3 flex flex-wrap">
              <div className="mr-3 mb-3 rounded-xl bg-slate-800 px-3 py-1">
                solana.com
              </div>
              <div className="mr-3 mb-3 rounded-xl bg-slate-800 px-3 py-1">
                Explorers
              </div>
              <div className="mr-3 mb-3 rounded-xl bg-slate-800 px-3 py-1">
                Community
              </div>
              <div className="mr-3 mb-3 rounded-xl bg-slate-800 px-3 py-1">
                Chat
              </div>
              <div className="mr-3 mb-3 rounded-xl bg-slate-800 px-3 py-1">
                Source code
              </div>
              <div className="mr-3 mb-3 rounded-xl bg-slate-800 px-3 py-1">
                Whitepaper
              </div>
            </div>
            <br />
            Topics
            <div className={['mt-3 flex flex-wrap', 'topics']}>
              <div className="mr-3 mb-3 rounded-xl bg-slate-800 px-3 py-1">
                Mineable
              </div>
              <div className="mr-3 mb-3 rounded-xl bg-slate-800 px-3 py-1">
                PoW
              </div>
              <div className="mr-3 mb-3 rounded-xl bg-slate-800 px-3 py-1">
                SHA-256
              </div>
              <div className="mr-3 mb-3 rounded-xl bg-slate-800 px-3 py-1">
                Store of value
              </div>
            </div>
          </div>

          <div className="-ml-16">
            <div className="flex w-full items-start justify-between">
              <div>
                <p className="text-gray-400">
                  {coinName} ({coinSymbol})
                </p>
                <div className="my-3 flex">
                  <h1 className="text-4xl">${price}</h1>
                  <RateFilled />
                </div>
                <div className="flex items-start">
                  <p className="text-gray-400"> 15.26 ETH</p>
                  &nbsp;&nbsp;&nbsp;
                  <Rate isIncrement={false} rate="0.53%" />
                </div>
                <div className="flex items-start">
                  <p className="text-gray-400"> 24.33 BTC</p>
                  &nbsp;&nbsp;&nbsp;
                  <Rate isIncrement={true} rate="0.99%" />
                </div>
              </div>

              <div className="flex">
                <DropdownBtn label="Buy" />
                <DropdownBtn label="Exchange" />
                <DropdownBtn label="Gaming" />
                <DropdownBtn label="Earn Crypto" />
              </div>
            </div>

            <div className="mt-10 flex justify-between border-t border-gray-800 p-4">
              <div>
                <div>
                  <small className="mr-2 whitespace-nowrap text-gray-400">
                    Market Cap
                  </small>
                </div>
                <small>$731,935,983,865</small>
                <Rate isIncrement={true} rate="0.53%" />
              </div>

              <div className="ml-10 w-full border-l border-gray-800 pl-5">
                <div>
                  <small className="mr-2 whitespace-nowrap text-gray-400">
                    Fully Diluted Market Cap
                  </small>
                </div>
                <small>$811,236,224,810</small>
                <Rate isIncrement={true} rate="0.53%" />
              </div>

              <div className="ml-10 w-full border-l border-gray-800 pl-5">
                <div>
                  <div>
                    <small className="mr-2 whitespace-nowrap text-gray-400">
                      Volume &nbsp;<small className="coin-symbol"> BTC</small>{' '}
                    </small>
                  </div>
                  <small>$24,143,176,324</small>
                  <Rate isIncrement={true} rate="0.92%" />
                </div>
                <br />
                <div>
                  <div>
                    <small className="mr-2 whitespace-nowrap text-gray-400">
                      Volume / Market Cap
                    </small>
                  </div>
                  <small>0.03315</small>
                </div>
              </div>

              <div className="ml-10 w-full border-l border-gray-800 pl-5">
                <div>
                  <div>
                    <small className="mr-2 whitespace-nowrap text-gray-400">
                      Circulating Supply
                    </small>
                  </div>
                  <small>18,983,850.00 BTC</small>
                </div>
                <br />
                <div>
                  <div className="flex justify-between">
                    <div>
                      <small className="mr-2 whitespace-nowrap text-gray-400">
                        Max Supply
                      </small>
                    </div>
                    <div>
                      <small>21,000,000</small>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <small className="mr-2 whitespace-nowrap text-gray-400">
                        Total Supply
                      </small>
                    </div>
                    <div>
                      <small>18,983,912</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CoinDetails
