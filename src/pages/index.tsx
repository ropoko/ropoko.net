import React from 'react';
import Head from 'next/head';
import ListPost from '../components/ListPost';
import { Utils } from '../shared/utils';
import { Post } from '../shared/types/post.type';

const Home = ({ posts }: { posts: Post[] }) => {
	return (
		<div>
			<Head>
				<title>Ropoko | Blog</title>
			</Head>

			<main className="posts">
				{posts.map((post, i) => (
					<ListPost post={post} key={i} />
				))}
			</main>
		</div>
	);
};

export default Home;

export const getStaticProps = async () => {
	return {
		props: {
			posts: Utils.getPosts(),
		},
	};
};
