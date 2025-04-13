const userRepo = require('../repository/user');

class UserService {

    constructor() {
        this.userrepo = new userRepo();
    }

    async create(data) {
        try {
            console.log(data);
            const user = await this.userrepo.create(data);
            return user;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    async login(userEmail,password) {
        try {
            const user = await this.userrepo.getwithEmail(userEmail);
            if (!user) {
                throw new Error('User not Found');
            }
            const response = await user.compare(password);
            if (!response) {
                throw new Error('Password is Incorrect');
            }
            const token = await user.createToken(user.userEmail, user.id);
            return token;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }

}

module.exports = UserService;