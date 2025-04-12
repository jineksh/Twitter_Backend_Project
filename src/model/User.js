const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    }
});
userSchema.pre('save', async function(){
    const saltRounds = 10;
    const salt = await bcrypt.genSaltSync(saltRounds);
    const hash = await bcrypt.hashSync(this.password, salt);
    this.password = hash;
})

const User = mongoose.model('User', userSchema);


module.exports = User;