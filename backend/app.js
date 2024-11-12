const express = require("express");
const app = express();
const connectToDatabase = require("./database");
const bookRoute = require("./route/bookRoute");
const cors = require("cors")

connectToDatabase();
app.use(express.json());
app.use(cors({
    origin : "*"
}))

app.use("",bookRoute);

app.use(express.static('./storage/'))

app.listen(3000,() => {
    console.log("Server started at port 3000...")
})