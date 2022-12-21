const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const db = require("../db");
const { UserSchema } = require("../schemas/User");

const User = db.Mongoose.model("users", UserSchema, "users");

router.post("/login", async (req, res) => {
  const users = await User.find({ email: req.body.username })
    .then(async(value) => {
      const { password, _id, __v, ...user } = value[0].toObject();
      if(await bcrypt.compare(req.body.password, value[0].password)) {
          res.status(200).send(user)
        } else {
          res.status(401).send({ message: "Senha inválida" })
        }
    }).catch((err) => res.status(500).send({ error: err }));
});
router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const encriptedPassword = await bcrypt.hash(req.body.password, salt);

  const users = await User.create({
    ...req.body,
    password: encriptedPassword,
  })
    .then((value) => {
      return res.status(201).send({ data: value });
    })
    .catch((err) => res.status(500).send({ error: err }));
});

module.exports = router;
