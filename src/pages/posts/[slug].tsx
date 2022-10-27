import React from 'react';
import Head from 'next/head';
import { Post as PostType } from '../../shared/types/post.type';
import Post from '../../shared/components/Post';
import { Utils } from '../../shared/utils';

export default function PostPage({ post }: { post: PostType }) {
	return (
		<>
			<Head>
				<title>Ropoko | {post.title}</title>
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
