import Image from 'next/image'

const PostCard = ({ banner, category, title }) => {
  return (
    <div className="relative">
      <Image src={banner} objectFit="cover" className="rounded-md" />
      <div>
        <p className="py-1 text-xs text-gray-300">Time to Ship</p>
        <p className="truncate text-sm text-white ">
          CoinMarketCap Conference Recap
        </p>
      </div>
    </div>
  )
}

export default PostCard
