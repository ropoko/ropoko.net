import styled from 'styled-components';

export const BookmarkStyled = styled.div`
	border: 1px solid ${(props) => props.theme.colors.separator};
	border-radius: 1rem;

	display: flex;
	align-items: flex-start;

	gap: 2rem;
	padding: 1rem;

	:hover {
		background: ${(props) => props.theme.colors.header};
		cursor: pointer;
	}

	> img {
		align-self: center;
		width: 8rem;
		padding-right: 0.8rem;
		border-right: 1px solid ${(props) => props.theme.colors.separator};
	}

	.text {
		h2 {
			display: block;
		}
	}

	@media (max-width: 580px) {
		flex-direction: column;

		> img {
			align-self: center;
			border: none;
		}
	}
`;
