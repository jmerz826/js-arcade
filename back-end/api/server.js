const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const reactionSpeedRouter = require("./reaction-speed/reaction-speed-router");
const authRouter = require('./auth/auth-router')
const primeNumRouter = require('./prime-numbers/prime-numbers-router')

const server = express();
server.use(express.json());

server.use(cors());
server.use(helmet());

server.use("/api/reaction-speed", reactionSpeedRouter);
server.use('/api/auth', authRouter)
server.use('/api/prime-numbers', primeNumRouter)

server.get('/', (req, res) => {
  res.json({ message: 'hello, welcome to my arcade'})
})

// error catcher
server.use("/", (err, req, res, next) => {// eslint-disable-line
  res
    .status(err.status || 500)
    .json({
      message: `${req.method} could not be performed, ` + err.message,
      stack: err.stack,
    });
});

module.exports = server;
