import './App.css';
// import logo from './logo.svg';
// import { useEffect, useState } from "react";
import { BrowserRouter as BRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Router from './components/router/Router';
function App() {
  
  return (
    <div className="App">
      <BRouter>     
        <Navbar/>
        <Router/>
      </BRouter>
    </div>   
  );
}

export default App;