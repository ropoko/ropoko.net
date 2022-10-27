import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Post } from './types/post.type';

export class Utils {
	static getPosts(): Post[] {
		const postDir = path.join(process.cwd(), 'src/posts');
		const filenames = fs.readdirSync(postDir);

		const posts: Post[] = filenames.map((name) => {
			const slug = name.replace('.md', '');

			const file = fs.readFileSync(path.join(postDir, name), 'utf-8');

			const { data, content } = matter(file);

			const post: Post = {
				slug,
				title: data.title,
				date: data.date,
				tags: data.tags,
				content,
			};

			return post;
		});

		return posts;
	}
}
