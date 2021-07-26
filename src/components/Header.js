import React from 'react';
// import '../App.css';
import styled from 'styled-components';

// const Header = () => <div className="Header"></div>;
const Header = styled.div `
  height: 100px;
  width: 980px;
  margin: 10px auto;
  background: ${props => props.bgColor};
  border: 3px solid black;
`

export default Header;