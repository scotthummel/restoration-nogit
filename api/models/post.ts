import mongoose = require('mongoose');

export interface IPost extends mongoose.Document {
    title: string;
    body: string;
}

let PostSchema = new mongoose.Schema({
    title: String,
    body: String
});

export default mongoose.model<IPost>('Post', PostSchema);