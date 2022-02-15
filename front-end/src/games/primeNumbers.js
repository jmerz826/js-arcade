import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100vh;
  .game-btn {
    display: inline-block;
    font-size: 1.25rem;
    padding: 2%;
  }
  input {
    font-size: 1.25rem;
    padding: 2%;
  }
`;

const PrimeNumbersGame = (props) => {
    const {
        gameStarted,
        handleStart,
        lastGameScore,
        countdown,
        roundsCompleted,
        lowerBound,
        upperBound,
        userGuess,
        handleChange,
        handleSubmitGuess,
        showCorrectMessage,
        newHighScoreFlag,
        userName,
        handleSubmitNewHighScore
    } = props;
    return (
        <StyledDiv>
              {!gameStarted &&
                  <div>
                      <h5>Last game's score: {lastGameScore}</h5>
                      <button className="start-btn" onClick={handleStart}>Start Game</button>
                  </div>
              }
              {gameStarted &&
                  <div>
                      <h3>The game has begun!</h3>
                      <h4>{countdown}</h4>
                      <h4>SCORE: {roundsCompleted}</h4>
                      {<h4>range: {lowerBound} - {upperBound}</h4>}
                      <form autoComplete="off">
                          <input
                              name='guess'
                              value={userGuess}
                              onChange={handleChange}
                              autoComplete='off'
                          />
                          <button onClick={handleSubmitGuess} className="game-btn">Submit guess!</button>
                      </form>
                      {showCorrectMessage && <p>correct!</p>}
                  </div>
              }
              {newHighScoreFlag && 
                  <form>
                      <h4>New High Score!</h4>
                      <input
                          name='name'
                          value={userName}
                          onChange={handleChange}
                      />
                      <button onClick={handleSubmitNewHighScore}>Submit</button>
                </form>
              }
          </StyledDiv>
    )
}

export default PrimeNumbersGame