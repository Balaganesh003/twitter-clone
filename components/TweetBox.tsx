import React, { useState, useRef } from 'react'
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState<string>('')
  const { data: session } = useSession()

  const [image, setImage] = useState<string>('')
  const imageInputRef = useRef<HTMLInputElement>(null)

  const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<boolean>(false)

  const addImageToTweet = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    if (!imageInputRef.current?.value) return
    setImage(imageInputRef.current.value)
    imageInputRef.current.value = ''
    setImageUrlBoxIsOpen(false)
  }

  return (
    <div className="flex space-x-2 p-5">
      <img
        className="h-14 w-14 rounded-full object-cover mt-4"
        src={session?.user?.image || 'https://links.papareact.com/gll'}
        alt="profile"
      />
      <div className="flex flex-1 pl-2">
        <form className="flex flex-1 flex-col">
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            type="text"
            className="h-24 w-full text-xl outline-none border-none placeholder:text-xl"
            placeholder="What's happening??"></input>
          <div className="flex justify-between  items-center">
            <div className="flex space-x-2 text-twitter">
              <PhotographIcon
                onClick={() => setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)}
                className="h-6 w-6 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"
              />
              <SearchCircleIcon className="h-6 w-6" />
              <EmojiHappyIcon className="h-6 w-6" />
              <CalendarIcon className="h-6 w-6" />
              <LocationMarkerIcon className="h-6 w-6" />
            </div>

            <button
              disabled={!tweetMessage || !session}
              className="bg-twitter px-5 py-2 rounded-full font-bold text-white disabled:opacity-40">
              Tweet
            </button>
          </div>
          {imageUrlBoxIsOpen && (
            <form className="mt-5 flex rounded-lg bg-twitter/80 py-2 px-4">
              <input
                ref={imageInputRef}
                type="text"
                className=" flex-1 bg-transparent placeholder:text-white p-2 outline-none text-white"
                placeholder="Enter Image URL..."
              />
              <button
                type="submit"
                onClick={addImageToTweet}
                className="font-bold text-white">
                Add Image
              </button>
            </form>
          )}

          {image && (
            <img
              className="mt-10 h-40 w-full object-contain shadow-md rounded-xl"
              src={image}
            />
          )}
        </form>
      </div>
    </div>
  )
}

export default TweetBox
