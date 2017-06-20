import * as mongoose from 'mongoose';
import {IPost} from './post';

export interface ITag extends mongoose.Document {
    name: String;
    posts: IPost[];
}

let tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

export default mongoose.model<ITag>('Tag', tagSchema);