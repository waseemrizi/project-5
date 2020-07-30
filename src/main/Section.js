import React  from 'react'
import './Section.css'
// import styled from 'styled-components';
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';
import Over from './Over';
//import bc from './bc.jpg';


//button code 
// const Button = styled.button`
//   color: blue;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1.7em;
//   border: 2px solid white;
//   border-radius: 8px;
//   &: hover {
//       background-color: #06C9DB;
      
//   }
// `;

const Section = () => {
    return (
        <div className="section-1">
            <motion.div className="section-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 1.3, color: 'blue' }}
                transition={{ duration: 5 }}
            >
                <h1>Education For All</h1>
                <h2 className="typewriter">
                <Typewriter
  options={{
    strings: ['Education is the only thing that can chnage the whole world'],
    autoStart: true,
    loop: true,
    
  }}
/>
 </h2>
            <Over />

                {/* <Button>Contact</Button> */}
            </motion.div>
            <div>
            
            </div>

        </div>
    )
}

export default Section
