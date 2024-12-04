const mongoose = require("mongoose");

const interactionSchema = new mongoose.Schema({
    type: String,
    element: String,
    value: String,
    timestamp:{type: Date, default: Date.now},

});

module.exports = mongoose.model("Interaction",interactionSchema );
