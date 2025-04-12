const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({

    content : {
        type : String,
        max : [250 , 'Content must be under 250 chars']
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    hashtags : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Hashtag'
        }
    ],
    likes : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Like'
        }
    ]

},{timestamps : true});

const Tweet = mongoose.model('Tweet',tweetSchema);
module.exports = Tweet;