import express from 'express'

const app = express();

app.get('/health',(req,res)=>{
    res.send('typescript with express works good')
})

app.listen(3000,()=>{
    console.log("server work good with typescript on port 3000");
})