import React from "react";
import styled from "styled-components"; 

const StyledDiv = styled.div``

const Leaderboard = (props) => {
    const { highScores } = props;
    return (
        <StyledDiv>
            <ul>
                {highScores.map(entry => {
                    return (
                        <li key={entry.score}>Player: {entry.name}: {entry.score} </li>
                    )
                })}
            </ul>
        </StyledDiv>
    );
};

export default Leaderboard;