const Exchange = require("../models/Exchange");

exports.requestExchange = async (req, res) => {
    try {
        const exchange = new Exchange({
            requester: req.user.id,
            book: req.body.bookId,
            status: "Pending",
        });
        await exchange.save();
        res.status(201).json(exchange);
    } catch (error) {
        res.status(500).json({ error: "Exchange request failed" });
    }
};

exports.getExchangeRequests = async (req, res) => {
    try {
        const exchanges = await Exchange.find({ requester: req.user.id }).populate("book");
        res.json(exchanges);
    } catch (error) {
        res.status(500).json({ error: "Could not fetch exchange requests" });
    }
};
