import React, { useState } from 'react';
import type { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
import Header from '../shared/components/Header';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	const [theme, setTheme] = useState(dark);

	const toggleTheme = () => {
		setTheme(theme.title === 'light' ? dark : light);
	};

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header toggleTheme={toggleTheme} />
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default MyApp;
