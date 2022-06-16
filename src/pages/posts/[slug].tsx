import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Posts } from '../../models/Posts';
import Post from '../../components/Post';
import Head from 'next/head';

export default function PostPage({ post }: { post: Posts }) {
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
	const postDir = path.join(process.cwd(), 'src/posts');
	const files = fs.readdirSync(postDir);

	const paths = files.map(filename => ({
		params: { slug: filename.replace('.md', '') }
	}));

	return {
		paths,
		fallback: false
	};
};

export const getStaticProps = async ({
	params: { slug }
}: {
	params: { slug: string };
}) => {
	const postDir = path.join(process.cwd(), 'src/posts');

	const entireFile = fs.readFileSync(path.join(postDir, `${slug}.md`), 'utf-8');

	const { data, content } = matter(entireFile);

	const id: number = data.id;
	const tags: string[] = data.tags;

	const post: Posts = {
		id,
		slug,
		date: data.date,
		title: data.title,
		content,
		tags
	};

	return {
		props: {
			post
		}
	};
};
