import React from 'react';
// import '../App.css';
import styled from 'styled-components';

// const Navigation = () => <div className="Navigation"></div>

const Navigation = styled.div`
  display: inline-block;
  height: 400px;
  width: 215px;
  background-color: ${props => props.bgColor};
  border: 3px solid black;
  margin: 0 8px;
`

export default Navigation;