import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #f5f6fa;
  color: #455a64;
  font-family: 'Poppins', sans-serif;
}

button {
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  font-family: 'Poppins', sans-serif;letter-spacing: 0.5px;
}

input { 
  border: none;
  outline: none;
  font-family: 'Poppins', sans-serif;
}

::-webkit-scrollbar {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: lightgray;
}
`;

export default GlobalStyle;
