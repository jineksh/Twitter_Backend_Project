const tweetRepo = require('../repository/tweet');
const hashRepo = require('../repository/hash');
const Hashtag = require('../model/hashtag');

class tweetService {
    constructor() {
        this.repository = new tweetRepo();
        this.hashrepository = new hashRepo();
    }
    async create(data) {
        try {
            const content = data.content;

            const hash = content.match(/#[a-zA-Z0-9_()]+/g);
            const newHash = hash.map(hashtag => hashtag.substring(1));
            const tweet = await this.repository.create(data);
            
            var foundhash = await Hashtag.find({ content: { $in: newHash } });
            foundhash.forEach(tag=>{
                tag.tweets.push(tweet.id);
                tag.save();
            });
            var titleoftags = foundhash.map(tags => tags.content);
            const notfound = newHash.filter(content => !titleoftags.includes(content));

            const hashobj = [];
            notfound.forEach(hash => {
                hashobj.push(({ content: hash, tweets:[tweet.id] }))
            });
            const hashtags = await this.hashrepository.create(hashobj);
            foundhash = await Hashtag.find({ content: { $in: newHash } });

            foundhash.forEach(hash=>{
                tweet.hashtags.push(hash.id);
                tweet.save();
            })
           
            return tweet;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = tweetService;