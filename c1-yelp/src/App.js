import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Preferences from './components/Preferences';

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Header/>
        <About />
        <Preferences />

  
      </div>
    );
  }

}

export default App;
