const express = require('express');
const router = express.Router();
const Tweetcontroller = require('../../controller/tweet');
const Commentcontroller = require('../../controller/comment');
const Likecontroller = require('../../controller/like');
const Usercontroller = require('../../controller/user');
const Auth = require('../../middleware/auth');


router.post('/comments',Auth,Commentcontroller.create);
router.post('/tweets',Auth,Tweetcontroller.create);
router.post('/likes',Auth,Likecontroller.create);
router.post('/signup',Usercontroller.create);
router.post('/signin',Usercontroller.SignIn);
module.exports = router;