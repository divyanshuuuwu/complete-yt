const express = require("express")
const app = express()
const noteModel = require("./models/note.model")
app.use(express.json())

app.post("/notes", async (req , res)=>{
    const data = req.body
    await noteModel.create({
        title: data.title,
        description: data.description,  
        age: data.age
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

app.delete("/notes/:id", async(req , res)=>{
    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id: id
    })
    res.status(200).json({
        message:"deleted"
    })
})

app.patch("/notes/:id", async(req,res)=>{
    const id = req.params.id
    const newtitle = req.body.title
    await noteModel.findByIdAndUpdate(
        {_id:id},
        {title:newtitle}

    )

    res.status(200).json({
        message:"updated sucessfully"
    })
})







module.exports = app