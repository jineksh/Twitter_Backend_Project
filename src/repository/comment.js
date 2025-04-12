const Comment = require('../model/comment');
const CrudRepo = require('./crud-repo');

class commentRepo extends CrudRepo {

    constructor() {
        super(Comment);
    }

}

module.exports = commentRepo;