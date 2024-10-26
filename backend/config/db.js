const mongoose = require("mongoose");
const URL = "mongodb://localhost:27017/mithila";
const connectDb = async () => {
    try {
        await mongoose.connect(URL);
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDb;