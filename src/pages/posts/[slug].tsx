import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'

export default function PostPage({
  frontmatter: { title, date },
  content,
  slug
}) {
  return (
    <>
      <Link href="/">Go back</Link>
      <div>
        <h1>{title}</h1>
        <div>Posted on {date}</div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
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

  console.log(paths)

  return {
    paths,
    fallback: false
  }
}

interface Post {
  frontmatter: {
    title: string
    date: string
  }
  content: string
  slug: string
}

export const getStaticProps = async ({ params: { slug } }) => {
  const postDir = path.join(process.cwd(), 'src/posts')

  const markdownWithMeta = fs.readFileSync(
    path.join(postDir, `${slug}.md`),
    'utf-8'
  )

  const { data: frontmatter, content }: Post = matter(markdownWithMeta)
  return {
    props: {
      frontmatter,
      content,
      slug
    }
  }
}
