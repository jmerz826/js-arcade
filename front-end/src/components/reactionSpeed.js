import React, {useState, useEffect} from "react";
import styled from "styled-components";

const StyledDiv = styled.div``;

const ReactionSpeed = (props) => {
    const [gameStarted, setGameStarted] = useState(false)
  return (
    <StyledDiv>
      <h2>Reaction Speed Game</h2>
      <h3>How to play</h3>
      <p>
        As it sounds, the Reaction Speed Game will test your{" "}
              <span style={{ fontStyle: "italic" }}>reaction speed</span>. <br />
              Upon starting the game, each round will consist of a button appearing shortly; you must click this button as quickly as possible. The game consists of 5 rounds 
      </p>
      <div className="leaderboard">
        <h3>Leaderboard</h3>
      </div>
      <div id="reaction-speed-game"></div>
    </StyledDiv>
  );
};

export default ReactionSpeed;
