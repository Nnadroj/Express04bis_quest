const express = require("express");

const app = express();

app.use(express.json());

const port = process.env.APP_PORT ?? 5001;

require("dotenv").config();

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

///////////////////////// MOVIES /////////////////////////////////

const movieHandlers = require("./movieHandlers");

app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);

///////// POST MOVIES ////////////////
app.post("/api/movies", movieHandlers.postMovie);

///////////////////////// USERS /////////////////////////////////

const userHandlers = require("./userHandlers");

app.get("/api/users", userHandlers.getUsers);
app.get("/api/users/:id", userHandlers.getUserById);

///////////////// POST USERS ////////////////
app.post("/api/users", userHandlers.postUser);

///////////////// PUT MOVIE ////////////////
app.put("/api/movies/:id", movieHandlers.updateMovie);

///////////////// PUT USERS ////////////////
app.put("/api/users/:id", userHandlers.updateUser);
