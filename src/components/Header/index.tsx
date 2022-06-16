import React, { useState } from 'react';
import { StyledHeader } from './HeaderStyle';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
	toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
	const img =
		'https://avatars.githubusercontent.com/u/49417432?s=400&u=af9ff6eddae3945c6eb61b4ee4a8db97b426bf7a&v=4';

	const [theme, setTheme] = useState('/sun.svg');

	function changeTheme() {
		toggleTheme();

		setTheme(theme === '/sun.svg' ? '/moon.svg' : '/sun.svg');
	}

	return (
		<StyledHeader>
			<div className="theme-switch">
				<Link href="/" passHref>
					<a>
						<Image src={img} alt="Me" width="55" height="55" />
					</a>
				</Link>
				<button onClick={changeTheme}>
					<Image src={theme} alt="theme" width="24" height="24" />
				</button>
			</div>

			<div className="menu">
				<Link href="/projects">[ Projects ]</Link>
				<Link href="/about">[ About me ]</Link>
				<Link href="/tags">[ Tags ]</Link>
			</div>
		</StyledHeader>
	);
};

export default Header;
