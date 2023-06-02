const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  symbol: {
    type: String, 
    required: true
  },
  name: {
    type: String, 
    required: true
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  totalAmount: {
    type: Number,
    required: true,
    default: 0,
  },
  status: {
    type: String,
    required: true,
    default: "Buyed",
  },
  user: {
    type : mongoose.Schema.ObjectId,
    ref : "User",
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Stock", stockSchema);