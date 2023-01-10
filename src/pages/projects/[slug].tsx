import hljs from 'highlight.js';
import { marked } from 'marked';
import React from 'react';
import { Project } from '../../shared/types/project.type';
import { Utils } from '../../shared/utils';
import { ProjectStyle } from '../../styles/pages/project-style';

const ProjectPage = ({ project }: { project: Project }) => {
	return (
		<ProjectStyle>
			<div
				dangerouslySetInnerHTML={{
					__html: marked(project.content, {
						renderer: new marked.Renderer(),
						highlight: function (code, lang) {
							const hightlight = hljs;
							const language = hightlight.getLanguage(lang)
								? lang
								: 'plaintext';
							return hljs.highlight(code, { language }).value;
						},
						langPrefix: 'hljs lang-',
						gfm: true,
						mangle: true,
						smartLists: true,
						smartypants: true,
						pedantic: false,
						breaks: false,
						xhtml: false,
					}),
				}}
			></div>
		</ProjectStyle>
	);
};

export default ProjectPage;

export const getStaticPaths = async () => {
	const projects = Utils.getProjects();

	const paths = projects.map((proj) => {
		return {
			params: {
				slug: proj.name,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({
	params: { slug },
}: {
	params: { slug: string };
}) => {
	const project = Utils.getProject(slug);

	return {
		props: {
			project,
		},
	};
};
