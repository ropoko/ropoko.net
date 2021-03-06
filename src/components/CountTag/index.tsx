import Link from 'next/link';
import React from 'react';
import { CountTagStyled } from './CountTagStyle';

export default function CountTag({
	tags,
	counter,
}: {
	tags: string[];
	counter: { [key: string]: number };
}) {
	return (
		<CountTagStyled>
			{tags.map((tag, index) => (
				<div key={index}>
					<p className="counter">{counter[tag]}</p>
					<strong>
						<Link key={index} href={`tags/${tag}`}>
							{tag}
						</Link>
					</strong>
				</div>
			))}
		</CountTagStyled>
	);
}
