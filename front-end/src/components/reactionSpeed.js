import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactionSpeedGame from "../games/reactionSpeed";
import Leaderboard from "./leaderboard";
import axios from 'axios'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  img{
    width: 25%;
  }
`;
const dummyScores = [
  { name: "Jerry", score: 123456 },
  { name: "George", score: 654321 },
  { name: "Elaine", score: 987654 },
  { name: "Kramer", score: 9876543 },
  { name: "Larry", score: 9999999 },
  { name: "Newman", score: 99999999999995 },
];

const ReactionSpeed = (props) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [highScores, setHighScores] = useState(dummyScores);
  const [newHighScore, setNewHighScore] = useState(false);
  const [inputName, setInputName] = useState("");
  const [score, setScore] = useState(0);

  // populate leaderboard
  useEffect(() => {
    // replace with API call
    const top5 = highScores.sort((a, b) => a.score - b.score).slice(0, 5);
    setHighScores(top5);
  }, [newHighScore]); //eslint-disable-line

  useEffect(() => {
    const [lowest] = highScores.slice(-1);
    if (totalTime > 0 && totalTime < lowest.score) {
      setScore(totalTime);
      setTotalTime(0);
      setNewHighScore(true);
    }
  }, [totalTime]); //eslint-disable-line

  const handleStart = () => {
    if (totalTime !== 0) {
      setTotalTime(0);
    }
    setGameStarted(true);
  };

  const handleSubmitNewScore = (e) => {
    e.preventDefault();
    setHighScores([...highScores, { name: inputName, score }]);
    setInputName("");
    setScore(0);
    setNewHighScore(false);
  };

  const handleChange = (e) => {
    setInputName(e.target.value);
  };

  return (
    <StyledDiv>
      <h2>Reaction Speed Game</h2>
      <img
        src="https://cdn.pixabay.com/photo/2021/02/04/15/35/track-and-field-5981702_960_720.jpg"
        alt="runner lined up at starting line"
      />
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
        <Leaderboard highScores={highScores} />
        {newHighScore && (
          <form>
            <h4>NEW HIGH SCORE</h4>
            <input type="text" onChange={handleChange} value={inputName} />
            <button onClick={handleSubmitNewScore}>Enter</button>
          </form>
        )}
      </div>
      <div id="reaction-speed-game">
        {!gameStarted && (
          <button id="start-game-btn" onClick={handleStart}>
            Start Game
          </button>
        )}
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
