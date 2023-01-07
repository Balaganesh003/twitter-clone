import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'string',
    }),
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
    }),
    defineField({
      name: 'profileImg',
      title: 'Profile image',
      type: 'string',
    }),
    defineField({
      name: 'tweet',
      title: 'Tweet',
      description: 'Reference to the tweet this comment belongs to',
      type: 'reference',
      to: [{type: 'tweet'}],
    }),
  ],
})
