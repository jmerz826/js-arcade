import styled from "styled-components";

const StyledHomePage = styled.div`
  img {
    width: 40%;
  }
`;

const HomePage = (props) => {
  return (
    <StyledHomePage>
      <h1>Welcome</h1>
      <img
        src="https://images.pexels.com/photos/1601774/pexels-photo-1601774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="arcade room"
      />
      <h2>About</h2>
      <p>
        You have entered John's JavaScript arcade! Have fun playing around with
        the games I have created utilizing the knowledge I've acquired from my
        Full Stack bootcamp. <br />
        All games have a leader board that is running on a backend server that I
        created for this project.
      </p>
      <h3>Creator</h3>
      <p>This page was created solely by John Merz</p>
    </StyledHomePage>
  );
};

export default HomePage;
