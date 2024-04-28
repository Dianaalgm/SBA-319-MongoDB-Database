//env
require("dotenv").config()

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000 ;
const connectToDb = require('./config/connectToDb.js')

const Note = require("./models/note")
const Comment = require("./models/comment")
const notesController = require ("./controllers/notesController.js");
const commentsController = require("./controllers/commentsController")
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

//Notes Model------------
//CREATE:POST
app.post("/notes", notesController.createNote);

//READ: GET
app.get("/notes", notesController.fetchAllNotes);
app.get("/notes/:id", notesController.fetchOneNote);

//UPDATE: PUT
app.put("/notes/:id", notesController.updateNote);

//DELETE
app.delete("/notes/:id", notesController.deleteNote);

//Comments Model--------------
//CREATE:POST
app.post("/comments", commentsController.createComment);

//READ: GET
app.get("/comments", commentsController.fetchAllComments);
app.get("/comments/:id", commentsController.fetchOneComment);

//UPDATE: PUT
app.put("/comments/:id", commentsController.updatecomment);

//DELETE
app.delete("/comments/:id", commentsController.deleteComment);










app.listen(PORT,()=>{
    console.log(`Express Server listening on PORT num ${PORT}`)
})