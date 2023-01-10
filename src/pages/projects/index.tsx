import React from 'react';
import Bookmark from '../../shared/components/Bookmark';
import { Project } from '../../shared/types/project.type';
import { Utils } from '../../shared/utils';
import { ProjectsStyle } from '../../styles/pages/projects-style';

const ProjectsPage = ({ projects }: { projects: Project[] }) => {
	return (
		<ProjectsStyle>
			{projects.map((proj, i) => (
				<Bookmark key={i} project={proj}></Bookmark>
			))}
		</ProjectsStyle>
	);
};

export default ProjectsPage;

export const getStaticProps = async () => {
	const projects = Utils.getProjects();

	return {
		props: {
			projects,
		},
	};
};
