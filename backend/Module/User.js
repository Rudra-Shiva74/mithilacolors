const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    mobile: Number
});
const usercardSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    product: [{
        pid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products'  // referencing the Product model
        },
        quantity: {
            type: Number,
            required: true,
            default: 1  // default quantity if not specified
        }
    }]
});

const usercardModel = new mongoose.model("usercards", usercardSchema);
const userModel = new mongoose.model("users", userSchema);
module.exports = {
    userModel,
    usercardModel
}
