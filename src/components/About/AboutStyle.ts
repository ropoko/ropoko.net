import styled from 'styled-components';

export const AboutStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	.introduction p {
		line-height: 3;
	}

	.introduction::after {
		content: '';
		display: block;
		width: calc(100% + 2rem);
		height: 1px;
		background: ${(props) => props.theme.colors.separator};
		transform: translateX(-10px);
	}

	.content {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	.content section {
		border: 1px solid red;
	}
`;
