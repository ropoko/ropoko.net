import { Posts } from '../../models/Posts'
import { PostContentStyled } from './PostContentStyle'
import Link from 'next/link'
import marked from 'marked'

interface Props {
  post: Posts
}

const PostContent: React.FC<Props> = ({ post }: { post: Posts }) => {
  return (
    <PostContentStyled>
      <header>
        <Link href="/">Go back</Link>
        <p>Posted on {post.date}</p>
      </header>
      <main>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: marked(post.content) }}></div>
      </main>
    </PostContentStyled>
  )
}

export default PostContent
