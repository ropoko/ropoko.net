import styled from 'styled-components'

export const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 0.8rem 0;

	.theme-switch {
		display: flex;
		align-items: center;
	}

	.theme-switch img {
		border-radius: 1rem;
		cursor: pointer;
	}

	.theme-switch button {
		margin: 5px 0 0 1rem;
		border: none;
		background: transparent;
		outline: none;
	}

	.theme-switch button img {
		width: inherit;
		height: inherit;
	}

	.menu a {
		margin: 0 0.3rem;
	}

	.menu a:hover {
		text-decoration: underline;
	}
`
