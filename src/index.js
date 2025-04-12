const express = require('express');
const {PORT} = require('./config/server');
const bodyparser = require('body-parser');
const connect = require('./config/db');
const Apiroutes = require('./routes/index');

const userRepo = require('./repository/user');
const tweetrepo = require('./repository/tweet');
const  LikeService = require('./service/like');
const tweetRepo = require('./repository/tweet');


const server = async()=>{

    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.use('/api',Apiroutes);


    app.listen(PORT,async()=>{
        console.log("Server was Started");
        await connect();
        console.log('mongo');
        const repo = new userRepo();
        const tweetrepo = new tweetRepo();
        const user = await repo.create({
            userEmail : 'harsh@admin.com',
            password : '1234456',
            name : 'harsh'
        })
        const tweets = await tweetrepo.getall(0,10);
        const likeservice = new LikeService();
        await likeservice.toggleLike('Tweet',tweets[3].id,user.id);

    })


}

server();