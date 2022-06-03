import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'

import PostCard from '../components/PostCard'
import earnTRX from '../assets/banner/earn-trx.png'

function PostCarousel() {
  return (
    <div className="mx-auto max-w-screen-2xl px-2">
      <Swiper
        spaceBetween={20}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          // when window width is >= 768px
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
      </Swiper>
    </div>
  )
}

export default PostCarousel
