import React from 'react'
import Head from 'next/head'
import matter from 'gray-matter'
import fs from 'fs'
import Post from '../components/Post'
import { Posts } from '../models/Posts'
import path from 'path'

export default function Home({ posts }: { posts: Posts[] }) {
  return (
    <div>
      <Head>
        <title>Ropoko | Portfolio</title>
      </Head>

      <main className="posts">
        {posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const postDir = path.join(process.cwd(), 'src/posts')
  const files = fs.readdirSync(postDir)

  const posts: Posts[] = files.map(file => {
    const slug: string = file.replace('.md', '')

    const entireFile = fs.readFileSync(path.join(postDir, file), 'utf-8')

    const { data, content } = matter(entireFile)

    const title: string = data.title
    const date: string = data.date
    const id: number = data.id

    return { id, slug, title, date, content }
  })

  return {
    props: {
      posts
    }
  }
}
