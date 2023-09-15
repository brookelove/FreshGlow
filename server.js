const path = require("path");
const express = require("express");
const session = require("express-session");
const { seedAll } = require("./seeds");
const helpers = require("./utils/helpers");
const { Category, Product, Tag, Comment, User, Order } = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// imports and uses the seed to get the seeds to generate
app.get("/seed", async (req, res) => {
  try {
    // Call your seed data generation function here
    await seedAll();
    res.status(200).send("Seed data generated successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error generating seed data.");
  }
});

// will be using React will use when creating a live website
// app.use(express.static(path.join(__dirname, "client/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/build", "index.html"));
// });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//Need to comment in the controllers than use routes
app.use(require("./controllers"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});
