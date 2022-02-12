import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div``

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
        <div id="prime-numbers-game">
              {!gameStarted &&
                  <div>
                      <button onClick={handleStart}>Start Game</button>
                      <h5>Last game's score: {lastGameScore}</h5>
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
                          <button onClick={handleSubmitGuess}>Submit guess!</button>
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
          </div>
    )
}

export default PrimeNumbersGame