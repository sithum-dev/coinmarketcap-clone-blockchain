import { useContext } from 'react'
import { CoinMarketContext } from '../context/context'
import { XIcon } from '@heroicons/react/solid'

const SwapModal = () => {
  const {
    openBuyCryptoModal,
    setOpenBuyCryptoModal,
    mint,
    coins,
    loadingCoins,
    amount,
    setAmount,
    fromToken,
    setFromToken,
    toToken,
    setToToken,
  } = useContext(CoinMarketContext)

  if (openBuyCryptoModal)
    return (
      <div className="fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-[#0a1e42]/30">
        <div className="w-1/3 rounded-2xl bg-[#222531] p-6 text-white">
          <div className="flex items-center justify-between ">
            <p className="text-3xl font-bold">Swap Your Crypto</p>
            <div
              className="cursor-pointer text-gray-600 hover:text-gray-300"
              onClick={() => {
                setOpenBuyCryptoModal(false)
                setAmount(0)
                setFromToken('')
                setToToken('')
              }}
            >
              <XIcon className="h-6 w-6" />
            </div>
          </div>
          <div className="mb-6" />
          <label
            htmlFor="fromToken"
            className="mb-2 ml-2 block text-sm font-bold"
          >
            From
          </label>
          <select
            name="fromToken"
            className="mb-5 w-full rounded-md bg-[#171924] px-3 py-4 text-lg outline-none"
            placeholder="Token to swap"
            onChange={(e) => setFromToken(e.target.value)}
            value={fromToken}
          >
            {coins.map((coin) => {
              if (!loadingCoins) {
                return (
                  <option key={coin.id} value={coin.attributes.name}>
                    {coin.attributes.name}
                  </option>
                )
              }
            })}
            <option value="ETH">ETH</option>
          </select>
          <label
            htmlFor="fromToken"
            className="mb-2 ml-2 block text-sm font-bold"
          >
            To
          </label>
          <select
            name="toToken"
            className="mb-5 w-full rounded-md bg-[#171924] px-3 py-4 text-lg outline-none"
            placeholder="Token to swap"
            onChange={(e) => setToToken(e.target.value)}
            value={toToken}
          >
            {coins.map((coin) => {
              if (!loadingCoins) {
                return (
                  <option key={coin.id} value={coin.attributes.name}>
                    {coin.attributes.name}
                  </option>
                )
              }
            })}
          </select>
          <label htmlFor="amount" className="mb-2 ml-2 block text-sm font-bold">
            Amount
          </label>
          <input
            name="amount"
            className="mb-5 w-full rounded-md bg-[#171924] px-3 py-4 text-lg outline-none"
            placeholder="Token to swap"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button
            className="my-3 w-full rounded-lg bg-blue-600 p-2 px-5 text-lg text-white hover:opacity-50"
            onClick={mint}
          >
            Swap!
          </button>
        </div>
      </div>
    )

  return <></>
}

export default SwapModal
