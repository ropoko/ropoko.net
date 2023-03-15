import styled from 'styled-components';

export const PostStyle = styled.div`
	width: 60%;
	margin: 2.4rem 0 2.4rem 23rem;

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		color: ${(props) => props.theme.colors.highlight};
	}

	header a {
		transition: font-size 0.2s;
	}

	header a:hover {
		text-decoration: underline;
	}

	main {
		margin: 1.6rem 0;
		font-size: 1.1em;
		word-wrap: break-word;
		font: 18px Inter, sans-serif;
		line-height: 1.5;
		color: ${(props) => props.theme.colors.text};
	}

	main h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: ${(props) => props.theme.colors.separator};
		margin-top: 1rem;
	}

	main a {
		color: ${(props) => props.theme.colors.highlight};
		transition: color 0.2s;
	}

	main a:hover {
		color: ${(props) => props.theme.colors.highlightLink};
	}

	main hr {
		border: 1px solid ${(props) => props.theme.colors.separator};
		opacity: 0.3;
		margin: 1rem 0;
	}

	main h1 {
		font-size: 3.2rem;
		margin: 1rem 0;
	}

	main p {
		text-align: justify;
		margin-bottom: 1rem;
	}

	main p img {
		width: 100%;
		height: 100%;
		margin: 1rem auto;
	}

	.image {
		max-width: 100%;
		max-height: 100%;
	}

	.updated {
		display: block;
	}

	main pre {
		width: 100%;
		overflow-x: auto;
		margin-bottom: 1rem;
		padding: 1rem 0;
	}

	@media (max-width: 930px) {
		margin: 2.4rem auto;
		width: 90%;
	}
`;
