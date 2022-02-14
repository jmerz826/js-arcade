import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import HomePage from "./components/homePage";
import ReactionSpeed from "./components/reactionSpeed";
import PrimeNumbers from "./components/primeNumbers";
import Leaderboards from "./components/leaderboardsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/reaction-speed' element={<ReactionSpeed />} />
        <Route path='/prime-numbers' element={<PrimeNumbers />} />
        <Route path='/leaderboards' element={<Leaderboards />} />
      </Routes>
    </div>
  );
}

export default App;
