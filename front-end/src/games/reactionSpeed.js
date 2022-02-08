import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledDiv = styled.div``;

const ReactionSpeedGame = (props) => {
  const { totalTime, setTotalTime } = props;

  // slices of state
  const [shown, setShown] = useState(false);
  const [delay, setDelay] = useState(pickRandomDelay());
  const [roundsFinished, setRoundsFinished] = useState(0);
  const [countDelayTime, setCountDelayTime] = useState(delay);

  useEffect(() => {
    setTotalTime(Date.now());
    setDelay(pickRandomDelay());
    startDelay();
  }, []); //eslint-disable-line

  function startDelay() {
    setTimeout(() => {
      setShown(true);
    }, delay);
  }

  function pickRandomDelay() {
    return 1000 * (Math.random() * 3 + 1);
  }

  function handleClick() {
    setRoundsFinished(roundsFinished + 1);
    setShown(false);
    setCountDelayTime(countDelayTime + delay);
    setDelay(pickRandomDelay());
    if (roundsFinished === 4) {
      setTotalTime(Date.now() - totalTime - countDelayTime) 
      return props.setGameStarted(false);
    }
    startDelay();
  }

  return (
    <StyledDiv>
      <h4>The game has begun!</h4>
      {shown && <button onClick={handleClick}>Click here!</button>}
      <h5>be quick! 🐆</h5>
    </StyledDiv>
  );
};

export default ReactionSpeedGame;
