const express = require("express");
const app = express();


const user = []

app.post('/user', (req,res)=>{
    const {name} = req.body;
    user.push(name);
    res.send(name)
})

app.get('/user',(req,res)=>{
    res.send(user)
});

app.put('/user/:index', (req,res)=>{
   const {name} = req.body; 
});

app.listen(3000);