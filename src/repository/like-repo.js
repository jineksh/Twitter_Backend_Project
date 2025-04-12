const Like = require('../model/LikeSchema');
const CrudRepo = require('./crud-repo');
class likeRepo extends CrudRepo{

    constructor(){
        super(Like);
    }
    async findByuser(data){
        try {
            const like = await Like.findOne(data);
            return like;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = likeRepo;