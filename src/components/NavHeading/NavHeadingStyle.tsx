import styled from 'styled-components';
import { PinState } from '../../models/PinState';

export const NavHeadingStyle = styled.aside<PinState>`
	background: ${(props) => props.theme.colors.background};
	width: 15rem;
	height: auto;
	position: fixed;
	top: 20%;
	font-size: 1.2rem;
	padding: 1rem;
	color: ${(props) => props.theme.colors.highlight};
	border: 1px solid ${(props) => props.theme.colors.separator};

	overflow: hidden;

	// pin
	${({ state }) =>
		state === true
			? `
		visibility: visible;
  `
			: `
		visibility: hidden;
	`}

	header {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 0 0 0.3rem 0;
		border-bottom: 1px solid ${(props) => props.theme.colors.highlight};
	}

	@media (max-width: 780px) {
		display: none;
	}
`;
