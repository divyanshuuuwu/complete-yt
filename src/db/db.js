const mongoose = require("mongoose");
const dns = require("dns")
dns.setServers(["1.1.1.1", "8.8.8.8"])

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://div_tester:hero123@backend1.vqamill.mongodb.net/leo")

        console.log("DB connected");
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB;



