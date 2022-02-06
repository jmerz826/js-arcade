import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import HomePage from "./components/homePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={ <HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
