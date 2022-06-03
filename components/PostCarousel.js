// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'

import earnTRX from '../assets/banner/earn-trx.png'
import Image from 'next/image'

function PostCarousel() {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <Swiper
        spaceBetween={20}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        slidesPerView={'auto'}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide>
          <div className="relative">
            <Image src={earnTRX} objectFit="cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image src={earnTRX} objectFit="cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image src={earnTRX} objectFit="cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image src={earnTRX} objectFit="cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image src={earnTRX} objectFit="cover" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default PostCarousel
