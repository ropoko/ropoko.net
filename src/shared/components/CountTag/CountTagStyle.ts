import styled from 'styled-components';

export const CountTagStyled = styled.div`
	ul {
		list-style: none;
		columns: 5;
	}

	div {
		display: flex;
		align-items: center;
		justify-content: center;

		width: fit-content;
		margin: 1rem 1rem 0 0;

		border: 1px solid ${(props) => props.theme.colors.tags.border};
		border-radius: 3px;
		background: ${(props) => props.theme.colors.tags.backgroundName};

		p.counter {
			background: ${(props) => props.theme.colors.tags.backgroundCounter};
		}

		p,
		strong {
			padding: 0.4rem;
			color: ${(props) => props.theme.colors.tags.text};
		}
	}

	@media (max-width: 780px) {
		ul {
			columns: 2;
		}
	}

	@media (max-width: 530px) {
		ul {
			columns: 1;
		}
	}
`;
