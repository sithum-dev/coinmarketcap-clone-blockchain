import { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'

import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid'

import PostCard from '../components/PostCard'
import earnTRX from '../assets/banner/earn-trx.png'

function PostCarousel() {
  const [swiper, setSwiper] = useState(null)
  const [navNextStatus, setNavNextStatus] = useState(true)
  const [navPreviousStatus, setNavPreviousStatus] = useState(false)

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
          <SwiperSlide>
            <PostCard banner={earnTRX} />
          </SwiperSlide>
          <SwiperSlide>
            <PostCard banner={earnTRX} />
          </SwiperSlide>
          <SwiperSlide>
            <PostCard banner={earnTRX} />
          </SwiperSlide>
          <SwiperSlide>
            <PostCard banner={earnTRX} />
          </SwiperSlide>
          <SwiperSlide>
            <PostCard banner={earnTRX} />
          </SwiperSlide>
          <SwiperSlide>
            <PostCard banner={earnTRX} />
          </SwiperSlide>
          <SwiperSlide>
            <PostCard banner={earnTRX} />
          </SwiperSlide>
          <SwiperSlide>
            <PostCard banner={earnTRX} />
          </SwiperSlide>
        </Swiper>
        {navPreviousStatus && (
          <div className="absolute top-0 left-0 z-50">
            <div
              className="flex h-44 w-12 items-center justify-start rounded-md bg-gradient-to-r from-gray-900 px-2 md:h-52 md:w-40 md:px-4"
              onClick={prevto}
            >
              <ChevronLeftIcon className="h-8 w-8 cursor-pointer rounded-full bg-gray-600 text-white" />
            </div>
          </div>
        )}

        {navNextStatus && (
          <div className="absolute top-0 right-0 z-50">
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
