import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    date: String,
    createdAt: Date
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage