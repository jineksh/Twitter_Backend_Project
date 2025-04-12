const likeRepo = require('../repository/like-repo');
const TweetRepo = require('../repository/tweet');
class LikeService {

    constructor() {
        this.repository = new likeRepo();
        this.tweetRepository = new TweetRepo();
    }

    async toggleLike(modelName, modelId, userId) {
        try {
            console.log(modelId);
            if (modelName === 'Tweet') {
                var likearray = await this.tweetRepository.find(modelId);
            }
            else if (modelName === 'Comment') {
                //todo
            }
            else {
                throw new Error('Something went Wrong');
            }

            const exits = await this.repository.findByuser({
                onModel: modelName,
                user: userId,
                likeable: modelId
            });

            if (exits) {
                likearray.likes.pull(exits.id);
                await likearray.save();
                await exits.remove();
                var response = false;
            }
            else {
                const like = await this.repository.create({
                    onModel: modelName,
                    user: userId,
                    likeable: modelId
                });
                likearray.likes.push(like);
                await likearray.save();
                var response = true;
            }
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = LikeService;