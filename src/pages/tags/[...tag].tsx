import React from 'react';
import { Post } from '../../shared/types/post.type';
import { Utils } from '../../shared/utils';
import ListPost from '../../shared/components/ListPost';

const Tag = ({ posts }: { posts: Post[] }) => {
	if (posts !== undefined && posts.length > 0) {
		return (
			<div>
				{posts.map((post, index) => (
					<ListPost key={index} post={post} />
				))}
			</div>
		);
	} else {
		return (
			<div>
				<h3> Nao foi possivel encontrar nenhum post :P</h3>
			</div>
		);
	}
};

export default Tag;

export const getStaticPaths = async () => {
	const posts = Utils.getPosts();

	const tags = posts.flatMap((post) => post.tags);

	const paths = tags.map((tag: string) => {
		{
			tag;
		}
	});

	return {
		paths,
		fallback: 'blocking',
	};
};

export const getStaticProps = async ({
	params: { tag },
}: {
	params: { tag: string };
}) => {
	const posts = Utils.getPosts();

	const filteredPosts = posts.filter((post) => post.tags.includes(tag[0]));

	return {
		props: {
			posts: filteredPosts,
		},
	};
};
