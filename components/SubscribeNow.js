import Image from 'next/image'
import React from 'react'
import newsletter from '../assets/newsletter_bg_dark.svg'

function SubscribeNow() {
  return (
    <div className="bg-[#171924] py-10 px-6">
      <div className="mx-auto max-w-screen-2xl flex-row items-center px-3 md:flex">
        <div>
          <h1 className="text-4xl text-white">
            Be the first to know about <strong>crypto news every day</strong>
          </h1>
          <p className="py-5 text-lg text-gray-400">
            Get crypto analysis, news and updates right to your inbox! Sign up
            here so you don't miss a single newsletter.
          </p>

          <button className="my-2 w-full rounded-md bg-blue-600 px-5 py-2 text-lg text-white md:my-4 md:w-auto">
            Subscribe Now
          </button>
        </div>
        <div className="py-4">
          <Image src={newsletter} />
        </div>
      </div>
    </div>
  )
}

export default SubscribeNow
