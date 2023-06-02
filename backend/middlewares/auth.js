const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require ( 'jsonwebtoken' )
const User = require('../models/userModel')

exports.isAuthorized = catchAsyncError(async(req,res,next)=>{
    const {token} = req.cookies
    if(!token)
    next(new ErrorHandler("Please Login to access this" , 401))
    const decoded = jwt.verify(token, process.env.SECRET)
    req.user = await User.findById(decoded.id)
    next()
})

exports.authorizedRole = (...roles) => {

    return (req,res,next)=>{
        if(! roles.includes(req.user.role))
        return next( new ErrorHandler(`Role : ${req.user.role} is not allowed to access this` , 403))
        next()
    }
}