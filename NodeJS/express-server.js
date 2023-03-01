const express = require('express');
const app = express();

// routes

app.get('/' , (req,res) =>{
    res.send("<h2>Welcome to the home page by express</h2>");
});
app.get('/about' , (req,res) =>{
    res.send("<h2>Welcome to the about by express</h2>");
});

app.listen("3001" , ()=>{
    console.log("server is running")
})
