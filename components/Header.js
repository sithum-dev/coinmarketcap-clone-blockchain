import React, { useState } from 'react'
import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/solid'
import { ConnectButton } from 'web3uikit'
import { useRouter } from 'next/router'

function Header() {
  const router = useRouter()
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <div className="flex h-20 w-full justify-between gap-[50px] bg-[#17171A] p-6 text-white md:p-[25px]">
      {/* Logo */}
      <Image
        src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
        alt="logo"
        className="cursor-pointer"
        width={200}
        height={100}
        onClick={() => router.push('/')}
      />
      {/* Nav Bar */}
      <nav className="mx-auto hidden h-full max-w-screen-xl justify-center px-4 md:flex">
        <div className="flex items-center justify-center gap-[20px]">
          <div className="relative mr-1 cursor-pointer hover:opacity-60">
            <div className="mx-[10px] flex text-white">Cryptocurrencies</div>
            <div className="absolute bottom-5 right-0 top-1 h-1 w-1 rounded-full bg-blue-600 ring-4"></div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[20px]">
          <div className="relative mr-1 cursor-pointer hover:opacity-60">
            <div className="mx-[10px] flex text-white">Exchanges</div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[20px]">
          <div className="relative mr-1 cursor-pointer hover:opacity-60">
            <div className="mx-[10px] flex text-white">NFT</div>
            <div className="absolute bottom-5 right-0 top-1 h-1 w-1 rounded-full bg-blue-600 ring-4"></div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[20px]">
          <div className="relative mr-1 cursor-pointer hover:opacity-60">
            <div className="mx-[10px] flex text-white">Cryptown</div>
            <div className="absolute bottom-5 right-0 top-1 h-1 w-1 rounded-full bg-blue-600 ring-4"></div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[20px]">
          <div className="relative mr-1 cursor-pointer hover:opacity-60">
            <div className="mx-[10px] flex text-white">Portfolio</div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[20px]">
          <div className="relative mr-1 cursor-pointer hover:opacity-60">
            <div className="mx-[10px] flex text-white">Watchlist</div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[20px]">
          <div className="relative mr-1 cursor-pointer hover:opacity-60">
            <div className="mx-[10px] flex text-white">Products</div>
            <div className="absolute bottom-5 right-0 top-1 h-1 w-1 rounded-full bg-blue-600 ring-4"></div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[20px]">
          <div className="relative mr-1 cursor-pointer hover:opacity-60">
            <div className="mx-[10px] flex text-white">Learn</div>
          </div>
        </div>
      </nav>
      <div className="hidden items-center md:flex">
        <div className="flex items-center justify-center rounded bg-[#171924] p-2">
          <SearchIcon className="h-5 w-5" />
          <input
            className="w-70 ml-3 bg-transparent text-white outline-none"
            placeholder="Search"
          />
        </div>
        <div className="connect-btn-custom">
          <ConnectButton />
        </div>
      </div>
      {/* Mobile Nav */}
      <div className="md:hidden">
        {isModalOpen ? (
          <>
            <button
              onClick={() => setModalOpen(!isModalOpen)}
              className="float-right -mr-2 mb-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div className="fixed right-0 top-20  h-auto w-[24rem] translate-x-[-1px] rounded-lg border-[1px] border-red-100/20 bg-[#161B21] text-white  transition">
              <div className="px-5 pt-5 pb-6">
                <div className="relative z-10 mt-[1rem]">
                  <nav className="grid gap-y-8">
                    <div className="flex items-center justify-center gap-[20px]">
                      <div className="relative mr-1 cursor-pointer hover:opacity-60">
                        <div className="mx-[10px] flex text-white">
                          Cryptocurrencies
                        </div>
                        <div className="absolute bottom-5 right-0 top-1 h-1 w-1 rounded-full bg-blue-600 ring-4"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-[20px]">
                      <div className="relative mr-1 cursor-pointer hover:opacity-60">
                        <div className="mx-[10px] flex text-white">
                          Exchanges
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-[20px]">
                      <div className="relative mr-1 cursor-pointer hover:opacity-60">
                        <div className="mx-[10px] flex text-white">NFT</div>
                        <div className="absolute bottom-5 right-0 top-1 h-1 w-1 rounded-full bg-blue-600 ring-4"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-[20px]">
                      <div className="relative mr-1 cursor-pointer hover:opacity-60">
                        <div className="mx-[10px] flex text-white">
                          Cryptown
                        </div>
                        <div className="absolute bottom-5 right-0 top-1 h-1 w-1 rounded-full bg-blue-600 ring-4"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-[20px]">
                      <div className="relative mr-1 cursor-pointer hover:opacity-60">
                        <div className="mx-[10px] flex text-white">
                          Portfolio
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-[20px]">
                      <div className="relative mr-1 cursor-pointer hover:opacity-60">
                        <div className="mx-[10px] flex text-white">
                          Watchlist
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-[20px]">
                      <div className="relative mr-1 cursor-pointer hover:opacity-60">
                        <div className="mx-[10px] flex text-white">
                          Products
                        </div>
                        <div className="absolute bottom-5 right-0 top-1 h-1 w-1 rounded-full bg-blue-600 ring-4"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-[20px]">
                      <div className="relative mr-1 cursor-pointer hover:opacity-60">
                        <div className="mx-[10px] flex text-white">Learn</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-[20px]">
                      <ConnectButton />
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </>
        ) : (
          <button onClick={() => setModalOpen(!isModalOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="white"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}

export default Header
