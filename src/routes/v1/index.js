const express = require('express');
const router = express.Router();
const Tweetcontroller = require('../../controller/tweet');
router.post('/tweets',Tweetcontroller.create);

module.exports = router;