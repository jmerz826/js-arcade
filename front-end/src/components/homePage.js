import styled from "styled-components";

const StyledHomePage = styled.div`
  img {
    width: 40%;
  }
  a {
    text-decoration: none;
  }

  .bg-wrapper {
    position: relative;
  }

  .bg-wrapper:before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.44;
    background-image: url("https://images.pexels.com/photos/1601774/pexels-photo-1601774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4%;
    height: 100vh;

    p {
      margin: 0 10%;
    }
  }

  #title {
    background-color: #0f0a1e;
    color: white;
    padding: 2%;
    border: 2px solid black;
    border-radius: 36px;
    h1 {
      text-shadow: -2px 0 0 #fdff2a, -4px 0 0 #df4a42, 2px 0 0 #91fcfe,
        4px 0 0 #4405fc;
      animation: blink 1s steps(4, start) infinite;
    }
    @keyframes blink {
      to {
        visibility: hidden;
      }
    }
  }
`;

const HomePage = (props) => {
  return (
    <StyledHomePage>
      <div className="bg-wrapper">
        <div className="content">
          <div id="title">
            <h1>John's JavaScript Arcade</h1>
          </div>
          <h2>About</h2>
          <p>
            You have entered John's JavaScript arcade! Have fun playing around
            with the games I have created utilizing the knowledge I've acquired
            from my Full Stack bootcamp. Games can be found in the navigation
            bar at the top of the page. <br />
            All games have a functioning leaderboard that is running on a
            backend server that I created for this project.
            <br />
            Have fun, and try to make a new high score!
          </p>
          <a
            href="https://github.com/jmerz826/js-arcade"
            target="_blank"
            rel="noreferrer"
          >
            This project's github 🔗
          </a>
          <h2>Creator</h2>
          <p>This page was created solely by John Merz</p>
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
          </ul>
        </div>
      </div>
    </StyledHomePage>
  );
};

export default HomePage;
