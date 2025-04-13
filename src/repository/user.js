const User = require('../model/User');
const CrudRepo = require('./crud-repo');
class userRepo extends CrudRepo{

    constructor(){
        super(User);
    }
    async getwithEmail(email){
        try {
            const user = await User.findOne({userEmail : email});
            return user;
            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = userRepo;