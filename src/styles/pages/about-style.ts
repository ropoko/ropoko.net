import styled from 'styled-components';

export const AboutStyle = styled.div`
	display: grid;
	align-items: center;
	height: 70vh;
	grid-template-columns: repeat(2, 1fr);

	margin 2rem auto;

	.column1, column2 {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.column1 {
		flex-direction: column;
		gap: 1rem;

		> span img {
			border-radius: 45%;
		}

		.social-icons {
			display: flex;
			gap: 0.6rem;

			img {
				cursor: pointer;
			}
		}
	}

	.column2 {
		justify-content: flex-start;
		line-height: 2;
		margin-left: -3rem;
	}

	@media (max-width: 530px) {
		display: flex;
		align-items: center;
		flex-direction: column;

		.column2 {
			margin-left: 0;
			padding: 1rem;
		}
	}
`;
