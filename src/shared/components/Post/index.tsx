import { Post as PostType } from '../../../shared/types/post.type';
import { PostStyle } from './PostStyle';
import Link from 'next/link';
import { marked } from 'marked';
import NavHeading from '../NavHeading';

import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';

interface Props {
	post: PostType;
}

const Post: React.FC<Props> = ({ post }: { post: PostType }) => {
	return (
		<>
			<NavHeading post={post} />
			<PostStyle>
				<header>
					<Link href="/">[ Go back ]</Link>
					<p>
						Posted: <time>{post.date}</time>
						{post.updated && (
							<span className="updated">
								Updated: <time>{post.updated}</time>
							</span>
						)}
					</p>
				</header>
				<main>
					<h1>{post.title}</h1>
					<div
						dangerouslySetInnerHTML={{
							__html: marked(post.content, {
								renderer: new marked.Renderer(),
								highlight: function (code, lang) {
									const hightlight = hljs;
									const language = hightlight.getLanguage(lang)
										? lang
										: 'plaintext';
									return hljs.highlight(code, { language }).value;
								},
								langPrefix: 'hljs lang-',
								gfm: true,
								mangle: true,
								smartLists: true,
								smartypants: true,
								pedantic: false,
								breaks: false,
								xhtml: false,
							}),
						}}
					></div>
				</main>
			</PostStyle>
		</>
	);
};

export default Post;
