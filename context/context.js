import { createContext, useState, useEffect } from 'react'

export const CoinMarketContext = createContext()

export const CoinMarketProvider = ({ children }) => {
  const getTopTenCoins = async () => {
    try {
      const res = await fetch('/api/getTopTen')
      const data = await res.json()
      return data.data.data
    } catch (e) {
      console.log(e.message)
    }
  }
  return (
    <CoinMarketContext.Provider
      value={{
        getTopTenCoins,
        // openBuyCryptoModal,
        // setOpenBuyCryptoModal,
        // coins,
        // loadingCoins,
        // fromToken,
        // toToken,
        // setFromToken,
        // setToToken,
        // amount,
        // setAmount,
        // mint,
        // openModal,
      }}
    >
      {children}
    </CoinMarketContext.Provider>
  )
}
