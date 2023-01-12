import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';



function App() {
 return (
  <div className="App">
        <div className="site">
            <Header />
            <HomePage />
            <Footer />
        </div>
    
  </div>
 );
}

export default App;