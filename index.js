const express = require('express')


const app = express();

app.get('/', (req, res)=>{
    res.send('Hello World');
})

app.get('/greet/:name', (req, res)=>{
    const { name } = req.params;
    res.send(`Hello, ${name}`);
})

app.post('/greet/:name', (req, res)=>{
    const { name } = req.params;
    res.status(401).json({
        message:`Hello, ${name}`
    });
})

app.listen(4000, ()=>{
    console.log('Server is running on port 4000');
})