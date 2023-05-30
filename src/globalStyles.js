import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after ::before {
  box-sizing: inherit;
}

body {
  max-width: 1000px;
  margin: 100px auto;
  font-family: 'roboto', sans-serif;
  background-color: rgb(214, 214, 214);
}
`;

export { GlobalStyles };
