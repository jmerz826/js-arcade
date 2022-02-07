import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactionSpeedGame from "../games/reactionSpeed";

const StyledDiv = styled.div``;

const ReactionSpeed = (props) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [totalTime, setTotalTime] = useState(0);

  const handleStart = () => {
    setGameStarted(true);
  };
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
      </div>
      <div id="reaction-speed-game">
        <button id="start-game-btn" onClick={handleStart}>
          Start Game
        </button>
        {gameStarted && (
          <ReactionSpeedGame
            gameStarted={gameStarted}
            setGameStarted={setGameStarted}
            totalTime={totalTime}
            setTotalTime={setTotalTime}
          />
        )}
      </div>
    </StyledDiv>
  );
};

export default ReactionSpeed;
