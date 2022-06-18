const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: String },
    inStockQuantity: { type: Number },
    type: { type: mongoose.mongoose.Schema.Types.ObjectId, ref: "type" },
}, { timestamps: true });

module.exports = mongoose.model("", ItemSchema);