const tweetService = require('../service/tweet');
const {StatusCodes} = require('http-status-codes');
const service = new tweetService();
const create = async(req,res)=>{

    try {
        const tweet = await service.create(req.body);
        console.log(req.body);
        return res.status(StatusCodes.OK).json({
            data : tweet,
            message : 'SuccessFully Upload tweet',
            success : true
        })
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            data : {},
            message : 'Not Upload tweet',
            success : false
        })
    }
}

module.exports = {
    create

}