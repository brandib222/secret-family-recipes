const express = require("express");
//const cors = require("cors");

const authRouter = require("./auth/auth-router.js");
const usersRouter = require("./users/users-router.js");
const postRouter = require('./posts/posts-router.js');

const server = express();

server.use(express.json());
//server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use('/api/posts', postRouter);

server.use((req, res, next) => {
  res.status(500).json({
    message: 'Error, please try again'
  });
});

module.exports = server;