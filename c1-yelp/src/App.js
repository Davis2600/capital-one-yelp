import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Header/>
      <About />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

    </div>
  );
}

export default App;
