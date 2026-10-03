const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const categorySchema = new Schema({
    category: String
});

module.exports = mongoose.model("Category", categorySchema);