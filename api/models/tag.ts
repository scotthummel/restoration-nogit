import * as mongoose from 'mongoose';
let uniqueValidator = require('mongoose-unique-validator');
import {IPost} from './post';

export interface ITag extends mongoose.Document {
    name: String;
    slug: String;
    posts: IPost[];
}

let tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, 'A tag name is required']
    },
    slug: {
        type: String,
        unique: true
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

tagSchema.plugin(uniqueValidator);

export default mongoose.model<ITag>('Tag', tagSchema);