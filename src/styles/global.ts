import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #f0f2f5
  --red: #e52e2D
  --blue: #5422cc;

  --blue-light: #6933ff;

  --text-title: #363f5f
  --text-body: #969cb3

  --shape: #FFFFFF;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* font-size: 16 (Desktop) */
html {
  @media (max-width: 1000px) {
    font-size: 93.75%;
  }

  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-not-allowed;
}
`;