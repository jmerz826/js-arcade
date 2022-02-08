import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactionSpeedGame from "../games/reactionSpeed";
import Leaderboard from "./leaderboard";

const StyledDiv = styled.div``;
const dummyScores = [
  { name: 'Jerry', score: 123456 },
  {name: 'George', score: 654321},
  {name: 'Elaine', score: 987654},
  {name: 'Kramer', score: 9876543},
  { name: 'Larry', score: 9999999 },
  {name: 'Newman', score: 99999999999995}
]

const ReactionSpeed = (props) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [highScores, setHighScores] = useState([]);

  // populate 
  useEffect(() => {
    // replace with API call
    const top5 = dummyScores.sort((a, b) => a.score - b.score).slice(0,5)
    setHighScores(top5);
  }, [])

  const handleStart = () => {
    if (totalTime !== 0) {
      setTotalTime(0);
    }
    setGameStarted(true);
  };

  const processScore = () => {
    console.log(highScores);
  }
  return (
    <StyledDiv>
      <h2>Reaction Speed Game</h2>
      <h3>How to play</h3>
      <p>
        As it sounds, the Reaction Speed Game will test your{" "}
        <span style={{ fontStyle: "italic" }}>reaction speed</span>. <br />
        Upon starting the game, each round will consist of a button appearing
        shortly; you must click this button as quickly as possible. The game
        consists of 5 rounds. Good luck!
      </p>
      <div className="leaderboard">
        <h3>Leaderboard</h3>
        <Leaderboard highScores={highScores}/>
      </div>
      <div id="reaction-speed-game">
        {!gameStarted && <button id="start-game-btn" onClick={handleStart}>
          Start Game
        </button>}
        {gameStarted && (
          <ReactionSpeedGame
            gameStarted={gameStarted}
            setGameStarted={setGameStarted}
            totalTime={totalTime}
            setTotalTime={setTotalTime}
            processScore={processScore}
          />
        )}
      </div>
    </StyledDiv>
  );
};

export default ReactionSpeed;
