import React from 'react';
import '../App.css';
import Subcontent from './Subcontent';
import Advertisement from './Advertisement';


export const Main = () => {
  return (
    <div className = "Main">
      <Subcontent />
      <Subcontent />
      <Subcontent />
      <Advertisement />
    </div>
  );
}

export default Main;