import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactionSpeedGame from "../games/reactionSpeed";
import Leaderboard from "./leaderboard";
import axios from "axios";
import { newScoreAxios } from "../auth/axiosWithAuth";

const StyledDiv = styled.div`
  background-color: #ba81b5;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  p{
    margin: 0 20%;
  }

  .start-btn{
    padding: 1.314%;
  }
`;

const ReactionSpeed = (props) => {
  // slices of state
  const [gameStarted, setGameStarted] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [highScores, setHighScores] = useState([]);
  const [newHighScore, setNewHighScore] = useState(false);
  const [inputName, setInputName] = useState("");
  const [score, setScore] = useState(0);

  // populate leaderboard
  useEffect(() => {
    axios
      .get("https://js-arcade.herokuapp.com/api/reaction-speed")
      .then((res) => {
        const top5 = res.data.sort((a, b) => a.score - b.score).slice(0, 5);
        setHighScores(top5);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [newHighScore]); //eslint-disable-line

  // upon game completion, checks if new score qualifies for top 5
  useEffect(() => {
    const [lowest] = highScores.slice(-1);
    // prevents trigger upon mount
    if (totalTime > 0 && totalTime < lowest.score) {
      // stores users score as integer in 'score' slice of state
      setScore(parseInt(totalTime));

      // issue token, granting user access to protected route to post score
      async function issueToken() {
        await axios
          .post("https://js-arcade.herokuapp.com/api/auth/high-score", {
            score,
          })
          .then((resp) => {
            localStorage.setItem("score-token", resp.data.token);
          })
          .catch((err) => console.error(err));
      }

      issueToken();

      // resets timer back to 0.. allows for game to be played again w/o refresh
      setTotalTime(0);

      //trigger leaderboard re-population
      setNewHighScore(true);
    }
  }, [totalTime]); //eslint-disable-line

  // starts game
  const handleStart = () => {
    if (totalTime !== 0) {
      setTotalTime(0);
    }
    setGameStarted(true);
  };

  const handleSubmitNewScore = (e) => {
    e.preventDefault();
    if (inputName === "" || inputName.length > 128)
      return alert("enter your name!");
    newScoreAxios()
      .post("https://js-arcade.herokuapp.com/api/reaction-speed", {
        name: inputName,
        score,
      })
      .then(() => {
        setInputName("");
        setScore(0);
        setNewHighScore(false);
      })
      .catch((err) => {
        alert('token has timed out')
        setNewHighScore(false)
        console.error(err)
      });
  };

  const handleChange = (e) => {
    setInputName(e.target.value);
  };

  return (
    <StyledDiv>
      <h2>Reaction Speed Game</h2>
      <Leaderboard highScores={highScores} />
      <h3>How to play</h3>
      <p>
        As it sounds, the Reaction Speed Game will test your{" "}
        <span style={{ fontStyle: "italic", textDecoration: 'underline' }}>reaction speed</span>. <br />
        Upon starting the game, each round will consist of a button appearing
        shortly; you must click this button as quickly as possible. The game
        consists of 5 rounds. Good luck!
      </p>
      <div className="leaderboard">
        {newHighScore && (
          <form>
            <h4>NEW HIGH SCORE</h4>
            <input type="text" onChange={handleChange} value={inputName} />
            <button onClick={handleSubmitNewScore}>Enter</button>
          </form>
        )}
      </div>
      {(score !== 0) && <h5>Last game's score: {score}</h5>}
        {!gameStarted && (
          <button className="start-btn" onClick={handleStart}>
            Start Game
            </button>
        )}
      <div id="reaction-speed-game">
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
