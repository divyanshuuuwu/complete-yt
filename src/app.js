const express = require("express")
const app = express()


app.get("/",(req,res)=>{
    res.send("yo yt")
})





module.exports = app