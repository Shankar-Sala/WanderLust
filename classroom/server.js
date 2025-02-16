const express = require("express");
const app = express();

app.get("/",(req,res) => {
  res.send("Hi, I am Root!");
});

// index - users 
app.get("/users", (req, res) => {
  res.send("GET for users");
});

// show - users 
app.get("/users/:id", (req, res) => {
  res.send("GET for users id");
});

// POST - users 
app.post("/users", (req, res) => {
  res.send("POST for users");
});

// delete - users 
app.delete("/users/:id", (req, res) => {
  res.send("Delete for users ID");
});

// posts 
// index 
app.get("/posts", (req, res) => {
  res.send("GET for posts");
});

// show 
app.get("/posts/:id", (req, res) => {
  res.send("GET for posts id");
});

// POST
app.post("/posts", (req, res) => {
  res.send("POST for posts");
});

// delete
app.delete("/users/:id", (req, res) => {
  res.send("Delete for posts ID");
});

app.listen(3000, () => {
  console.log("server is listening to 3000");
});
  