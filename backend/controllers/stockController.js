const stock = require('../models/stockModel')
const ErrorHandler = require('../utils/errorhandler')
const catchAsyncError = require('../middlewares/catchAsyncError')

//get all products
exports.getAllStocks = catchAsyncError( async(req,res,next) => {
    const stocks = await stock.find({ user: req.user._id });
    res.status(200).json({
        status : true,
        stocks
    })
})

//add new stock
exports.addStock = catchAsyncError (async(req,res,next) => {
    req.body.user = req.user._id
    const createdStock = await stock.create(req.body);

    res.status(201).json({
    success: true,
    createdStock,
    });
})

//delete a stock
exports.deleteStock = catchAsyncError( async(req,res,next) => {
    const Stock = await stock.findById(req.params.id)
    
    if(!Stock){
        return next(new ErrorHandler("Stock Not Found", 404))
    }

    Stock.deleteOne({_id : req.params.id}).then(res.status(200).json({
        success : true,
        message : "Removed Successfully"
    })).catch(err=>{
        console.log(err)
    })
})