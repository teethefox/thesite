import React from 'react';
import logo from './logo.svg';
import './App.css';
import Photos from './components/Photos';
import Header from './static/Header';
import Footer from './static/Footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className=" masonry-layout">
      <Photos></Photos></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
