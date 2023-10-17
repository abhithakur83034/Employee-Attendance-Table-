require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = require('./app')
const http =require('http')
const server = http.createServer(app)

const PORT = process.env.PORT || 8080;


const DBConnection = process.env.LOCAL_SERVER

server.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
    mongoose.connect(DBConnection,{
        useNewUrlParser:true,
        useUnifiedTopology : true
    }).then(()=>{
        console.log("Connected to database")
    }).catch((error)=>{
        console.log(`${error} error connecting to the databse`)
    })
    })
