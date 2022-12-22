import styled from 'styled-components';

export const PostStyle = styled.div`
	width: 60%;
	margin: 2.4rem 0 2.4rem 20rem;

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
		font-weight: 500;
	}

	main a {
		color: ${(props) => props.theme.colors.highlight};
		transition: color 0.2s;
	}

	main a:hover {
		color: ${(props) => props.theme.colors.highlightLink};
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

	main pre {
		width: 100%;
		overflow-x: auto;
		margin-bottom: 1rem;
		padding: 1rem 0;
	}

	@media (max-width: 780px) {
		margin: 2.4rem auto;
	}

	@media (max-width: 530px) {
		width: 90%;
	}
`;
