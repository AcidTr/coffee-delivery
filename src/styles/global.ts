import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	background-color: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.baseText};
	-webkit-font-smoothing: antialiased;
}

body,
input,
textarea,
button {
	font-family: 'Roboto', sans-serif;
	font-weight: normal;
	font-size: 1rem;
	line-height: 130%;
    color: ${({ theme }) => theme.baseText};
}


h3 {
    font-family: 'Baloo 2', cursive;
	font-weight: bold;
	font-size: 1.125rem;
	line-height: 130%;
    color: ${({ theme }) => theme.baseTitle};
}
`;
