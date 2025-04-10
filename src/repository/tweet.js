const Tweet = require('../model/tweetSchema');

class tweetRepo {

    async create(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = tweetRepo;