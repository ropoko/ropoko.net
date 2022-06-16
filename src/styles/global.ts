/* eslint-disable prettier/prettier */
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font: 16px 'Rajdhani', sans-serif;

		${({ theme }) => theme.title === 'light' && `
			font-weight: 500;
  	`}
  }

  a {
    text-decoration: none;
    color: inherit;
  }

	a:hover {
		text-decoration: underline;
	}

  button {
    cursor: pointer;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;
