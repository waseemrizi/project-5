import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }
  

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
      
    }
    
    
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/about">About </Link></li>
     <li><Link to="/contact">Contact</Link></li>
     <li><Link to="/">Sign In</Link></li>
     <li><Link to="/">Sign Up</Link></li>
     <li><Link to="/">Feature</Link></li>
      
    </Ul>
  )
}

export default RightNav;
