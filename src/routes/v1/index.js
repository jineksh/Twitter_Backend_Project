const express = require('express');
const router = express.Router();
const Tweetcontroller = require('../../controller/tweet');
const Commentcontroller = require('../../controller/comment');
const Likecontroller = require('../../controller/like');
const Usercontroller = require('../../controller/user');

router.post('/comments',Commentcontroller.create);
router.post('/tweets',Tweetcontroller.create);
router.post('/likes',Likecontroller.create);
router.post('/signup',Usercontroller.create);
module.exports = router;