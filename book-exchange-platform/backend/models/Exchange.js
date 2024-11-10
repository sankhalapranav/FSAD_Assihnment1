const mongoose = require("mongoose");

const ExchangeSchema = new mongoose.Schema({
    requester: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
    status: { type: String, enum: ["Pending", "Accepted", "Rejected"], default: "Pending" },
});

module.exports = mongoose.model("Exchange", ExchangeSchema);
