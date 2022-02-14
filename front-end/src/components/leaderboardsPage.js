import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Leaderboard from "./leaderboard";
import axios from "axios";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ff7979;
    height: 100vh;
    h2{
        margin-top: 0;
        padding-top: 2%;
        padding-bottom: 1%;
    }
`

const Leaderboards = (props) => {
    const [reactionSpeedHighScores, setReactionSpeedHighScores] = useState([]);
    const [primeNumbersHighScores, setPrimeNumbersHighScores] = useState([]);

    useEffect(() => {
      axios
        .get("https://js-arcade.herokuapp.com/api/reaction-speed")
        .then((res) => {
          const top5 = res.data.sort((a, b) => a.score - b.score).slice(0, 5);
          setReactionSpeedHighScores(top5);
        })
        .catch((err) => {
          console.error(err);
        });

      axios
        .get("https://js-arcade.herokuapp.com/api/prime-numbers")
        .then((res) => {
          const top5 = res.data.slice(0, 5);
          setPrimeNumbersHighScores(top5);
        })
        .catch((err) => console.error(err));
    }, []);
    return (
        <StyledDiv>
            <h2>Reaction Speed Game</h2>
            <Leaderboard highScores={reactionSpeedHighScores}/>
            <h2>Prime Numbers Game</h2>
            <Leaderboard highScores={primeNumbersHighScores}/>
        </StyledDiv>
    );
};

export default Leaderboards;