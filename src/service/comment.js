const commentRepo = require('../repository/comment');
const TweetRepo = require('../repository/tweet');

class CommentService{

    constructor(){
        this.commentrepo = new commentRepo();
        this.tweetrepo = new TweetRepo();
    }
    

    async create(modelId,modeltype,userId,content){
        try{
            if(modeltype === 'Tweet'){
                var commentable = await this.tweetrepo.get(modelId);
            }
            else if(modeltype === 'Comment'){
                var commentable = await this.commentrepo.get(modelId);
            }
            else{
                throw new Error('Something went wrong');
            }
            const comment = await this.commentrepo.create({
                content : content,
                onModel : modeltype,
                commentable : modelId,
                user : userId,
                comments : []
            });
            commentable.comments.push(comment);
            await commentable.save();

            return comment;
        }
        catch(error){
            console.log(error);
            throw error;
        }

    }


}

module.exports = CommentService;