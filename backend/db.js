require("dotenv").config();
const mongoose = require("mongoose");
const dbName = process.env.DBName;
const dbPass = process.env.MONGO_PASS;
const mongoURI = `mongodb+srv://${dbName}:${dbPass}@foodappmern.tcae3gf.mongodb.net/data?retryWrites=true&w=majority`;


const connectMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();
    // console.log(data);
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};



// Reading data
// const connectMongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true });
//     console.log("Connected to MongoDB");

//     const fetched_data = await mongoose.connection.db.collection("food_items");
//     const data = await fetched_data.find({}).toArray();
//     console.log(data);
//   } catch (err) {
//     console.error("MongoDB connection error:", err);
//   }
// };

module.exports = connectMongoDB;
 