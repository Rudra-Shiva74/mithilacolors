const mongoose = require("mongoose");
const URL = "mongodb+srv://ujjwalroyy:LordKrishna1401@cluster0.c2tzu45.mongodb.net/ecomm";
const connectDb = async () => {
    try {
        await mongoose.connect(URL);
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDb;