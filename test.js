const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(express.json);

app.get('/students', (req,res) =>{
    res.send('Welcome home')
})

app.post('/students', (req,res)=>{
    res.send('data mli gyo bhai');
})

mongoose.connect('mongodb+srv://hetbhalani:tBWgJkDxGlGkLVCt@cluster0.63cja.mongodb.net/')
.then(()=>{
    console.log("connected to database");
    
    app.listen(3000, ()=> {
        console.log('server is running on 3000');
    })
})