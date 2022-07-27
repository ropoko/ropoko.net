import styled from 'styled-components';
import { PinState } from '../../models/PinState';

export const ButtonPinStyle = styled.button<PinState>`
	background: transparent;
	border: none;
	outline: none;

	position: absolute;
	top: -5px;
	right: 0;

	visibility: visible;

	${({ state }) =>
		!state &&
		`
		right: unset;
		left: 0;
  `}
`;
