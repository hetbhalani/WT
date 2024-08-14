const mongoose = require('mongoose')
const express = require('express')
const userSchema = require('./Student')

mongoose.connect('mongodb+srv://hetbhalani:tBWgJkDxGlGkLVCt@cluster0.63cja.mongodb.net/LabDemo').then(()=>{
    console.log('connect with database');

    const app = express();
    app.listen(3000,()=>{
        console.log('server started')
    })

    app.get('/',async(req,res)=>{
        const student = await userSchema.find()
        res.send(student);
    })
    
})