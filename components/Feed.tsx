import { RefreshIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { Tweet } from '../typings'
import TweetBox from './TweetBox'
import TweetComponent from './Tweet'
import { fetchTweets } from '../utils/fetchTweets'
import toast from 'react-hot-toast'

interface Props {
  tweets: Tweet[]
}

const Feed = ({ tweets: tweetsProp }: Props) => {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProp)

  const handlerefreshFeed = async () => {
    const refreshToast = toast.loading('Refreshing...')
    const tweets = await fetchTweets()
    setTweets(tweets)
    toast.success('Feed Updated!', { id: refreshToast })
  }

  return (
    <div className="lg:col-span-5 col-span-7 border-x ">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 font-semibold text-xl">Home</h1>
        <RefreshIcon
          onClick={handlerefreshFeed}
          className="w-8 h-8 cursor-pointer text-twitter mt-5 mr-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
        />
      </div>
      {/* TweetBox */}
      <div>
        <TweetBox />
      </div>
      {/* Feed */}
      <div>
        {tweets.map((tweet) => (
          <TweetComponent key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  )
}

export default Feed
