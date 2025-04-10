const mongoose = require('mongoose');

const hashtags = new mongoose.Schema({

    content : {
        type : String,
    },
    tweets : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Tweet'
        }
    ]

},{timestamps : true});

const Hashtag = mongoose.model('Hashtag',hashtags);
module.exports = Hashtag;