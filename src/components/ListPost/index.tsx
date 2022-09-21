import React from 'react';
import Link from 'next/link';
import { Posts } from '../../models/Posts';
import { ListPostStyle } from './ListPostStyle';

export default function ListPost({ post }: { post: Posts }) {
	return (
		<ListPostStyle>
			<header>
				<section>
					<h1 title={post.title}>{post.title}</h1>
				</section>
				<em>Posted on {post.date}</em>
			</header>

			<footer>
				<div className="footer-container">
					<Link href={`/posts/${post.slug}`}> [ Read more ] </Link>
					<section className="tags">
						<div className="aux-tags">
							{post.tags.map((tag) => (
								<a title={tag} key={tag} href={`/tags/${tag}`}>
									{tag}
								</a>
							))}
						</div>
					</section>
				</div>
			</footer>
		</ListPostStyle>
	);
}
