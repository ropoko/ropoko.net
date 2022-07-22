import styled from 'styled-components';

export const NavHeadingStyle = styled.aside`
	background: #2c2c25;
	width: 15rem;
	height: auto;
	position: fixed;
	top: 20%;
	font-size: 1.2rem;
	padding: 1rem;

	strong::after {
		content: '';
		display: block;
		width: 80%;
		height: 1px;
		background: whitesmoke;
		margin-bottom: 0.6rem;
	}
`;
