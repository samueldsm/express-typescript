import express from 'express' //ESModules
//const express =require('express') -> commonjs

import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json()) //middleware que trasnforma la req.body a un json

const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log('someone pinged here !! ' + new Date().toLocaleDateString())
    res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
    console.log(`Server runing on port ${PORT}`)
})