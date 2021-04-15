const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    body:{
        type: String,
        required: true
    },
    videoembed:{
        type: Array,
        required: true
    },
},{collection: 'lists'}, { timestamps: true});

const List = mongoose.model('List', listSchema);
module.exports = List;
