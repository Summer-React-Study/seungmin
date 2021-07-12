import React from 'react';
import { createGlobalStyle } from 'styled-components';

import TodoTemplate from './components/TodoTemplate';

const GlobalStyle = createGlobalStyle`
  body {
    display: grid;
    place-content: center;
    background: #e4e4e4;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TodoTemplate>new todo</TodoTemplate>
    </div>
  );
}

export default App;
