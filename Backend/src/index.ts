import 'dotenv/config'
import express from 'express'
import { PORT } from './constants/env.js'
import connectDB from './config/db.js'

const app = express();
//Middleware
// app.get('/health', (req, res) => {
//     res.send('typescript with express works good')
// })

//Routes
//Error Exapction
//Running App
app.listen(PORT, async () => {
    console.log(`server work good with typescript on port ${PORT}`);
    await connectDB()
})