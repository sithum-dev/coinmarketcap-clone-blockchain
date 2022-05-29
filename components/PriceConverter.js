import Image from 'next/image'

import converter from '../assets/converter.png'
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
import { useContext } from 'react'
import { CoinMarketContext } from '../context/context'

const styles = {
  converter: `flex items-center justify-between bg-[#171924] border border-gray-500/10 px-5 py-5 rounded-xl`,
  convertButton: `bg-[#1d4ed8] p-2 px-5 w-min rounded-xl mt-5 cursor-pointer hover:opacity-60`,
}

const CMCpriceConverter = ({
  from,
  to,
  fromSymbol,
  toSymbol,
  fromLogo,
  toLogo,
  price,
}) => {
  //   const { convertCrypto } = useContext(CoinMarketContext)

  const coinIcon = () => {
    switch (from) {
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
    <div>
      <h2>
        {fromSymbol} to {toSymbol} Converter
      </h2>
      <br />
      <div className="grid items-center gap-4 rounded-xl border border-gray-500/10 bg-[#171924] px-5 py-5 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex w-full justify-between">
            <div className="flex gap-2">
              {fromLogo && fromLogo ? coinIcon() : <div></div>}
              <div>
                <p>{fromSymbol}</p>
                <h4>{from}</h4>
              </div>
            </div>
            &nbsp; &nbsp;
            <p className="text-3xl">1</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div>
            <Image alt="" src={converter} width={40} height={40} />
          </div>
        </div>

        <div className="flex justify-between md:col-span-2">
          <div className="flex gap-2">
            {toLogo}
            <div>
              <p>{toSymbol}</p>
              <h4>{to}</h4>
            </div>
          </div>
          <p className="text-3xl">${price}</p>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <div
          className="mt-5 w-60 cursor-pointer rounded-xl bg-[#1d4ed8] p-2 px-5 text-center hover:opacity-60"
          // onClick={convertCrypto}
        >
          Convert
        </div>
      </div>
    </div>
  )
}

export default CMCpriceConverter
