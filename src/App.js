import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      
      <main>
        <Project></Project>
      </main>

      <footer>  
        <Footer></Footer>
      </footer>

    </div>
  );
}

export default App;
