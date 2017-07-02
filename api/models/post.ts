import mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

export interface IPost extends mongoose.Document {
    title: string;
    body: string;
    slug: {
        type: string,
        unique: true
    }
}

let postSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true, 'A post title is required']
    },
    body: {
        type: String,
        required:[true, 'A post body is required']
    },
    slug: {
        type: String,
        unique: true
    }
});

postSchema.plugin(uniqueValidator);

export default mongoose.model<IPost>('Post', postSchema);