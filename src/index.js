const express = require('express');
const {PORT} = require('./config/server');
const bodyparser = require('body-parser');
const connect = require('./config/db');
const server = async()=>{

    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));



    app.listen(PORT,async()=>{
        console.log("Server was Started");
        await connect();
        console.log('mongo');
        


    })


}

server();