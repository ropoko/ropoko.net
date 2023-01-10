import styled from 'styled-components';

export const ProjectsStyle = styled.div`
	width: 75%;
	margin: 2rem auto;

	display: grid;
	gap: 2rem;
	grid-template-columns: 1fr;

	padding: 2rem;

	@media (max-width: 400px) {
		width: 90%;
	}
`;
