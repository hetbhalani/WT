const express = require('express')
const app = express();

const port = 3699;

app.get('/', (req,res)=>{
    res.send("hello world");
})

app.listen(port , ()=>{
    console.log(port + "asdfghjklqwertyuiopzxcvbnm");
})