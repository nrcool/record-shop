const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
  quantity: {
    type: Number,
    required: true
  },
  record: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("orders", OrderSchema);