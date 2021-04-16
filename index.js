const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    const name = 'thomas';
    res.send('hello world!');
})

app.listen(4000, () =>{
    console.log(' this server already run at port 4000!');
});