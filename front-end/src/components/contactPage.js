import React from "react";
import styled from "styled-components";
import linkedinPhoto from "../images/linkedinPhoto.jpg";

const StyledDiv = styled.div`
  background-color: #ba81b5;
  height: 100vh;

  h2 {
    margin-top: 0;
    padding-top: 2%;
    text-decoration: none;
  }

  img {
    width: 20%;
    border-radius: 9999px;
    border: 6px solid black;
    margin-top: 1%;
  }
  a {
    text-decoration: none;
    color: #fffa8f;
  }
  ul {
    margin-top: 2%;
  }
  h2 a{
    font-size: inherit;
    font-family: inherit;
  }
`;

const ContactPage = (props) => {
  return (
    <StyledDiv>
      <h2>
        Meet:{" "}
        <a href="http://johnmerz.com" target="_blank" rel="noreferrer">
          John Merz
        </a>
      </h2>
      <img src={linkedinPhoto} alt="headshot of John" />
      <h3>Full Stack Developer</h3>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/john-merz/"
            target="_blank"
            rel="noreferrer"
          >
            John's Linkedin 🔗
          </a>
        </li>
        <li>
          <a
            href="https://github.com/jmerz826"
            target="_blank"
            rel="noreferrer"
          >
            John's GitHub 🔗
          </a>
        </li>
        <li>
          <a href="mailto:jmerz826@gmail.com" target="_blank" rel="noreferrer">
            Email: jmerz826@gmail.com 📧
          </a>
        </li>
      </ul>
    </StyledDiv>
  );
};

export default ContactPage;
