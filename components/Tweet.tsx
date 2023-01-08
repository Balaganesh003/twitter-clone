import React, { useState, useEffect } from 'react'
import { Tweet } from '../typings'
import TimeAgo from 'react-timeago'
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from '@heroicons/react/outline'
import { fetchComments } from '../utils/fetchComments'
import { Comment } from '../typings'

interface Props {
  tweet: Tweet
}

const Tweet = ({ tweet }: Props) => {
  const [comments, setComments] = useState<Comment[]>([])
  const refreshComments = async () => {
    const comments = await fetchComments(tweet._id)
    setComments(comments)
  }

  useEffect(() => {
    refreshComments()
  }, [])

  return (
    <div className="flex flex-col space-x-3 border-y p-5 border-gray-100">
      <div className="flex space-x-3">
        <img
          className="rounded-full w-10 h-10 "
          src={tweet.profileImg}
          alt="profileImg"
        />
        <div className="flex flex-col flex-1">
          <div className="flex items-start flex-col sm:flex-row sm:items-center">
            <p className="mr-1 font-bold">{tweet.username}</p>

            <div className="flex space-x-1">
              <p className=" text-sm text-gray-500 ">
                @{tweet.username.replace(/ /g, '').toLowerCase()}
              </p>
              <TimeAgo
                className="text-gray-500 text-sm"
                date={tweet._createdAt}
              />
            </div>
          </div>
          <p className="pt-1">{tweet.text}</p>
          {tweet.image && (
            <img
              src={tweet.image}
              alt="tweetImage"
              className="m-5 ml-0 mb-1 object-cover max-h-60 rounded-lg shadow-sm"
            />
          )}
        </div>
      </div>
      {/* Icons */}
      <div className="flex justify-around  mt-5">
        <div className=" flex items-center cursor-pointer space-x-3 text-gray-400">
          <ChatAlt2Icon className="h-5 w-5 " />
          <p className="text-gray-500 text-sm">{comments.length}</p>
        </div>

        <div className=" flex items-center cursor-pointer space-x-3 text-gray-400">
          <SwitchHorizontalIcon className="h-5 w-5 " />
        </div>

        <div className=" flex items-center cursor-pointer space-x-3 text-gray-400">
          <HeartIcon className="h-5 w-5 " />
        </div>

        <div className=" flex items-center cursor-pointer space-x-3 text-gray-400">
          <UploadIcon className="h-5 w-5 " />
        </div>
        {/* Comment Box */}
      </div>
      {comments.length > 0 && (
        <div className="mt-5 max-h-55  space-y-5 overflow-y-scroll  border-t border-gray-100 ">
          {comments.map((comment) => (
            <div key={comment._id} className="mt-5   flex space-x-2 relative">
              <hr className="absolute left-5 top-9 h-12 border-x border-twitter" />
              <img
                src={comment.profileImg}
                className="h-7 w-7  rounded-full object-cover"
                alt="profileImg"
              />
              <div>
                <div className="flex items-center">
                  <p className="mr-1 font-bold">{comment.username}</p>
                  <p className="hidden md:inline text-gray-500 text-sm">
                    @{comment.username.replace(/ /g, '').toLowerCase()}
                  </p>
                  <TimeAgo date={comment._createdAt} />
                </div>
                <p>{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Tweet
