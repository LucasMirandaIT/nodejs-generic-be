const express = require("express");
const router = express.Router();

const db = require("../db");
const { UserSchema } = require("../schemas/User");

const User = db.Mongoose.model("users", UserSchema, "users");

// router.get("/", async (req, res) => {
//   const data = "Balance";
//   res.status(200).send({ balances });
// });

router.post("/login", async (req, res) => {
  const users = await User.find({ email: req.body.username })
    .then((value) => {
      if (req.body.password === value[0].password)
        res.status(200).send({ data: value });

      res.status(401).send({ message: "Senha inválida" });
    })
    .catch((err) => res.status(500).send({ error: err }));
});
router.post("/register", async (req, res) => {
  const users = await User.create(req.body)
    .then((value) => {
      res.status(201).send({ data: value });
    })
    .catch((err) => res.status(500).send({ error: err }));
});

module.exports = router;
