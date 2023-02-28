const express = require("express");
const router = express.Router();

const db = require("../db");
const ExperienceSchema = require("../schemas/Experience");

const Experience = db.Mongoose.model("experiences", ExperienceSchema, "experiences");

router.get("", async (req, res) => {
  const experiences = await Experience.find().sort({startDate: -1})
    .then(async (value) => {
      res.status(200).send(value);
    })
    .catch((err) => res.status(500).send({ error: err }));
});
router.post("", async (req, res) => {
  const experiences = await Experience.create(req.body)
    .then((value) => {
      return res.status(201).send({ data: value });
    })
    .catch((err) => res.status(500).send({ error: err }));
});

module.exports = router;
