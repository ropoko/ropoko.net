import React from 'react'
import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div>
      <div>Posted on {post.frontmatter.date}</div>
      <h3>{post.frontmatter.title}</h3>

      <Link href={`/posts/${post.slug}`}> Read more </Link>
    </div>
  )
}
