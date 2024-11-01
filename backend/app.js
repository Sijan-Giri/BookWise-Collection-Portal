const express = require("express");
const app = express();
const connectToDatabase = require("./database");
const bookRoute = require("./route/bookRoute");

connectToDatabase();
app.use(express.json());

app.use("",bookRoute);

app.listen(3000,() => {
    console.log("Server started at port 3000...")
})