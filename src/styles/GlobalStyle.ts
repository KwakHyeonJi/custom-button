import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  border: none;
  outline: none;
  resize: none;
  user-select: none;
}

body {
  overflow-x: hidden;
  background: #f5f6fa;
  color: #455a64;
  font-family: 'Poppins', sans-serif;
}
  
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: initial;
}

button {
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
}

::-webkit-scrollbar {
  width: 5px;
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: lightgray;
}
`;

export default GlobalStyle;
