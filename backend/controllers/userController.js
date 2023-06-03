const User = require('../models/userModel')
const ErrorHandler = require('../utils/errorhandler')
const catchAsyncError = require('../middlewares/catchAsyncError')
const jwtToken = require('../utils/jwtToken')
const sendEmail = require('../utils/sendEmail')
const crypto = require('crypto')

//register a User
exports.registerUser = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
        return res.status(400).json({ error: "enter details" })
    }
    const user = await User.create({
        name, email, password
    })
    jwtToken(user, 201, res)
})

// login User
exports.loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ error: "enter details" })
    }
    const user = await User.findOne({ email }).select("+password")
    if (!user) {
        return res.status(400).json({ error: "user not found" })
    }
    const isCorrect = await user.comparePassword(password)
    if (!isCorrect) {
        return res.status(400).json({ error: "pass invalid" })
    }
    jwtToken(user, 200, res)
})

//logout User
exports.logOut = catchAsyncError(async (req, res, next) => {
    res.cookie("token ", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "logged out Successfully"
    })
})

exports.forgotPassword = catchAsyncError(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        return next(new ErrorHandler("User Not Found", 404))
    }

    const resetToken = await user.getResetPasswordToken()
    await user.save({ validateBeforeSave: false })
    console.log(resetToken)
    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/password/reset/${resetToken}`
    const message = `Your password reset Token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it`
    try {
        await sendEmail({
            email: user.email,
            subject: "Ecommerce Password Reset",
            message
        })
        res.status(200).json({
            success: true,
            message: `Email Sent to ${user.email} successfully !`
        })

    } catch (error) {
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined

        await user.save({ validateBeforeSave: false })

        return next(new ErrorHandler(error.message, 500))
    }
})


//RESET PASSWORD 
exports.resetPassword = catchAsyncError(async (req, res, next) => {

    //creating token hash
    // console.log(req.params.token)
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex")
    console.log(resetPasswordToken)
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })

    if (!user) {
        return next(new ErrorHandler("Reset Password Token is Invalid or has expired !", 400))
    }

    if (req.body.password != req.body.confirmPassword) {
        return next(new ErrorHandler("Password donot match", 400))
    }

    user.password = req.body.password
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined

    await user.save()

    //user logged in
    jwtToken(user, 200, res)
})

//getUserDetails
exports.getUserDetails = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id)

    res.status(200).json({
        success: true,
        user
    })
})

//updateUserDetails 
exports.updateUserDetails = catchAsyncError(async (req, res, next) => {

    const newUserData = {
        name: req.body.name,
        email: req.body.email
    };

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        user
    })
})

//changePassword
exports.updatePassword = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password")

    const isMatched = await user.comparePassword(req.body.oldPassword)

    if (!isMatched) {
        return next(new ErrorHandler("Old Password is Incorrect", 400))
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler("Confirm Password do not match with new Password", 400))
    }

    user.password = req.body.newPassword
    await user.save()

    jwtToken(user, 200, res)
})

//deleteUser 
exports.deleteUser = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.params.id)

    if (!user) {
        return next(new ErrorHandler(`User doesnot exist with ID : ${req.params.id}`, 404))
    }

    const imageId = user.avatar.public_id;
    await user.remove()

    res.status(200).json({
        success: true,
        message: "user deleted successfully"
    })
})