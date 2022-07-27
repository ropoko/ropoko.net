import styled from 'styled-components';

export const NavHeadingStyle = styled.aside`
	background: ${(props) => props.theme.colors.background};
	width: 15rem;
	height: auto;
	position: fixed;
	top: 20%;
	font-size: 1.2rem;
	padding: 1rem;
	color: ${(props) => props.theme.colors.highlight};
	border: 1px solid ${(props) => props.theme.colors.separator};

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 0 0 0.3rem 0;
		border-bottom: 1px solid ${(props) => props.theme.colors.highlight};

		button {
			outline: 0;
			border: none;
			border-radius: 1rem;
			// padding: 0.5rem;
			background: transparent;
		}

		// strong::after {
		// 	content: '';
		// 	display: block;
		// 	width: 80%;
		// 	height: 1px;
		// 	background: whitesmoke;
		// 	margin-bottom: 0.6rem;
		// }
	}
`;
