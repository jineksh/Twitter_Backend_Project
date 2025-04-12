const User = require('../model/User');
const CrudRepo = require('./crud-repo');
class userRepo extends CrudRepo{

    constructor(){
        super(User);
    }
}

module.exports = userRepo;