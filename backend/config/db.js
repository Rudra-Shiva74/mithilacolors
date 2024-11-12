const mongoose = require("mongoose");
const URL = "mongodb+srv://supershivamtrick:supershivamtrick@cluster0.5kzpv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectDb = async () => {
    try {
        await mongoose.connect(URL);
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDb;