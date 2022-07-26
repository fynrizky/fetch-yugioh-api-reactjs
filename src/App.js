import './App.css';
// import logo from './logo.svg';
// import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Details from "./components/Details";
function App() {
  
  return (
    <div className="App">
      <Router>        
        <Routes>
            <Route exact path="/" element={<Main />}/>
            <Route exact path="/details/:id" element={<Details />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;