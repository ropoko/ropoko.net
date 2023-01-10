import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Post } from './types/post.type';
import { Project } from './types/project.type';

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
				updated: data?.updated,
				content,
			};

			return post;
		});

		return posts;
	}

	static getProjects(): Project[] {
		const postDir = path.join(process.cwd(), 'src/projects');
		const filenames = fs.readdirSync(postDir);

		const projects: Project[] = filenames.map((name) => {
			// const proj_name = name.replace('.md', '');

			const file = fs.readFileSync(path.join(postDir, name), 'utf-8');

			const { data, content } = matter(file);

			const proj: Project = {
				name: data.name,
				subtitle: data.subtitle,
				description: data.description,
				icon: data.icon,
				content,
			};

			return proj;
		});

		return projects;
	}

	static getPost(slug: string): Post {
		const posts = this.getPosts();

		const post = posts.filter((post) => post.slug === slug);

		return post[0];
	}

	static getProject(name: string): Project {
		const projects = this.getProjects();

		const proj = projects.filter((proj) => proj.name === name);

		return proj[0];
	}
}
