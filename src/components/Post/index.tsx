import React from 'react'
import Link from 'next/link'
import { ListPosts } from '../../pages'

export default function Post({ post }: ListPosts) {
  console.log(post)

  return (
    <div>
      <div>Posted on {post.frontmatter.date}</div>
      <h3>{post.frontmatter.title}</h3>

      <Link href={`/posts/${post.slug}`}> Read more </Link>
    </div>
  )
}
