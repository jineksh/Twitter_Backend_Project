
const CommentService = require('../service/comment');
const {StatusCodes} = require('http-status-codes');
const service = new CommentService();

const create = async (req, res) => {
    try {
        const comment = await service.create(req.query.modelId,req.query.modeltype,req.user.id,req.body.content);
        return res.status(StatusCodes.OK).json({
            data: comment,
            message: 'Commented',
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            message: 'Not Upload Comment',
            success: false
        })
    }

};

module.exports = {
    create
}