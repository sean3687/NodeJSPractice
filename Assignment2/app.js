const express = require('express');

const app = express();

// app.use((req,res,next)=>{
//     console.log('First Middleware')
//     next();
// })

// app.use((req,res,next) =>{
//     console.log('second Middleware');
//     res.send('<p>Assignment solved</p>')
// })

app.use('/users', (req,res,next) =>{
    console.log('/users middleware')
    res.send('<p>2nd</p>')
})

app.use('/',(req,res,next) =>{
    console.log('/middleware');
    res.send('<p>1st</p>')
})






app.listen(3005);