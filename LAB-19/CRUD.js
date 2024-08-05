const express = require("express");
const app = express();

app.use(express.json());

const user = [
{
    name: "Het",
    roll: 4,
}, 
{
    name: "Meet",
    roll: 31,
},
{
    name: "Mann",
    roll: 30,
},
]

app.get('/user',(req,res)=>{
    res.send(user)
});

app.post('/user', (req,res)=>{
    const {name} = req.body;
    user.push(name);
    res.send(user)
})

app.put('/user/:index', (req,res)=>{
    
})
app.listen(3000);