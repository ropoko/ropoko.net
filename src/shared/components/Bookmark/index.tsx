import React from 'react';
import { Project } from '../../types/project.type';
import { BookmarkStyled } from './BookmarkStyle';

const Bookmark = ({ project }: { project: Project }) => {
	const redirect = () => {
		window.location.href = `projects/${project.name}`;
	};

	return (
		<BookmarkStyled onClick={redirect}>
			<img className="icon" src={project.icon} alt={`${project.name} icon`} />
			<div className="text">
				<h2>{project.name}</h2>
				<p>{project.subtitle}</p>
				<br />
				<strong>Description: </strong>
				<p>{project.description || 'No Description'}</p>
			</div>
		</BookmarkStyled>
	);
};

export default Bookmark;
