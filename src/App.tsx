import React from 'react';
import logo from './logo.svg';
import './App.css';
import DropHolder from './DropHolder';

function App() {
  return (
    <div className="App">
      <DropHolder items = {["Hello", "Macca", "Ship", "Tailwind"]}></DropHolder>
    </div>
  );
}



export default App;
