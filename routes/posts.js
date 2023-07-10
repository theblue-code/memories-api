import express from 'express'

import { getPosts, createPost, deletePost } from '../controllers/posts.js'

const Router = express.Router()

Router.get("/", getPosts)
Router.post("/", createPost)
Router.delete("/:id", deletePost)

export default Router