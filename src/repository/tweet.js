const Tweet = require('../model/tweetSchema');
const CrudRepo = require('./crud-repo');
class tweetRepo extends CrudRepo{

    constructor() {
        super(Tweet);
    }
    async create(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async find(id){
        try {
            const tweet = await Tweet.findById(id).populate({path : 'likes'});
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = tweetRepo;