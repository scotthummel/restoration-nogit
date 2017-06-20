import mongoose = require('mongoose');

let MessageSchema = new mongoose.Schema({
    title: String,
    body: String
});

export default mongoose.model('Message', MessageSchema);