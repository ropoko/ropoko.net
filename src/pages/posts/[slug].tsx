import React from 'react';
import Head from 'next/head';
import { Post as PostType } from '../../shared/types/post.type';
import Post from '../../shared/components/Post';
import { Utils } from '../../shared/utils';

export default function PostPage({ post }: { post: PostType }) {
	const logo =
		'https://avatars.githubusercontent.com/u/49417432?s=400&u=af9ff6eddae3945c6eb61b4ee4a8db97b426bf7a&v=4';

	return (
		<>
			<Head>
				<title>Ropoko | {post.title}</title>
				<meta name="og:title" content={post.title} />
				<meta name="og:image" content={logo} />
				<meta name="revised" content={post.updated} />
				<meta name="Classification" content={post.slug} />
			</Head>
			<Post post={post} />
		</>
	);
}

export const getStaticPaths = async () => {
	const posts = Utils.getPosts();

	const paths = posts.map((post) => {
		return {
			params: {
				slug: post.slug.replace('.md', ''),
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({
	params: { slug },
}: {
	params: { slug: string };
}) => {
	const post = Utils.getPost(slug);

	return {
		props: {
			post,
		},
	};
};
