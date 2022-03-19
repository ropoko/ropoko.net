import styled from 'styled-components'

export const StyledCountTag = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	div {
		display: flex;
		align-items: center;
		justify-content: center;

		width: fit-content;
		margin: 1rem 1rem 0 0;

		border: 1px solid #646464;
		border-radius: 3px;
		background: #2c2c2c;

		p {
			background: #101010;
		}

		p,
		strong {
			padding: 0.4rem;
		}
	}
`
