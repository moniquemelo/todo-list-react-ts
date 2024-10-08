import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --gray-100: #F2F2F2;
  --gray-200: #D9D9D9;
  --gray-300: #808080;
  --gray-400: #333333;
  --gray-500: #262626;
  --gray-600: #1A1A1A;
  --gray-700: #0D0D0D;

  --blue: #4EA8DE;
  --blue-hover: #4EA8DE;
  --blue-dark: #1E6F9F;
  --purple: #8284FA;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-size: 62.5%;
  font-family: 'Inter', sans-serif;
  font-style: normal;
}

body {
  background: var(--gray-600);
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
}
`


export default GlobalStyles;