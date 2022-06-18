const mongoose = require("mongoose");

const TypeSchema = new mongoose.Schema({
    fruit: { type: Boolean },
    vegetable: { type: Boolean },
}, { timestamps: true });

module.exports = mongoose.model("type", TypeSchema);