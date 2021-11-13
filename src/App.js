import React from 'react';
import './assets/css/styles.css';
import Header from './components/Header/index';
// import Project from './components/Project';
// import Footer from './components/Footer';
import About from './components/About/index'

function App() {
  return (
    <div>
        <Header></Header>
      <main>
        {/* <Project></Project> */}
        <About></About>
      </main>
      {/* <footer>  
        <Footer></Footer>
      </footer>  */}
    </div>
  );
}

export default App;
