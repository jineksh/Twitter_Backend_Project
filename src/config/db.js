const mongoose = require('mongoose');
const {URL} = require('./server');
const connect = async()=>{
    await mongoose.connect(URL);
}

module.exports = connect;