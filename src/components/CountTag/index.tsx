import React from 'react'
import { StyledCountTag } from './CountTagStyle'

export default function CountTag({
	tags,
	counter
}: {
	tags: string[]
	counter: { [key: string]: number }
}) {
	return (
		<StyledCountTag>
			{tags.map((tag, index) => (
				<div key={index}>
					<p>{counter[tag]}</p>
					<strong>
						<a href={'https://asdas' + index + '.com'}> {tag} </a>
					</strong>
				</div>
			))}
		</StyledCountTag>
	)
}
