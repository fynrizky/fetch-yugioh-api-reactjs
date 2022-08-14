import React from 'react'
import { Route, Routes } from "react-router-dom";
import Main from "../Main";
import Details from "../Details";
import About from '../About';

const Router = () => {
  return (
    <Routes>
            <Route exact path="/" element={<Main />}/>
            <Route exact path="/details/:id" element={<Details />}/>
            <Route exact path="/about" element={<About />}/>
        </Routes>
  )
}

export default Router