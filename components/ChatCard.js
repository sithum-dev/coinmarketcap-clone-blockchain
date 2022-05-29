import { useEffect } from 'react'
import Comment from '../assets/svg/comment'
import Heart from '../assets/svg/heart'
import MoreHorizontal from '../assets/svg/moreHorizontal'
import Share from '../assets/svg/share'
import BearishFilled from './buttons/BearishFilled'
import BullishFilled from './buttons/BullishFilled'
import Image from 'next/image'

const ChatCard = ({
  content = '',
  timestamp,
  sender,
  bullish,
  senderAvatar,
  likes,
  comments,
}) => {
  return (
    <div className="mb-6 border-b border-gray-700 pb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div>
            <Image
              width={40}
              height={40}
              src={senderAvatar}
              className="rounded-full"
              alt=""
            />
          </div>
          <div className="ml-3 flex w-full">
            {sender}
            &nbsp; • &nbsp;
            <span className="text-gray-400">{timestamp}</span>
            &nbsp; • &nbsp;
            {bullish ? <BullishFilled /> : <BearishFilled />}
          </div>
        </div>

        <MoreHorizontal />
      </div>

      <p className="my-4 mt-2">{content}</p>

      <div className="flex justify-between">
        <div className="flex items-center">
          <Comment />
          <p className="ml-2 text-gray-400">{comments}</p>
        </div>

        <div className="flex items-center">
          <Heart />
          <p className="ml-2 text-gray-400">{likes}</p>
        </div>

        <div className="flex items-center">
          <Share />
          <p className="ml-2 text-gray-400">Share</p>
        </div>
      </div>
    </div>
  )
}

export default ChatCard
