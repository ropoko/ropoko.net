import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string;

		colors: {
			header: string;
			background: string;
			text: string;
			highlight: string;
			highlightLink: string;
			separator: string;
			tags: {
				backgroundCounter: string;
				backgroundName: string;
				border: string;
				text: string;
			};
		};
	}
}
