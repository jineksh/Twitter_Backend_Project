
const LikeService = require('../service/like');
const {StatusCodes} = require('http-status-codes');
const service = new LikeService();

const create = async (req, res) => {
    try {
        const like = await service.toggleLike(req.query.modelName,req.query.modelId,req.body.userId);
        return res.status(StatusCodes.OK).json({
            data: like,
            message: 'Liked',
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            message: 'Not Like',
            success: false
        })
    }

};

module.exports = {
    create
}