const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://${process.env.dbUsername}:${process.env.dbPassword}@${process.env.dbURL}?retryWrites=true&w=majority`
);



module.exports = { Mongoose: mongoose };
