import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import { Post } from '../../models/Post'

export default function PostPage({ post }: { post: Post }) {
  return (
    <>
      <Link href="/">Go back</Link>
      <div>
        <h1>{post.title}</h1>
        <div>Posted on {post.date}</div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: marked(post.content) }}></div>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const postDir = path.join(process.cwd(), 'src/posts')
  const files = fs.readdirSync(postDir)

  const paths = files.map(filename => ({
    params: { slug: filename.replace('.md', '') }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({
  params: { slug }
}: {
  params: { slug: string }
}) => {
  const postDir = path.join(process.cwd(), 'src/posts')

  const entireFile = fs.readFileSync(path.join(postDir, `${slug}.md`), 'utf-8')

  const { data, content } = matter(entireFile)

  const post: Post = {
    date: data.date,
    title: data.title,
    content
  }

  return {
    props: {
      post
    }
  }
}
