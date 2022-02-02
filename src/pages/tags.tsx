import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function Tags({ tags }: { tags: string[] }) {
	return (
		<div>
			<strong> hello </strong>
			{tags.map((tag, index) => (
				<h3 key={index}> {tag} </h3>
			))}
		</div>
	)
}

export const getStaticProps = async () => {
	const postDir = path.join(process.cwd(), 'src/posts')
	const files = fs.readdirSync(postDir)

	const tags: string[] = files.map(file => {
		// const slug: string = file.replace('.md', '')

		const entireFile = fs.readFileSync(path.join(postDir, file), 'utf-8')

		const { data } = matter(entireFile)

		return data.tags
	})

	return {
		props: {
			tags
		}
	}
}
