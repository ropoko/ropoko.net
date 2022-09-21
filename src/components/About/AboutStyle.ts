import styled from 'styled-components';

export const AboutStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	.introduction p {
		line-height: 3;
	}

	a {
		color: ${(props) => props.theme.colors.highlight};
	}

	p {
		margin-top: 1rem;
	}

	.introduction::after {
		content: '';
		display: block;
		width: calc(100% + 2rem);
		height: 1px;
		background: ${(props) => props.theme.colors.separator};
		transform: translateX(-10px);
	}

	.grid-content {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 8rem;
		padding: 2rem;
	}

	@media (max-width: 550px) {
		.grid-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.introduction p {
			line-height: 1;
			margin: 1rem 0;
		}

		.introduction::after {
			width: 80%;
			transform: translateX(0);
		}
	}
`;
