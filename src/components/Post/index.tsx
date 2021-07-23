import React from 'react'
import Link from 'next/link'
import { ListPosts } from '../../models/ListPosts'

export default function Post({ post }: { post: ListPosts }) {
  return (
    <div>
      <div>Posted on {post.date}</div>
      <h3>{post.title}</h3>

      <Link href={`/posts/${post.slug}`}> Read more </Link>
    </div>
  )
}
