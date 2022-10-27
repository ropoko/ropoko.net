import React, { useContext } from 'react';
import { useTheme } from 'styled-components';
import { NavHeadingsContext } from '../../contexts/NavHeadingsContext';
import { ButtonPinStyle } from './ButtonPinStyle';

export default function ButtonPin() {
	const currentTheme = useTheme();

	const { pinned, setPinned } = useContext(NavHeadingsContext);

	return (
		<ButtonPinStyle state={pinned} onClick={() => setPinned(!pinned)}>
			<img src={currentTheme.img.pin} alt="pin" />
		</ButtonPinStyle>
	);
}
