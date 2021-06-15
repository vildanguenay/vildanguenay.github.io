import React from 'react';
import Header from './components/Header/Header.js';
import MyServices from './components/MyServices/MyServices';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Work />
      <MyServices />
      <About />
      <Footer />
    </div>
  );
}

export default App;
