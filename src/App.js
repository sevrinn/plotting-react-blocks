import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';



function App() {
  return (
    <div className="App">
    
      <Header bgColor="#6aa84f"/>
      <Navigation bgColor="#6fa8dc" />
      <Main />
     
    </div>
  );
}

export default App;
