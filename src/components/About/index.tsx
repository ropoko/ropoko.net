import React from 'react';
import { StyledAbout } from './AboutStyle';

export default function About() {
	return (
		<StyledAbout>
			<h1>Oi, meu nome é Rodrigo!</h1>
			<section className="introduction">
				<p>sou estudante, atualmente cursando ciência da computação.</p>
			</section>
			<h3>trabalhando...</h3>
			{/* <div className="content">
				<h3>trabalhando...</h3>
				<section className="interests">
					<h2>Interesses</h2>
				</section>
				<section className="study">
					<h2>Estudo</h2>
				</section>
			</div> */}
		</StyledAbout>
	);
}
