import React from 'react';
import './App.css';
import Styles from './App.module.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Subcontent from './components/Subcontent';
import Advertisement from './components/Advertisement';

function App() {
  return (
    <div className={Styles.App}>
    <h1>I'm alive</h1>
      {/* <Header />
      <Navigation />
      <Main>
        <Subcontent />
        <Subcontent />
        <Subcontent />
        <Advertisement />
      </Main> */}
    </div>
  );
}

export default App;
