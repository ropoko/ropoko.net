import React, { useContext } from 'react';
import { NavHeadingStyle } from './NavHeadingStyle';
import DOMPurify from 'isomorphic-dompurify';
import ButtonPin from '../ButtonPin';
import { NavHeadingsContext } from '../../contexts/NavHeadingsContext';
import { Post } from '../../types/post.type';

export default function NavHeading({ post }: { post: Post }) {
	const getHeadings = (post: Post): string => {
		const content: string = post.content;
		const lines = content.split('\n');

		const findHashtag = /#/g;

		let html = '<ul>';

		for (let i = 0; i < lines.length; i++) {
			if (lines[i].startsWith('#')) {
				const quantityHashtag = (lines[i].match(findHashtag) || []).length;

				lines[i] = lines[i].replaceAll(findHashtag, '');

				const addHifen =
					'#' + lines[i].trim().replaceAll(' ', '-').toLowerCase();

				if (quantityHashtag > 1)
					html += `<ul><li><a href="${addHifen}">${lines[i]}</a></li></ul>`;
				else html += `<li><a href="${addHifen}">${lines[i]}</a></li>`;
			}
		}

		html += '</ul>';
		return DOMPurify.sanitize(html, { SANITIZE_DOM: true });
	};

	const { pinned } = useContext(NavHeadingsContext);

	return (
		<NavHeadingStyle state={pinned}>
			<header>
				<strong>Headings </strong>
				<ButtonPin />
			</header>
			<section
				dangerouslySetInnerHTML={{
					__html: getHeadings(post),
				}}
			></section>
		</NavHeadingStyle>
	);
}
