import styled from "styled-components";

const StyledHomePage = styled.div`
  img {
    width: 40%;
  }
  a {
    text-decoration: none;
  }

  .bg-wrapper{
    position:relative;
  }

  .bg-wrapper:before{
    content: ' ';
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

  .content{
    position:relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:5%;
    height:100vh;
  }
`;

const HomePage = (props) => {
  return (
    <StyledHomePage>
      <div className="bg-wrapper">
        <div className="content">
          <h1>Welcome</h1>
          <h2>About</h2>
          <p>
            You have entered John's JavaScript arcade! Have fun playing around
            with the games I have created utilizing the knowledge I've acquired
            from my Full Stack bootcamp. Games can be found in the navigation
            bar at the top of the page. <br />
            All games have a leader board that is running on a backend server
            that I created for this project.
          </p>
          <a
            href="https://github.com/jmerz826/js-arcade"
            target="_blank"
            rel="noreferrer"
          >
            This project's github 🔗
          </a>
          <h3>Creator</h3>
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
