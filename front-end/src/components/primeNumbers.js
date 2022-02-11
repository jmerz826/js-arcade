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
  const [highScores, setHighScores] = useState([]);
    const [gameStarted, setGameStarted] = useState(false);
    const [lowerBound, setLowerBound] = useState(0)
    const [upperBound, setUpperBound] = useState(0)
    const [roundsCompleted, setRoundsCompleted] = useState(0)
    const [correctAnswer, setCorrectAnswer] = useState(0)
    const [userGuess, setUserGuess] = useState('')
    const [lastGameScore, setLastGameScore] = useState(0)
    const [showCorrectMessage, setShowCorrectMessage] = useState(false)
    const [countdown, setCountdown] = useState(10)

    useEffect(() => {
        // ******* api call to set high scores from db ******* 
        const top5 = dummyScores.sort((a,b) => a.score > b.score ? a : b).slice(0,5)
        setHighScores(top5)
        setBounds()
    }, [])

    useEffect(() => {
        let res = 0;
        for (let i = lowerBound; i <= upperBound; i++){
            isPrime(i) && res++
        }
        setCorrectAnswer(res)
    }) //eslint-disable-line

    useEffect(() => {
        if (showCorrectMessage) {
            setTimeout(() => {
                setShowCorrectMessage(false)
            }, 750) 
        }
    }, [showCorrectMessage])

    function setBounds() {
        const randomNumber = Math.floor(Math.random() * 50 + 1)
        const toAdd = roundsCompleted + ((roundsCompleted > 4) ? 2 : 1)
        setLowerBound(randomNumber)
        setUpperBound(randomNumber + 4 + toAdd)
        
    }

    function isPrime(num) {
        if (num === 1) return false
        for (let i = 2; i < num; i++){
            if (num % i === 0) return false
        }
        return true
    }

    const handleChange = (e) => {
        setUserGuess(e.target.value)
    }

    const handleSubmitGuess = (e) => {
        e.preventDefault()
        /* add timeout state flag checker here*/
        if (userGuess === String(correctAnswer)) {
            setRoundsCompleted(roundsCompleted + 1)
            setShowCorrectMessage(true)
            setBounds()
        } else {
            setLastGameScore(roundsCompleted)
            setGameStarted(false)
        }
        setUserGuess('')
    }
    
    const handleStart = () => {
        setLastGameScore(0)
        setGameStarted(true)
    }
  return (
    <StyledDiv>
      <h2>Prime Numbers Game</h2>
      <h3>How to play</h3>
      <p>
        The Prime Numbers Game will get progressively more challenging as the
        game goes on. Each round, you will be given an inclusive range of
        numbers. You must enter how many prime numbers fall within that range (Example. Range: 3-5, answer: 2). You have ten seconds to submit a guess each round.
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
                      <form>
                          <input
                              name='guess'
                              value={userGuess}
                              onChange={handleChange}
                          />
                          <button onClick={handleSubmitGuess}>Submit guess!</button>
                      </form>
                      {showCorrectMessage && <p>correct!</p>}
                      </div>
              }
          </div>
    </StyledDiv>
  );
};

export default PrimeNumbers;
