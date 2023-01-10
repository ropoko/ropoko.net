import React from 'react';
import Document, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (initialProps.styles, sheet.getStyleElement()),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="reply-to" content="rodrigostramantinoli@gmail.com" />
					<meta
						name="author"
						content="Ropoko, rodrigostramantinoli@gmail.com"
					/>
					<meta
						name="description"
						content="Personal blog where you'll see posts and tutorials"
					/>
					<meta
						name="keywords"
						content="Personal, Blog, Tech, JavaScript, Lua, CSS, HTML"
					/>
					<meta
						name="subject"
						content="Personal thoughts about tech and other stuff"
					/>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						// eslint-disable-next-line max-len
						href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@400;500;600&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
