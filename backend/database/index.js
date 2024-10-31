const mongoose = require("mongoose");

const connectToDatabase = () => {
    mongoose.connect("mongodb+srv://girisijan346:sijan@cluster0.pyr8i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Database connected successfully");
}

module.exports = connectToDatabase