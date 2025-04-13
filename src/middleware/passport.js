var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport'); 
const User = require('../model/User');
const { Strategy } = require('passport-jwt');
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'AUTH';

const passportAuth = (passport) => {
    passport.use(new Strategy(opts, async (jwt_payload, done,err) => {
        const user = await User.findById(jwt_payload.id);
        // Aur jwt_payload mein aapko user ki information milti hai jo token se decode hoti hai.
        if(err){
            return done(err,false);
        }
        if (!user) {
            return done(null,false);
        }
        else {
            return done(null,user);
        }


    }))
};

module.exports= passportAuth;