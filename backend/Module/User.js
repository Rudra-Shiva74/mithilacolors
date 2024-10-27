const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    mobile: Number
});
const usercardSchema = new mongoose.Schema({
    email: String,
    pid: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'  // referencing the Product model
    }]
});

const usercardModel = new mongoose.model("usercards", usercardSchema);
const userModel = new mongoose.model("users", userSchema);
module.exports = {
    userModel,
    usercardModel
}
