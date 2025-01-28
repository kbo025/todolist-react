import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoMachine from './components/TodoMachine';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoMachine />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
