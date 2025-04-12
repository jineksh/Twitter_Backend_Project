const UserService = require('../service/user');
const service = new UserService();
const {StatusCodes}= require('http-status-codes');

const create = async(req,res)=>{

    try {
        const tweet = await service.create({
            userEmail : req.body.userEmail,
            password : req.body.password,
            name : req.body.name
        });
        return res.status(StatusCodes.OK).json({
            data : tweet,
            message : 'SuccessFully SignUp',
            success : true
        })
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            data : {},
            message : 'Not SignUp',
            success : false
        })
    }
}

module.exports ={
    create
}