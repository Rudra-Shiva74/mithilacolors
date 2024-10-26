const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    mobile: Number
});
const adminModel = new mongoose.model("admin", adminSchema);
module.exports = adminModel;