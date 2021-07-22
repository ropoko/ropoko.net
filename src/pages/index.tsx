import React from 'react'
import Head from 'next/head'
import matter from 'gray-matter'
import fs from 'fs'
import Post from '../components/Post'
import path from 'path'

export default function Home({ posts }) {
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
          <Post post={post} key={post} />
        ))}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const postDir = path.join(process.cwd(), 'src/posts')
  const files = fs.readdirSync(postDir)

  // Get slug and frontmatter from posts
  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join(postDir, filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return { slug, frontmatter }
  })

  return {
    props: {
      posts
    }
  }
}
