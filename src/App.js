import './App.css';
import React from 'react';
import Hooks from './Components/Hooks';
import Parent from './Components/Parent';

function App() {
  return (
    <React.Fragment>
        <Parent/>
        <Hooks/>
    </React.Fragment>
  );
}

export default App;
