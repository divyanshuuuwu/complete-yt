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



module.exports = app