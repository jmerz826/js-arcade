import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Leaderboard from "./leaderboard";
import axios from "axios";
import { newScoreAxios } from "../auth/axiosWithAuth";

const StyledDiv = styled.div``;

const dummyScores = [
  { name: "Jerry", score: 55 },
  { name: "George", score: 44 },
  { name: "Elaine", score: 33 },
  { name: "Kramer", score: 29 },
  { name: "Larry", score: 2 },
  { name: "Newman", score: 1 },
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
    const [countdown, setCountdown] = useState(0)
    const [newHighScoreFlag, setNewHighScoreFlag] = useState(false)
    const [userName, setUserName] = useState('')
    

    useEffect(() => {
        axios.get('https://js-arcade.herokuapp.com/api/prime-numbers')
            .then(res => {
                const top5 = res.data.slice(0, 5)
                setHighScores(top5)
                setBounds()
            })
            .catch(err => console.error(err))
    }, [newHighScoreFlag]) //eslint-disable-line

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

    useEffect(() => {
      if (lastGameScore > 0) {
        const lowestHighScore = highScores.slice(-1)[0];
        if (lastGameScore > lowestHighScore.score) {
            setNewHighScoreFlag(true);
            issueToken()
        }
      }
    }, [lastGameScore]);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1)
            }, 1000);
            return () => clearTimeout(timer)
        } else {
            setLastGameScore(roundsCompleted)
            setGameStarted(false)
        }
    }, [countdown])

    // const tick = () => {
    //     setTimeout(() => {
    //         setCountdown(countdown - 1)
    //     }, 1000)
    // }

    function setBounds() {
        const randomNumber = Math.floor(Math.random() * 50 + 1)
        if (randomNumber === lowerBound) {
            return setBounds()
        }
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
        if (e.target.name === 'guess') {
            setUserGuess(e.target.value)
        }
        if (e.target.name === 'name') {
            setUserName(e.target.value)
        }   
    }

    async function issueToken() {
        await axios.post('https://js-arcade.herokuapp.com/api/auth/high-score', { score: lastGameScore })
            .then(resp => {
                localStorage.setItem('score-token', resp.data.token)
            })
            .catch(err => console.error(err))
    }

    const handleSubmitGuess = (e) => {
        e.preventDefault()
        if (userGuess === String(correctAnswer)) {
            setRoundsCompleted(roundsCompleted + 1)
            setShowCorrectMessage(true)
            setCountdown(10)
        } else {
            setLastGameScore(roundsCompleted)
            setGameStarted(false)
            setCountdown(0)
        }
        setBounds()
        setUserGuess('')
    }

    const handleSubmitNewHighScore = async (e) => {
        e.preventDefault()
        // API post
        await newScoreAxios().post('api/prime-numbers', { name: userName, score: lastGameScore })
            .then(() => {
                setUserName('')
                setNewHighScoreFlag(false)
            })
            .catch(err => console.error(err))
    }
    
    const handleStart = () => {
        setLastGameScore(0)
        setRoundsCompleted(0)
        setCountdown(10)
        setGameStarted(true)
    }
  return (
    <StyledDiv>
      <h2>Prime Numbers Game</h2>
      <h3>How to play</h3>
      <p>
        The Prime Numbers Game will get progressively more challenging as the
        game goes on.<br/> Each round, you will be given an inclusive range of
        numbers. You must enter how many prime numbers fall within that range (Example. Range: 3-5, answer: 2).<br/> You have ten seconds to submit a guess each round.
        Good luck!
      </p>
      <div className="leaderboard">
        <h3>Leaderboard</h3>
        <Leaderboard highScores={highScores} />
          </div>
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
    </StyledDiv>
  );
};

export default PrimeNumbers;
