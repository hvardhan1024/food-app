require("dotenv").config();
const mongoose = require("mongoose");
const dbName = process.env.DBName;
const dbPass = process.env.MONGO_PASS;
const mongoURI = `mongodb+srv://${dbName}:${dbPass}@foodappmern.tcae3gf.mongodb.net/?retryWrites=true&w=majority`;

const connectMongoDB = async () => {
  await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
    console.log(" Connected to db ");
    if (err) {
      console.log(err);
    }
  });
};

module.exports = connectMongoDB;
