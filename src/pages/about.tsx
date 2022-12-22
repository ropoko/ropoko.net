import React from 'react';
import Image from 'next/image';
import { AboutStyle } from '../styles/pages/about-style';

const AboutPage = () => {
	const img =
		'https://avatars.githubusercontent.com/u/49417432?s=400&u=af9ff6eddae3945c6eb61b4ee4a8db97b426bf7a&v=4';

	return (
		<AboutStyle>
			<div className="column1">
				<Image src={img} alt="Me" width="70" height="70" />
				<div className="social-icons">
					<Image src="/github.svg" alt="Me" width="24" height="24" />
					<Image src="/linkedin.svg" alt="Me" width="24" height="24" />
					<Image src="/twitter.svg" alt="Me" width="24" height="24" />
				</div>
			</div>
			<div className="column2">
				<h1>Howdy!</h1>
			</div>
		</AboutStyle>
	);
};

export default AboutPage;
