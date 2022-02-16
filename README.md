# John's JavaScript Arcade

## About
Hop into the JavaScript Arcade! All games are original, and created by yours truly.  If your score for a particular game beats any of the current top 5 scores, you get to put your name on the board!

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
