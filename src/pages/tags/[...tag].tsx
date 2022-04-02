import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Posts } from '../../models/Posts'
import ListPost from '../../components/ListPost'

export default function Tag({ posts }: { posts: Posts[] }) {
	console.log('meu dues', posts)
	if (posts !== undefined && posts.length > 0) {
		return (
			<div>
				{posts.map((post, index) => (
					<ListPost key={index} post={post} />
				))}
			</div>
		)
	} else {
		return (
			<div>
				<h3> Nao foi possivel encontrar nenhum post :P</h3>
			</div>
		)
	}
}

export const getStaticPaths = async () => {
	const postDir = path.join(process.cwd(), 'src/posts')
	const files = fs.readdirSync(postDir)

	const tags = files.map(filename => {
		const entireFile = fs.readFileSync(path.join(postDir, filename), 'utf-8')

		const { data } = matter(entireFile)

		return data.tags
	})

	const paths = tags.map((tag: string) => {
		return {
			params: { tag }
		}
	})

	return {
		paths,
		fallback: true
	}
}

export const getStaticProps = async ({
	params: { tag }
}: {
	params: { tag: string }
}) => {
	const postDir = path.join(process.cwd(), 'src/posts')
	const files = fs.readdirSync(postDir)

	const posts: Posts[] = files.map(file => {
		const slug: string = file.replace('.md', '')

		const entireFile = fs.readFileSync(path.join(postDir, file), 'utf-8')

		const { data, content } = matter(entireFile)

		const title: string = data.title
		const date: string = data.date
		const id: number = data.id
		const tags: string[] = data.tags

		return { id, slug, title, date, content, tags }
	})

	const filteredPosts = posts.filter(post => post.tags.includes(tag[0]))

	return {
		props: {
			posts: filteredPosts
		}
	}
}
