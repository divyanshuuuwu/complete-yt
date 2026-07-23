const express = require("express")
const app = express()
const notes = []

app.use(express.json())

app.post("/notes",(req,res)=>{
    notes.push(req.body)

    res.status(201).json({message:"notes created sucessfully"})

})

app.get("/notes", (req,res)=>{
    res.status(200).json({notes:notes, message:"notes fetched sucessfully"})
})

app.delete("/notes/:index", (req,res)=>{
    const index = req.params.index
    delete notes [index]

    res.status(200).json({
        message:"note deleted sucessfully"
    })

})

app.patch("/notes/:index",(req,res)=>{
    const index = req.params.index
    const description = req.body.description

    notes[index].description = description

    res.status(200).json({
        message:"update sucess"
    })
})



module.exports = app