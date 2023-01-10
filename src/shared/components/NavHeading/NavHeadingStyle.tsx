import styled from 'styled-components';

export const NavHeadingStyle = styled.aside`
	background: ${(props) => props.theme.colors.background};
	max-width: 20rem;
	height: auto;
	position: fixed;
	top: 20%;
	font-size: 1.2rem;
	padding: 1rem 0;

	overflow: hidden;

	header {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 0 0 0.3rem 0;
		border-bottom: 1px solid ${(props) => props.theme.colors.highlight};
	}

	strong {
		margin-left: 1rem;
	}

	li:hover {
		color: ${(props) => props.theme.colors.highlight};
	}

	@media (max-width: 930px) {
		display: none;
	}
`;
