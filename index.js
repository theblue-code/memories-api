import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postRouter from './routes/posts.js'

const app = express()
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/posts', postRouter)

app.get('/', (req, res) => res.send("Welcome To Memories API"))

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL)
    .then(app.listen(PORT, () => console.log(`Server is running on ${PORT}`)))
    .catch((error) => console.log(error.message))

module.exports = app