//env
require("dotenv").config()

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000 ;
const connectToDb = require('./config/connectToDb.js')

const Note = require("./models/note")
const notesController = require ("./controllers/notesController.js");
const cors = require("cors");


//MIDDLEWARE------------
app.use(express.json())
app.use(cors())

//DATABASE Connection-----------
connectToDb()

//Routing------
app.get("/",(req,res)=>{
    res.send("This is the Landing Page")
});

//Notes Model
//CREATE:POST
app.post("/notes", notesController.createNote);

//READ: GET
app.get("/notes", notesController.fetchAllNotes);
app.get("/notes/:id", notesController.fetchOneNote);

//UPDATE: PUT
app.put("/notes/:id", notesController.updateNote);

//DELETE
app.delete("/notes/:id", notesController.deleteNote);












app.listen(PORT,()=>{
    console.log(`Express Server listening on PORT num ${PORT}`)
})