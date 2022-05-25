import styled from 'styled-components'

export const ListPostStyle = styled.div`
	margin: 3rem auto;
	width: 60%;
	min-width: 360px;
	max-width: 95%;

	padding: 0 0.5rem;

	h1 {
		font-size: 3rem;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	header section {
		max-width: calc(100% - 10rem);
	}

	header section h1 {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-right: 1rem;
	}

	footer {
		width: 100%;
		height: 2.5rem;
		padding-bottom: 0.8rem;
		border-bottom: 1px solid ${props => props.theme.colors.separator};
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

	footer .tags {
		overflow-x: clip;
		white-space: nowrap;
		text-overflow: clip;
	}

	footer .tags a {
		padding: 0.2rem;
		margin: 0 0.2rem;

		color: #000;
		border-radius: 5px;
		background: ${props => props.theme.colors.tags.background};
		border: ${props => props.theme.colors.tags.border} 1px solid;
	}

	a {
		color: ${props => props.theme.colors.highlight};
		transition: font-size 0.2s;
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
`
