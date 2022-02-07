import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledDiv = styled.div``;

const ReactionSpeedGame = (props) => {
    const [shown, setShown] = useState(false);
    const [delay, setDelay] = useState(pickRandomDelay());
    const [roundsFinished, setRoundsFinished] = useState(0);

    useEffect(() => {
        setDelay(pickRandomDelay());
    }, [])
    
    useEffect(() => {
        setTimeout(() => {
            setShown(true)
        }, delay)
    })

    function pickRandomDelay() {
        return 1000 * (Math.random() * 4 + 1)
    }

    function handleClick() {
        setRoundsFinished(roundsFinished + 1)
        setShown(false)
        if (roundsFinished === 4) {
            props.setGameStarted(false)
        }
        setDelay(pickRandomDelay())
    }


  return (
    <StyledDiv>
      <h4>The game has begun!</h4>
      {shown && <button onClick={handleClick}>Click here!</button>}
    </StyledDiv>
  );
};

export default ReactionSpeedGame;
