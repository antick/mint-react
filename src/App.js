import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="text-center">
      <header className="App-header flex flex-col items-center justify-center text-white text-4xl min-h-screen bg-gray-750">
        <img src={logo} className="logo" alt="logo" />
        <p className="flex flex-col w-3/4 mx-auto my-12 items-center">
          React JS <span role="img" aria-label="Hearts">💕</span> Tailwind CSS
        </p>
      </header>
    </div>
  );
}

export default App;
