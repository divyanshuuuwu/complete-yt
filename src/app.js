const express = require("express")
const app = express()
const noteModel = require("./models/note.model")
app.use(express.json())

app.post("/notes", async (req , res)=>{
    const data = req.body
    await noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        mesaage:"note created sucessfully"
    })
})

app.get("/notes", async (req , res)=>{

   const notes = await noteModel.find()
     res.status(200).json({
        notes:notes,
        message:"fetched successfully"
         
    })
})




module.exports = app