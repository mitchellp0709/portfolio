//Import dependencies
const express = require("express");
const cors = require("cors");

//Import JSON files
const projects = require("./projects.json")
const about = require("./about.json")

//Create app object
const app = express()

//Set up middleware
app.use(cors())

//////////////////////////////////
//Routes
//////////////////////////////////

//Home route

app.get("/", (req, res) => {
  res.send("hello world!")
})


//Projects route

app.get("/projects", (req, res) => {
  res.json(projects)
})


//About route

app.get("/about", (req, res) => {
  res.json(about)
})


//Set up the listener
const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)})