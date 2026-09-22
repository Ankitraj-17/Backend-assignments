const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/assignment12";
  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`);
  } catch (error) {
    console.error("MongoDB Atlas connection error:", error.message);
    // If Atlas connection fails (e.g. bad credentials/IP whitelist), fall back to local MongoDB
    if (uri.startsWith("mongodb+srv://")) {
      console.log("Note: Could not connect to MongoDB Atlas with the provided credentials.");
      console.log("Attempting fallback to local MongoDB (127.0.0.1:27017)...");
      try {
        const localConn = await mongoose.connect("mongodb://127.0.0.1:27017/assignment12");
        console.log(`Connected to local MongoDB: ${localConn.connection.host}/${localConn.connection.name}`);
        return;
      } catch (localError) {
        console.error("Local MongoDB fallback also failed:", localError.message);
      }
    }
    process.exit(1);
  }
};

module.exports = connectDB;

