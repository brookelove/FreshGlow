const { User } = require("../models");

const userData = [
  {
    email: "user1@example.com",
    username: "user1",
    password: "password1",
  },
  {
    email: "user2@example.com",
    username: "user2",
    password: "password2",
  },
  {
    email: "user3@example.com",
    username: "user3",
    password: "password3",
  },
  {
    email: "user4@example.com",
    username: "user4",
    password: "password4",
  },
  {
    email: "user5@example.com",
    username: "user5",
    password: "password5",
  },
  {
    email: "user6@example.com",
    username: "user6",
    password: "password6",
  },
  {
    email: "user7@example.com",
    username: "user7",
    password: "password7",
  },
  {
    email: "user8@example.com",
    username: "user8",
    password: "password8",
  },
  {
    email: "user9@example.com",
    username: "user9",
    password: "password9",
  },
  {
    email: "user10@example.com",
    username: "user10",
    password: "password10",
  },
];
const userSeeds = () => User.bulkCreate(userData);

module.exports = userSeeds;
