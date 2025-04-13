const passport = require('passport');

const Auth = (req,res,next)=>{
    passport.authenticate('jwt',(err,user,data)=>{
        if(err) next(err);
        if(!user){
            return res.json({
                message : 'Unauthorised user'
            })
        }
        req.user = user;
        next();
    })(req,res,next);
}

module.exports = Auth;