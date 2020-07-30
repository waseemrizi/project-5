import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { motion } from 'framer-motion';

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
    color: blue;
    
  }
`

const Navbar = () => {
  return (
    <Nav>
      <motion.div className="logo"
      initial={{opacity:0}}
      animate={{opacity: 0.9, scale: 1.2}}
      >
        
        Company Name
      </motion.div>
      
      <Burger />
    </Nav>
  )
}

export default Navbar;