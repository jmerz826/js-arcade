import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: black;
  color: #fffa8f;
  border: 6px double white;
  width: 40%;
  padding: 1% 0;
`;

const Leaderboard = (props) => {
  const { highScores } = props;
  return (
    <StyledDiv>
      <h3>Leaderboard</h3>
      <ul>
        {highScores === [] ? <li>Fetching Scores</li> : highScores.map((entry) => {
          return (
            <li key={entry.score}>
              {entry.name}: {Math.floor(entry.score)}
            </li>
          );
        })}
      </ul>
    </StyledDiv>
  );
};

export default Leaderboard;
