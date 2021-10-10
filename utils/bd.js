const mongoose = require('mongoose');

const connectDB = async () => {
  try {
      await mongoose.connect(`${process.env.DB_HOST}`, {});
      console.log("Connected DB !!!");
  }catch(error){
      console.log("Error: " + error);
      process.exit(1);
  }
};

module.exports = { connectDB };
