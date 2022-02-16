# John's JavaScript Arcade

## Overview
Hop into the JavaScript Arcade! All games are original, and created by yours truly.  If your score for a particular game beats any of the current top 5 scores, you get to put your name on the board!

## The Games
### Reaction Speed Game

<p align="center">
  <img src="https://github.com/jmerz826/js-arcade/blob/main/front-end/src/images/reactionSpeedGameScreenshot.JPG?raw=true" alt="Reaction Speed Game screenshot" width="60%" />
</p>
  
#### How to Play
- As it sounds, the Reaction Speed Game will test your reaction speed
- Upon starting the game, each round will consist of a button appearing shortly; you must click this button as quickly as possible
- The game consists of 5 rounds.

### Prime Numbers Game

<p align="center">
<img src="https://github.com/jmerz826/js-arcade/blob/main/front-end/src/images/primeNumbersGameScreenshot.JPG?raw=true" alt="Prime Numbers Game screenshot" width="60%"/>
</p>

#### How to Play
- The Prime Numbers Game will get progressively more challenging as the game goes on.
- Each round, you will be given an **inclusive** range of numbers
- You must enter how many prime numbers fall within the displayed range (Example. Range: 3-5, answer: 2).
- You have ten seconds to submit a guess each round


## Technicals
### Frontend
- The frontend of this project was built using React.js 
- Different pages within the app are managed with the use of React-Router 
- The games operate entirely through stateful logic
- Leaderboards fetch their data through the use of axios calls to the API, described further in the Backend section of this README
- Languages used include: JavaScript, HTML, and CSS
- The site is deployed through Vercel.

### Backend
- The backend of this project was built using Node.js and the Express.js framework  
- I created a PostgreSQL database via Knex.js in order to store high scores for each game that I created in the frontend
- The database also stores an admin user (me) able to delete or edit score entries
- API endpoints are restricted via middleware and jsonwebtoken authentication tokens
- The API is deployed and hosted through Heroku. 
