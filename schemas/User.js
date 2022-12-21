const { Mongoose } = require("../db");

const UserSchema = new Mongoose.Schema(
    {
      name: String,
      email: String,
      role: String,
      password: String
    },
    { collection: "users" }
  );

  Mongoose.model('users', UserSchema);

module.exports = UserSchema;