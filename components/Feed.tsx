import { RefreshIcon } from '@heroicons/react/outline';
import React from 'react';
import { Tweet } from '../typings';
import TweetBox from './TweetBox';
import TweetComponent from './Tweet';

interface Props {
  tweets: Tweet[];
}

const Feed = ({ tweets }: Props) => {
  return (
    <div className="lg:col-span-5 col-span-7 border-x">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 font-semibold text-xl">Home</h1>
        <RefreshIcon className="w-8 h-8 cursor-pointer text-twitter mt-5 mr-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
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
  );
};

export default Feed;
