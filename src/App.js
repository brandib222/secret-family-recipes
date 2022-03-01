import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
//import AddPost from './components/AddPost';
//import Login from './components/Login';

function App() {
  return (
    <div className="App">
     <Header />
     <LandingPage />
     <Footer />
    </div>
  );
}

export default App;
