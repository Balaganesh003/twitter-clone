import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { Comment } from '../../typings'
import { groq } from 'next-sanity'

const commentQuery = groq`*[_type == 'comment' && references(*[_type == 'tweet' && _id == '8f38a9e5-93e9-4ab4-bba5-da4152005231' ]._id)]{
  _id,
    ...
}`

type Data = Comment[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { tweetId } = req.query
  const comments: Comment[] = await sanityClient.fetch(commentQuery, {
    tweetId,
  })
  res.status(200).json(comments)
}
