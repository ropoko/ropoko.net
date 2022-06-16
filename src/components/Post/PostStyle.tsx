import styled from 'styled-components';

export const PostStyled = styled.div`
	width: 60%;
	margin: 2.4rem auto;

	a {
		display: contents; /* marked isn't collaborating with me */
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		color: ${props => props.theme.colors.highlight};
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
		text-align: justify;
		word-wrap: break-word;
		font-weight: 500;
	}

	main h1 {
		font-size: 3.2rem;
		margin: 1rem 0;
	}

	main p {
		display: flex;
		margin-bottom: 1rem;
	}

	main p img {
		width: 100%;
		height: 100%;
		max-width: 25rem;
		margin: 1rem auto;
	}

	@media (max-width: 530px) {
		width: 90%;
	}
`;
