import React from 'react'
import Link from 'next/link'
import { Posts } from '../../models/Posts'
import { PostStyle } from './PostStyle'

export default function Post({ post }: { post: Posts }) {
  return (
    <PostStyle>
      <header>
        <h1>{post.title}</h1>
        <em>Posted on {post.date}</em>
      </header>

      <Link href={`/posts/${post.slug}`}> Read more </Link>
    </PostStyle>
  )
}
