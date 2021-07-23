import React from 'react'
import Head from 'next/head'
import matter from 'gray-matter'
import fs from 'fs'
import Post from '../components/Post'
import { ListPosts } from '../models/ListPosts'
import path from 'path'

export default function Home({ posts }: { posts: ListPosts[] }) {
  return (
    <div>
      <Head>
        <title>Ropoko | Portfolio</title>
      </Head>

      <main>
        <h1>Hello World!</h1>
      </main>
      <div className="posts">
        {posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const postDir = path.join(process.cwd(), 'src/posts')
  const files = fs.readdirSync(postDir)

  let i = 0

  const posts: ListPosts[] = files.map(file => {
    const slug: string = file.replace('.md', '')

    const entireFile = fs.readFileSync(path.join(postDir, file), 'utf-8')

    const { data } = matter(entireFile)

    const title: string = data.title
    const date: string = data.date

    return { id: i++, slug, title, date }
  })

  return {
    props: {
      posts
    }
  }
}
