import React from 'react';
import Navbar from './components/NavBar';
import Section from './main/Section'

import './App.css';
import SectionT from './main/SectionT';



function App() {
  return (
    <div className="App">
      <Navbar />
     <Section />
      <SectionT />
    </div>
  );
}

export default App;