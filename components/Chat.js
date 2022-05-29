import { useState, useContext, useEffect } from 'react'
import { GunContext } from '../context/gunContext'
import { faker } from '@faker-js/faker'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { ChevronUpIcon } from '@heroicons/react/solid'
import ChatCard from './chatCard'
import Button from './Button'
import shiba from '../assets/shiba.png'
import Image from 'next/image'

const Chat = () => {
  const [message, setMessage] = useState('')
  const [bullishValue, setBullishValue] = useState(true)

  const { gun, getMessages, state } = useContext(GunContext)

  useEffect(() => {
    getMessages('GUN_REF_7')
  }, [])

  const formattedMessagesArray = () => {
    const uniqueArray = state.messages.filter((value, index) => {
      const _value = JSON.stringify(value)

      return (
        index ===
        state.messages.findIndex((obj) => {
          return JSON.stringify(obj) === _value
        })
      )
    })
    console.log(uniqueArray)
    return uniqueArray
  }

  const sendMessage = () => {
    if (message.trim() === '') return

    // const messagesRef = gun.get('GUN_REF')
    // const messagesRef = gun.get("GUN_REF_2")

    const messagesRef = gun.get('GUN_REF_7')

    const newMessage = {
      sender: faker.name.findName(),
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU',
      content: message.trim(),
      isBullish: bullishValue,
      createdAt: Date().substring(4, 11),
      messageId: Date.now(),
    }

    console.log(newMessage)

    messagesRef.set(newMessage)
    setMessage('')
  }

  return (
    <>
      <div className="min-w-full max-w-lg">
        <div className="flex justify-between">
          <p className="font-bold">Live Shiba Inu Chat</p>
          <p className="text-[#6188FF]">See more</p>
        </div>

        <br />

        <div className="max-h-ful rounded-xl bg-[#222531] p-5">
          <div className="flex justify-between">
            <div className="flex items-center justify-center">
              <div>
                <Image alt="" src={shiba} width={70} height={70} />
              </div>
              <div className="mr-10 text-left">
                <b>Sithum Dev</b>
                <p className="text-gray-400">@sithum_dev</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div
                className={
                  !bullishValue
                    ? 'text flex h-min cursor-pointer items-center rounded-lg border border-green-600 px-2 text-green-600 active:bg-green-600'
                    : 'flex h-min cursor-pointer items-center rounded-lg border border-green-600 bg-green-600 px-2 text-white'
                }
                onClick={() => setBullishValue(true)}
              >
                <ChevronUpIcon fill="#17C784" />
                <small className="ml-1">Bullish</small>
              </div>
              &nbsp; &nbsp;
              <div
                className={
                  bullishValue
                    ? 'flex h-min cursor-pointer items-center rounded-lg border border-red-600 px-2 text-[#EA3943] active:bg-red-500'
                    : 'flex h-min cursor-pointer items-center rounded-lg border border-red-600 bg-red-500 px-2 text-white'
                }
                onClick={() => setBullishValue(false)}
              >
                <ChevronDownIcon fill="#a52b2b" />
                <small className="ml-1">Bearish</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="text flex items-center text-green-600">
          <ChevronUpIcon fill="#22bc64" />
          <small className="ml-1">Bullish</small>
        </div>
        &nbsp; &nbsp;
        <div className="flex items-center text-red-500">
          <ChevronDownIcon fill="#a52b2b" />
          <small className="ml-1">Bearish</small>
        </div>
      </div>

      <input
        className="w-full rounded-xl bg-[#323546] p-4 outline-none"
        placeholder="What's happening on BTC?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <div className="align-center flex justify-end">
        <Button label="Post" onPress={sendMessage} />
      </div>
      {formattedMessagesArray()
        .slice(0)
        .reverse()
        .map((message, index) => (
          <ChatCard
            key={index}
            sender={message.sender}
            senderUsername={message.username}
            senderAvatar="https:/encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU"
            bullish={message.isBullish}
            timestamp={message.createdAt}
            content={message.content}
            likes="2.7K"
            comments="19K"
          />
        ))}
    </>
  )
}

export default Chat
