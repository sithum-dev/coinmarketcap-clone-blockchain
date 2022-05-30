import { useContext } from 'react'
import { CoinMarketContext } from '../context/context'

const SwapCryptoModal = () => {
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
      <div className="fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-gray-900/90">
        <div className="w-1/3 rounded-lg bg-white p-3">
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold">Swap your crypto</p>
            <p
              className="cursor-pointer text-gray-600 hover:text-red-300"
              onClick={() => {
                setOpenBuyCryptoModal(false)
                setAmount(0)
                setFromToken('')
                setToToken('')
              }}
            >
              close &times;
            </p>
          </div>
          <div className="mb-5" />
          <label htmlFor="fromToken" className="mb-2 ml-2 block">
            From
          </label>
          <select
            name="fromToken"
            className="mb-5 w-full rounded-lg border border-gray-600/50 p-2 outline-none"
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
          <label htmlFor="fromToken" className="mb-2 ml-2 block">
            To
          </label>
          <select
            name="toToken"
            className="mb-5 w-full rounded-lg border border-gray-600/50 p-2 outline-none"
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
          <label htmlFor="amount" className="mb-2 ml-2 block">
            Amount
          </label>
          <input
            name="amount"
            className="mb-5 w-full rounded-lg border border-gray-600/50 p-2 outline-none"
            placeholder="Token to swap"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button
            className="rounded-lg bg-[#6188FF] p-2 px-5 text-white hover:opacity-50"
            onClick={mint}
          >
            Swap!
          </button>
        </div>
      </div>
    )

  return <></>
}

export default SwapCryptoModal
