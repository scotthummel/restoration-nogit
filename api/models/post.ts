import mongoose = require('mongoose');

export interface IPost extends mongoose.Document {
    title: string;
    body: string;
    slug: {
        type: string,
        unique: true
    }
}

let PostSchema = new mongoose.Schema({
    title: String,
    body: String,
    slug: String
});

export default mongoose.model<IPost>('Post', PostSchema);