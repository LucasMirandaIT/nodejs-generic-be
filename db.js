const mongoose = require("mongoose");
console.log("Process ::: ", `mongodb+srv://${process.env.dbUsername}:${process.env.dbPassword}@${process.env.dbURL}?retryWrites=true&w=majority`);
mongoose.connect(
  `mongodb+srv://${process.env.dbUsername}:${process.env.dbPassword}@${process.env.dbURL}?retryWrites=true&w=majority`
);



module.exports = { Mongoose: mongoose };
