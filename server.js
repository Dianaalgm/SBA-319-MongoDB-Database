//env
require("dotenv").config()

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000 ;
const cors = require("cors");
const connectToDb = require('./config/connectToDb')


//MIDDLEWARE------------
app.use(express.json())
app.use(cors())


//DATABASE Connection-----------
connectToDb()














app.listen(PORT,()=>{
    console.log(`Express Server listening on PORT num ${PORT}`)
})