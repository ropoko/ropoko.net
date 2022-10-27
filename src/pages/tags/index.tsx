import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import CountTag from '../../shared/components/CountTag';

const Tags = ({
	tags,
	counts,
}: {
	tags: string[];
	counts: { [key: string]: number };
}) => {
	return (
		<>
			<Head>
				<title>Ropoko | Tags</title>
			</Head>
			<CountTag tags={tags} counter={counts} />
		</>
	);
};

export default Tags;

export const getStaticProps = async () => {
	const postDir = path.join(process.cwd(), 'src/posts');
	const files = fs.readdirSync(postDir);

	const counts: { [key: string]: number } = {};

	files.map((file) => {
		const entireFile = fs.readFileSync(path.join(postDir, file), 'utf-8');

		const { data } = matter(entireFile);

		data.tags.forEach(function (tag: string) {
			counts[tag] = (counts[tag] || 0) + 1;
		});

		return counts;
	});

	const tags: string[] = Object.keys(counts);

	return {
		props: {
			tags,
			counts,
		},
	};
};
