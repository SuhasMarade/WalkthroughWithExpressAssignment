const express = require('express');
const app = express();

const PORT = 8080;
const HOSTNAME = 'localhost';
app.get('/',(req,res) => {
    res.send('<h1>Welcome to the homepage of Random number generator');
});
app.get('/random',(req,res) => {
   let random = Math.floor(Math.random()*100)+1
    res.send(JSON.stringify({'random':random}));
});

app.listen(PORT,()=>{
    console.log(`App running on ${HOSTNAME}:${PORT}`);
})