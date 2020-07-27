import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
// background-color: #3f51b5;
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
    
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Company Name
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar;