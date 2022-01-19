import React from 'react'
import Link from 'next/link'
import { Posts } from '../../models/Posts'
import { ListPostStyle } from './ListPostStyle'

export default function ListPost({ post }: { post: Posts }) {
  return (
    <ListPostStyle>
      <header>
        <section>
          <h1>{post.title}</h1>
        </section>
        <em>Posted on {post.date}</em>
      </header>

      <footer>
        <Link href={`/posts/${post.slug}`}> [ Read more ] </Link>
        <section className="tags">
          {post.tags.map(tag => (
            <a key={tag} href="#">
              {tag}
            </a>
          ))}
        </section>
      </footer>
    </ListPostStyle>
  )
}
