import styled from 'styled-components';

export const ListPostStyle = styled.div`
	margin: 3rem auto;
	width: 60%;
	min-width: 360px;
	max-width: 95%;

	h1 {
		font-size: 3rem;
	}

	h1:hover {
		color: ${(props) => props.theme.colors.highlight};
		text-decoration: underline;
		cursor: pointer;
	}

	a {
		color: ${(props) => props.theme.colors.highlight};
		transition: font-size 0.2s;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		> section {
			max-width: calc(100% - 10rem);

			h1 {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				margin-right: 1rem;
			}
		}

		.dates {
			display: flex;
			flex-direction: column-reverse;
			align-items: flex-start;

			.updated {
				display: block;
				margin-bottom: 1rem;
			}
		}
	}

	footer {
		width: 100%;
		height: 2.8rem;
		overflow-x: auto;
	}

	footer .footer-container {
		height: 100%;
		width: 100%;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	footer .footer-container > a {
		white-space: nowrap;
		margin-right: 40px;
	}

	footer .tags a {
		padding: 0.2rem;
		margin: 0 0.2rem;

		color: ${(props) => props.theme.colors.tags.text};
		font-weight: 600;
		border-radius: 5px;
		background: ${(props) => props.theme.colors.tags.backgroundName};
		border: ${(props) => props.theme.colors.tags.border} 1px solid;
	}

	@media (max-width: 1080px) {
		width: 80%;
	}

	@media (max-width: 720px) {
		width: 95%;
	}

	@media (max-width: 530px) {
		header section {
			max-width: 100%;
		}

		header section h1 {
			width: 270px;
		}
	}
`;
