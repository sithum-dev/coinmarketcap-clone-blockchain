import { createContext, useState, useEffect } from 'react'

export const CoinMarketContext = createContext()

export const CoinMarketProvider = ({ children }) => {
  return (
    <CoinMarketContext.Provider
      value={{
        getTopTenCoins,
        openBuyCryptoModal,
        setOpenBuyCryptoModal,
        coins,
        loadingCoins,
        fromToken,
        toToken,
        setFromToken,
        setToToken,
        amount,
        setAmount,
        mint,
        openModal,
      }}
    >
      {children}
    </CoinMarketContext.Provider>
  )
}
