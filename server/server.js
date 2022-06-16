//'__dirname' gives the current path.
//console.log(__dirname)
//'path' module is used to handle directory paths in nodejs
//import path module
let path = require('path')
let publicPath = path.join(__dirname,'/../public')
//console.log(publicPath)
//import express module
const express = require('express')
//create rest object
let app = express()
//create port
let port = process.env.PORT || 3000
//refer 'public' directory
app.use(express.static(publicPath))
//assign port no
app.listen(port,()=>{
    console.log(`Server listening port no :-  ${port}`)
})