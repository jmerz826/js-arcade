import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Leaderboard from "./leaderboard";

const StyledDiv = styled.div``;

const dummyScores = [
  { name: "Jerry", score: 55 },
  { name: "George", score: 44 },
  { name: "Elaine", score: 33 },
  { name: "Kramer", score: 29 },
  { name: "Larry", score: 18 },
  { name: "Newman", score: 2 },
];

const PrimeNumbers = (props) => {
  const [highScores, setHighScores] = useState(dummyScores);
    const [gameStarted, setGameStarted] = useState(false);
    const [lowerBound, setLowerBound] = useState(0)
    const [upperBound, setUpperBound] = useState(0)
    const [roundsCompleted, setRoundsCompleted] = useState(0)
    const [correctAnswer, setCorrectAnswer] = useState(0)

    useEffect(() => {
        const randomNum = Math.floor(Math.random() * 50 + 1)
        setLowerBound(randomNum)
        setUpperBound(randomNum + 3)
    }, [])

    useEffect(() => {
        let res = 0;
        for (let i = lowerBound; i <= upperBound; i++){
            isPrime(i) && res++
        }

        setCorrectAnswer(res)
    })

    function isPrime(num) {
        if (num === 1) {
            return false
        }
        for (let i = 2; i < num; i++){
            if (num % i === 0) {
                return false
            }
        }
        return true
    }
    
    const handleStart = () => setGameStarted(true)
  return (
    <StyledDiv>
      <h2>Prime Numbers Game</h2>
      <h3>How to play</h3>
      <p>
        The Prime Numbers Game will get progressively more challenging as the
        game goes on. Each round, you will be given an inclusive range of
        numbers. You must enter how many prime numbers fall within that range.
        Good luck!
      </p>
      <div className="leaderboard">
        <h3>Leaderboard</h3>
        <Leaderboard highScores={highScores} />
          </div>
          <div id="prime-numbers-game">
              {!gameStarted && <button onClick={handleStart}>Start Game</button>}
              {gameStarted &&
                  <div>
                  <h3>The game has begun!</h3>
                      {<h4>range: {lowerBound} - {upperBound}</h4>}
                      </div>
              }
          </div>
    </StyledDiv>
  );
};

export default PrimeNumbers;
