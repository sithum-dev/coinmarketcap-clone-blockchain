import Image from 'next/image'

const PostCard = ({ banner, category, title }) => {
  return (
    <div className="">
      <Image src={banner} className="h-20 w-96 rounded-md" />
      <div>
        <p className="py-1 text-xs text-gray-300">{category}</p>
        <p className="truncate text-sm text-white ">{title}</p>
      </div>
    </div>
  )
}

export default PostCard
