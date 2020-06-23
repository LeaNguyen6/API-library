var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var transactionsSchema = new Schema({
  user: { type: "ObjectId", ref: "Users" },
  book: { type: "ObjectId", ref: "Books" },
  timeStart:{type: Date, default: new Date().toLocaleDateString()},
  timeEnd:{type:Date},
  isComplete:{type:Boolean, default:false}
});

// khai bao model : tên model, dùng schema nào, tên collection
var Transaction = mongoose.model(
  "Transaction",
  transactionsSchema,
  "transactions"
);

module.exports = Transaction;
