import Link from 'next/link';
import React from 'react';
import { CountTagStyled } from './CountTagStyle';

const CountTag = ({
	tags,
	counter,
}: {
	tags: string[];
	counter: { [key: string]: number };
}) => {
	return (
		<CountTagStyled>
			<ul>
				{tags.map((tag, index) => (
					<li key={index}>
						<div key={index}>
							<p className="counter">{counter[tag]}</p>
							<strong>
								<Link key={index} href={`tags/${tag}`}>
									{tag}
								</Link>
							</strong>
						</div>
					</li>
				))}
			</ul>
		</CountTagStyled>
	);
};

export default CountTag;
