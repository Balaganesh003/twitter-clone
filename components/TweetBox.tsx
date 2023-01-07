import React, { useState } from 'react';
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline';

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState<string>('');

  return (
    <div className="flex space-x-2 p-5">
      <img
        className="h-14 w-14 rounded-full object-cover mt-4"
        src="https://links.papareact.com/gll"
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
              <PhotographIcon className="h-6 w-6 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <SearchCircleIcon className="h-6 w-6" />
              <EmojiHappyIcon className="h-6 w-6" />
              <CalendarIcon className="h-6 w-6" />
              <LocationMarkerIcon className="h-6 w-6" />
            </div>

            <button
              disabled={!tweetMessage}
              className="bg-twitter px-5 py-2 rounded-full font-bold text-white disabled:opacity-40">
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
