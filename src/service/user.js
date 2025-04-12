const userRepo = require('../repository/user');

class UserService{

    constructor(){
        this.userrepo = new userRepo(); 
    }

    async create(data){
        try{
            console.log(data);
            const user = await this.userrepo.create(data);
            return user;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }

}

module.exports = UserService;