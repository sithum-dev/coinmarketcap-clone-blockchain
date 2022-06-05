import { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid'
import PostCard from '../components/PostCard'
//Banner Images
import earnTRX from '../assets/banner/earn-trx.png'
import wallet from '../assets/banner/wallet.png'
import srd from '../assets/banner/srd.png'
import airDrop from '../assets/banner/air-drop.png'
import api from '../assets/banner/api.png'
import timeToShip from '../assets/banner/time-to-ship.png'
import track from '../assets/banner/track.png'

function PostCarousel() {
  const [swiper, setSwiper] = useState(null)
  const [navNextStatus, setNavNextStatus] = useState(true)
  const [navPreviousStatus, setNavPreviousStatus] = useState(false)

  const banners = [
    {
      banner: earnTRX,
      category: 'Learn & Earn!',
      title: 'Learn About "TRON" & Earn $TRX!',
    },
    {
      banner: wallet,
      category: 'The Capital Conference',
      title: 'Re-Watch All Keynotes & Panels',
    },
    {
      banner: srd,
      category: 'Self Reporting',
      title: 'Self-Reporting Dashboard (SRD)',
    },
    {
      banner: airDrop,
      category: 'Free Airdrop!',
      title: 'Join "Equilibrium" $50K Airdrop Now',
    },
    {
      banner: api,
      category: 'API Sponsorship',
      title: 'Get Free CoinMarketCap API',
    },
    {
      banner: timeToShip,
      category: 'Time to Ship',
      title: 'CoinMarketCap Conference Recap',
    },
    {
      banner: track,
      category: 'CoinMarketCap Portfolio',
      title: 'Track Your Token Profits!',
    },
  ]

  const nexto = () => {
    swiper.slideNext()
  }

  const prevto = () => {
    swiper.slidePrev()
  }

  const siderOnChange = () => {
    swiper.isBeginning
      ? setNavPreviousStatus(false)
      : setNavPreviousStatus(true)
    swiper.isEnd ? setNavNextStatus(false) : setNavNextStatus(true)
  }

  return (
    <div className="mx-auto max-w-screen-2xl px-2 py-5">
      <div className="relative">
        <Swiper
          spaceBetween={20}
          onSlideChange={() => siderOnChange()}
          onSwiper={(s) => {
            setSwiper(s)
          }}
          breakpoints={{
            768: {
              slidesPerView: 5,
            },
            0: {
              slidesPerView: 2,
            },
          }}
        >
          {banners.map((banner, key) => {
            return (
              <SwiperSlide key={key}>
                <PostCard
                  banner={banner.banner}
                  category={banner.category}
                  title={banner.title}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
        {navPreviousStatus && (
          <div className="absolute top-0 left-0 z-40">
            <div
              className="flex h-44 w-12 items-center justify-start rounded-md bg-gradient-to-r from-gray-900 px-2 md:h-52 md:w-40 md:px-4"
              onClick={prevto}
            >
              <ChevronLeftIcon className="h-8 w-8 cursor-pointer rounded-full bg-gray-600 text-white" />
            </div>
          </div>
        )}

        {navNextStatus && (
          <div className="absolute top-0 right-0 z-40">
            <div
              className="flex h-44 w-12 items-center justify-end rounded-md bg-gradient-to-l from-gray-900 px-2 md:h-52 md:w-40 md:px-4"
              onClick={nexto}
            >
              <ChevronRightIcon className="h-8 w-8 cursor-pointer rounded-full bg-gray-600 text-white" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostCarousel
