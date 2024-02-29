import React from 'react';
import ContainerA from './Containers/Counter';
import TodoList from './Containers/TodoList';
import './App.css'

function App() {
  return (
    <div className="App">
      <ContainerA/>
      <TodoList/>
    </div>
  );
}

export default App;
