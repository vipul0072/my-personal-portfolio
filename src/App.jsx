import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <>
    
      <Navbar/>
        <section id='home'><Home/></section>
        <section id='about'><About/></section>
        <section id='projects'><Projects/></section>
        <section id='contact'><Contact/></section>
      
    </>
  );
}


export default App;
