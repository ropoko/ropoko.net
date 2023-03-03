import hljs from 'highlight.js';
import { marked } from 'marked';
import Head from 'next/head';
import React from 'react';
import { Project } from '../../shared/types/project.type';
import { Utils } from '../../shared/utils';
import { ProjectStyle } from '../../styles/pages/project-style';

const ProjectPage = ({ project }: { project: Project }) => {
	const logo =
		'https://avatars.githubusercontent.com/u/49417432?s=400&u=af9ff6eddae3945c6eb61b4ee4a8db97b426bf7a&v=4';

	return (
		<ProjectStyle>
			<Head key={project.name}>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@ropoko_" />
				<meta name="twitter:title" content={project.name} />
				<meta name="twitter:image" content={logo} />
				<meta name="twitter:description" content={project.description} />

				<meta property="og:title" content={project.name} />
				<meta property="og:image" content={logo} />
				<meta property="og:description" content={project.description} />
			</Head>
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
