import React from 'react';
import './assets/css/styles.css';
import Header from './components/Header/index';
import Project from './components/Project/index';
// import Footer from './components/Footer';
import About from './components/About/index'

function App() {
  return (
    <div>
        <Header></Header>
      <main>
        <About></About>
        <Project></Project>
      </main>
      {/* <footer>  
        <Footer></Footer>
      </footer>  */}
    </div>
  );
}

export default App;
