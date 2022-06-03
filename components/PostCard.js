import Image from 'next/image'

const PostCard = ({ banner, category, title }) => {
  return (
    <div className="relative">
      <Image src={banner} objectFit="cover" className="rounded-md" />
    </div>
  )
}

export default PostCard
