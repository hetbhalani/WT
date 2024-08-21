const express = require('express');
const { default: mongoose } = require('mongoose');
const student = require('./testSchema')
const app = express();

app.use(express.json());

app.get('/students', async(req,res) =>{
    const students = await student.find();
    res.send(students)
})

app.post('/students', (req,res)=>{
    const { name } = req.body;
    res.send({ name });
})

mongoose.connect('mongodb+srv://hetbhalani:tBWgJkDxGlGkLVCt@cluster0.63cja.mongodb.net/')
.then(()=>{
    console.log("connected to database");
    
    app.listen(3000, ()=> {
        console.log('server is running on 3000');
    })
})