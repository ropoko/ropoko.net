import React from 'react';
import Image from 'next/image';
import { AboutStyle } from '../styles/pages/about-style';
import Link from 'next/link';

const AboutPage = () => {
	const img =
		'https://avatars.githubusercontent.com/u/49417432?s=400&u=af9ff6eddae3945c6eb61b4ee4a8db97b426bf7a&v=4';

	return (
		<AboutStyle>
			<div className="column1">
				<Image src={img} alt="Me" width="200" height="200" />
				<h3>You can reach me on</h3>
				<div className="social-icons">
					<Link href={'https://github.com/ropoko'}>
						<a target="_blank">
							<Image src="/github.svg" alt="Me" width="24" height="24" />
						</a>
					</Link>
					<Link href={'https://www.linkedin.com/in/rodrigo-maganha/'}>
						<a target="_blank">
							<Image src="/linkedin.svg" alt="Me" width="24" height="24" />
						</a>
					</Link>
					<Link href={'https://twitter.com/ropoko_'}>
						<a target="_blank">
							<Image src="/twitter.svg" alt="Me" width="24" height="24" />
						</a>
					</Link>
				</div>
			</div>
			<div className="column2">
				<h1>Howdy!</h1>
				<h2>My name is Rodrigo!</h2>
				<p>I'm a developer, interested in linux and open source in general.</p>
				<p>In this blog you'll see stuff I've been working on or studying</p>
				<p>
					I'm currently working on{' '}
					<Link href={'https://ropoko.itch.io/wild-league'}>Wild League</Link> a
					real time strategy game using cards mechanics.
				</p>
				<p>
					The game is been developed in Lua, the language I'm also currently
					learning.
				</p>
			</div>
		</AboutStyle>
	);
};

export default AboutPage;
