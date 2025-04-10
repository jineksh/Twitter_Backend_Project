const Hashtag = require('../model/hashtag');

class hashRepo {

    async create(data){
        try {
            const hashtag = await Hashtag.insertMany(data);
            return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async get(data){
        try {
            const hashtag = await Hashtag.findOne(data);
            return hashtag;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = hashRepo;