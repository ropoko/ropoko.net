import { Posts } from '../../models/Posts';
import { PostStyle } from './PostStyle';
import Link from 'next/link';
import { marked } from 'marked';
import NavHeading from '../NavHeading';

interface Props {
	post: Posts;
}

const Post: React.FC<Props> = ({ post }: { post: Posts }) => {
	return (
		<>
			<NavHeading post={post} />
			<PostStyle>
				<header>
					<Link href="/">[ Go back ]</Link>
					<p>Posted on {post.date}</p>
				</header>
				<main>
					<h1>{post.title}</h1>
					<div
						dangerouslySetInnerHTML={{
							__html: marked(post.content, {
								gfm: true,
								mangle: true,
								smartLists: true,
								smartypants: true,
							}),
						}}
					></div>
				</main>
			</PostStyle>
		</>
	);
};

export default Post;
