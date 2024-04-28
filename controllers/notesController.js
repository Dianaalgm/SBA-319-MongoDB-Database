const Note = require ("../models/note");

//CRUD Code for notes goes here 
//CREATE---------
const createNote = async(req,res)=>{
    //Get data from req.body
    const {title,body} = req.body;
    const note = await Note.create({
        title: title,
        body: body
    });
    res.json({note:note});
};

//READ------------
const fetchAllNotes = async (req,res)=>{
    const notes = await Note.find();
    res.json({notes:notes})
}

const fetchOneNote = async (req,res)=>{
    //Get ID
    const noteId = req.params.id;
    const note = await Note.findById(noteId)
    res.json({note:note})
};

//UPDATE---------
const updateNote = async(req,res)=>{
    const noteId = req.params.id;
    const { title,body }  = req.body;
    await Note.findByIdAndUpdate(noteId,{
        title:title,
        body:body,
    });
    //Find to update Note -> retrieve and send it as res
    const updatedNote = await Note.findById(noteId);
    res.json({ note: updatedNote})
};

//DELETE------
const deleteNote = async(req,res)=>{
    const noteId = req.params.id;
    await Note.deleteOne({
        id:noteId
    })
    res.json({success: "Record has deleted successfully"})
};

//Export functions
module.exports = {
    fetchAllNotes,
    fetchOneNote,
    createNote,
    updateNote,
    deleteNote
};


